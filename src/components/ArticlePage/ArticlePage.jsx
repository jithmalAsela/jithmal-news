import React from 'react';

const ArticlePage = () => {
  return (
    <div>
      <header>
        <h1>News Website</h1>
        {/* Navigation */}
      </header>
      <main>
        <article>
          <h2>Article Title</h2>
          <p>Published: Date</p>
          <p>Author: Author Name</p>
          <p>Article Content</p>
        </article>
      </main>
      <footer>
        <p>&copy; 2023 News Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ArticlePage;
