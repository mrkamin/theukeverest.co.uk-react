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
      <section>
        <h1>Air conditioning & Refrigeration Blog</h1>
        <p>
          Stories, News and Information about Air conditioning and
          refrigeration.
          <br />
          Learn more about the products and services we offer
        </p>
        <div>
          {projects && projects.map((post) => (
            <article key={post.slug.current}>
              <Link to={`/post/${post.slug.current}`} key={post.slug.currect}>
                <span className="">
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    className=""
                  />
                  <span>
                    <h3>{post.title}</h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
