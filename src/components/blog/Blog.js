import IMG1 from '../assets/airconditioning/1.jpg';
import IMG2 from '../assets/airconditioning/2.jpg';
import IMG3 from '../assets/airconditioning/3.jpg';
import IMG4 from '../assets/airconditioning/4.jpg';
import IMG5 from '../assets/airconditioning/5.avif';
import IMG6 from '../assets/airconditioning/6.jpg';
import IMG7 from '../assets/airconditioning/8.avif';
import IMG8 from '../assets/airconditioning/7.webp';

const Blog = () => (
  <div className="py-5">
    <div className="container text-center">
      <h1>Air conditioning & Refrigeration Blog</h1>
      <p>
        Stories, News and Information about Air conditioning and refrigeration.
        <br />
        Learn more about the products and services we offer
      </p>
    </div>
    <div className="air-cond-projects">
      <img src={IMG1} alt="IMG1" height={200} />
      <img src={IMG2} alt="IMG2" height={200} />
      <img src={IMG3} alt="IMG3" height={200} />
      <img src={IMG4} alt="IMG4" height={200} />
      <img src={IMG5} alt="IMG5" height={200} />
      <img src={IMG6} alt="IMG6" height={200} />
      <img src={IMG7} alt="IMG7" height={200} />
      <img src={IMG8} alt="IMG8" height={200} />
    </div>
  </div>
);

export default Blog;
