import React from "react";
import { TypeAnimation } from "react-type-animation";
import { CodeBlock, dracula } from "react-code-blocks";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [hoverTop, setHoverTop] = React.useState(50);
  const [hoverLeft, setHoverLeft] = React.useState(50);

  const hoverHandler = () => {
    setHoverLeft(Math.floor(Math.random() * (80 - 10 + 1) + 10));
    setHoverTop(Math.floor(Math.random() * (80 - 10 + 1) + 10));
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
      <div className="wave">
        <img src="/img/wave.svg" alt="wave" />
      </div>
      <div className="homeContent">
        <div className="homeContentElement hc-f green">
          <div id="title">
            <span>We provide some tools to improve your efficiently</span>
          </div>
          <div id="lmenu">
            <Link to="/html">
              <img
                alt="html"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
              />
              <span>HTML</span>
            </Link>
            <Link to="/css">
              <img
                alt="css"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              />
              <span>CSS</span>
            </Link>
            <Link to="/json">
              <img alt="json" src="/img/json.svg" />
              <span>JSON</span>
            </Link>
            <Link to="/colors">
              <img alt="colors" src="/img/palette.svg" />
              <span>Colors</span>
            </Link>
          </div>
        </div>
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
          <div id="codeTag">
            <CodeBlock
              style={{ marginBottom: "15px" }}
              text={
                "#parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"
              }
              language={"css"}
              theme={dracula}
              codeBlock
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
