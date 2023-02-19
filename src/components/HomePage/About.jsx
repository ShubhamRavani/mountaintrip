import "./About.css";

function About() {
  return (
    <div id="textblock">
      <div id="textblock-container">
        <h1 id="textblock-title">What is Parallax?</h1>
        <p id="textblock-content">
          <br />
          Parallax is the apparent shift in the position of an object when
          viewed from different positions. The term is often used in astronomy
          to describe the apparent shift in the position of a star when viewed
          from different points in the Earth's orbit around the Sun.
          <br />
          <br />
          The parallax of a star is caused by the fact that we view the star
          from different angles as the Earth moves around the Sun. This causes
          the star to appear to move slightly against the background of more
          distant stars. By measuring the amount of parallax, astronomers can
          determine the distance to a star.
          <br />
          <br />
          Parallax is also used in other fields, such as in photography to
          describe the apparent displacement of an object in a photograph as a
          result of taking the photograph from different positions. This
          technique is used, for example, to create 3D images or to measure
          distances in close-up photography.
        </p>
      </div>
      <footer id="textblock-footer">
        Demo Created With 🧡 By&nbsp;
        <a id="textblock-shubham" href="https://shubham-ravani.vercel.app/">
          Shubham Ravani{" "}
        </a>
      </footer>
    </div>
  );
}

export default About;
