import IMG1 from '../assets/commircial refergration/1.png';
import IMG2 from '../assets/commircial refergration/2.jpg';
import IMG3 from '../assets/commircial refergration/3.jpg';
import IMG4 from '../assets/commircial refergration/4.avif';
import IMG5 from '../assets/commircial refergration/5.png';
import IMG6 from '../assets/commircial refergration/7.jpg';
import IMG7 from '../assets/commircial refergration/6.jpg';
import IMG8 from '../assets/commircial refergration/8.jpg';

const OurProjects = () => (
  <>
    <div className="d-flex flex-column align-items-center gap-5 mt-5 text-center">
      <h1>Air Conditioning & Refrigeration Projects</h1>
      <p>
        Air conditioning and refrigeration case studies in the London area.
        <br />
        Examples of recent air conditioning projects.
        {' '}
        <br />
        Learn more about the type of projects we cover
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
  </>
);
export default OurProjects;
