import React from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const [arrowDisplay, setArrowDisplay] = React.useState("flex");
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const [hoverTop, setHoverTop] = React.useState(50);
  const [hoverLeft, setHoverLeft] = React.useState(50);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (scrollPosition > 0) {
      setArrowDisplay("none");
    } else {
      setArrowDisplay("flex");
    }
  }, [scrollPosition]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const hoverHandler = () => {
    setHoverLeft(Math.floor(Math.random() * (90 - 10 + 1) + 10));
    setHoverTop(Math.floor(Math.random() * (90 - 10 + 1) + 10));
  };

  return (
    <div className="homePanel">
      <div className="homeTitle">
        <div>
          <span>
            Automate simple task
            <TypeAnimation
              sequence={[
                "with us",
                1000, // Waits 1s
                "",
                2000, // Waits 2s
                "with us",
                () => {},
              ]}
              wrapper="sub"
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </div>
      </div>

      <div className="homeContent">
        <img src="/img/wave.svg" alt="wave" />
        <div className="homeContentElement hc-f green">
          <div id="title">
            <span>We provide some tools to improve your efficiently</span>
          </div>
          <div id="lmenu">
            <div>
              <img
                alt="html"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
              />
              <span>HTML</span>
            </div>
            <div>
              <img
                alt="html"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              />
              <span>CSS</span>
            </div>
            <div>
              <img
                alt="html"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
              />
              <span>SQL</span>
            </div>
            <div>
              <img
                alt="html"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              />
              <span>Pyhon</span>
            </div>
          </div>
        </div>
      </div>

      <div className="arrow" style={{ display: arrowDisplay }}>
        <img src="img/arrow.svg" alt="arrow" />
      </div>

      <div className="homeContent">
        <div className="homeContentElement hc-f yellow">
          <div id="title" style={{ marginTop: "50px" }}>
            <span>U know how to center a div?</span>
          </div>
          <div id="centerDiv">
            <div
              onMouseEnter={hoverHandler}
              style={{ top: `${hoverTop}%`, left: `${hoverLeft}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
