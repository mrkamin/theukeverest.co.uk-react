import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';

const Blog = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "post"]{
  title,
  slug,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  }
}`,
    )
      .then((data) => setProjects(data))
      .catch(console.error);
  });
  return (
    <main>
      <section className="d-flex flex-column align-items-center p-5">
        <h1>Air conditioning & Refrigeration Blog</h1>
        <p>
          Stories, News and Information about Air conditioning and
          refrigeration.
          <br />
          Learn more about the products and services we offer
        </p>
        <div className="grid">
          {projects && projects.map((post) => (
            <article key={post.slug.current}>
              <Link to={`/post/${post.slug.current}`} key={post.slug.currect}>
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt}
                  className=""
                />
                <h3>{post.title}</h3>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
