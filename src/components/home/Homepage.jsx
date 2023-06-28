import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../common/style.css';

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
    const imageKeywords = ['news', 'breaking news', 'headline news', 'news article'];
    const randomKeyword = imageKeywords[Math.floor(Math.random() * imageKeywords.length)];
    return `https://source.unsplash.com/400x300/?${randomKeyword}`;
  };

  return (
    <div>
      <header className="header text-center bg-primary py-3">
        <h1 className="text-uppercase text-white">News Website</h1>
        {/* Navigation */}
      </header>
      <main className="container mt-5">
        <section>
          <div className="row">
            <div className="col-lg-8">
              <div className="headline-news mb-4">
                {headlineNews && (
                  <>
                    <img
                      src={getRandomImage()}
                      alt="Headline News"
                      className="img-fluid mb-3"
                    />
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
                    <div className="article">
                      <img
                        src={getRandomImage()}
                        alt={article.title}
                        className="img-fluid"
                      />
                      <h3 className="mt-3">{article.title}</h3>
                      <p>{article.summary}</p>
                      <Link to={`/article/${article.id}`} className="btn btn-primary">
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                {articles.slice(6, 9).map((article) => (
                  <div className="col-lg-12 mb-4" key={article.id}>
                    <div className="small-article">
                      <img
                        src={getRandomImage()}
                        alt={article.title}
                        className="img-fluid mb-3"
                      />
                      <h3>{article.title}</h3>
                      <p>{article.summary}</p>
                      <Link to={`/article/${article.id}`} className="btn btn-primary">
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer text-center py-3 bg-dark text-white">
        <p>&copy; 2023 News Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
