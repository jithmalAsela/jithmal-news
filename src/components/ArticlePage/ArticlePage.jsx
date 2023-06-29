import React, { useEffect, useState } from 'react';
import Header from '../common/header/Header';
import { useParams, Link } from 'react-router-dom';
import Footer from '../common/footer/Footer';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticle();
    fetchArticles();
  }, [id]);

  const fetchArticle = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/articles/${id}`);
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.log('Error fetching article:', error);
    }
  };

  const fetchArticles = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/articles');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.log('Error fetching articles:', error);
    }
  };

  const getRandomImage = () => {
    const imageUrls = [
      'https://placeimg.com/400/300/any',
      'https://picsum.photos/400/300'
    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  };

  return (
    <div>
      <Header />
      <div className="container">
        {article ? (
          <div>
            <h2>{article.title}</h2>
            <img src={getRandomImage()} alt={article.title} className="img-fluid" />
            <p>{article.content}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <h3>Other News</h3>
        <div className="row">
          {articles.map((item) => (
            <div className="col-lg-4 mb-4" key={item.id}>
              <div className="card">
                <img src={getRandomImage()} alt={item.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.summary}</p>
                  <Link to={`/article/${item.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default ArticlePage;
