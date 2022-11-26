import React from "react";

function Arrow() {
  const [arrowDisplay, setArrowDisplay] = React.useState("flex");
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="arrow" style={{ display: arrowDisplay }}>
      <img src="img/arrow.svg" alt="arrow" />
    </div>
  );
}

export default Arrow;
