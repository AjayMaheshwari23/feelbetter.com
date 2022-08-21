import "./About.css";

export default function About() {
  return  <div id="container">
  <div id="toptext"><br/><br/></div>
  <div id="toptext1"><p>Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text
      Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text<br/></p></div>
  <div id="ourteam"><p>OUR TEAM</p></div><br/>
  <div className="row">
      <div className="column">
          <img id="image1" src="https://drive.google.com/thumbnail?id=1MWwapUg4O3NhEQTwmLxsEdoFxFw9wFLU" alt="Snow" />
      </div>
      <div className="column">
          <img id="image2" src="https://drive.google.com/thumbnail?id=1fjFE43N2QkE2ynINAmpGhhetWsWpbmXR" alt="Forest" />
      </div>
  </div>
  <div className="row1">
      <div className="column1">
          <p>Kishan Kumar<br/>Frontend & BackEnd Developer</p>
      </div>
      <div className="column1">
          <p>Ajay Maheshwari<br/>Backend Developer</p>
      </div>
  </div>
</div>
}
