import React from "react";
import blueeyes from "./blueeyes.jpg";

function Landing() {
  const myStyle = {
    height: "99vh", // Set the height to 100% of the viewport height
    width: "100%", // Set the width to 100% of the viewport width
    overflow: "hidden", // Optional: Hide any overflow if the image is larger than the viewport
  };

  const imgStyle = {
    height: "100%", // Make the image fill the container height
    width: "100%", // Make the image fill the container width
    objectFit: "cover", // Optional: This will stretch the image to cover the container while maintaining aspect ratio
  };

  return (
    <div style={myStyle}>
      <img src={blueeyes} alt="" style={imgStyle} />
    </div>
  );
}

export default Landing;
