import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Navneet</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Problem Solver</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Tech Enthusiast</div>
            </div>
          </div>
          <p className="i-desc">
            I am First Year CS Undergrad at Scaler School of Technology, Bengaluru.
            <br />
            I am developing this website as my college project.
            <br />
            Currently it's my Second Semester Going on. 
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;