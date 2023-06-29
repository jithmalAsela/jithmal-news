import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../common/style.css';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';

const Homepage = () => {
  const [articles, setArticles] = useState([]);

  const headlineNews = articles.find((article) => article.featured);

  useEffect(() => {
    fetchArticles();
  }, []);

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

  const renderArticle = (article) => {
    const articleUrl = `/article/${article.id}`;

    return (
      <article key={article.id} className="article">
        <img src={getRandomImage()} alt={article.title} className="article-image" />
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
        <Link to={articleUrl} className="btn btn-primary">
          Read More
        </Link>
      </article>
    );
  };

  return (
    <div>
      <Header />
      <main className="container mt-5">
        <section>
          <div className="row">
            <div className="col-lg-8">
              <div className="headline-news mb-4">
                {headlineNews && (
                  <>
                    <div className="image-container">
                      <img
                        src={getRandomImage()}
                        alt="Headline News"
                        className="img-fluid"
                      />
                    </div>
                    <h2>{headlineNews.title}</h2>
                    <p>{headlineNews.summary}</p>
                    <Link to={`/article/${headlineNews.id}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </>
                )}
              </div>
              <div className="row">
                {articles.slice(0, 6).map((article) => (
                  <div className="col-lg-4 mb-4" key={article.id}>
                    {renderArticle(article)}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                {articles.slice(6, 9).map((article) => (
                  <div className="col-lg-12 mb-4" key={article.id}>
                    {renderArticle(article)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
