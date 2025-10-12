import React from "react";
// import "@google/model-viewer";

const ARCard = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <model-viewer
        src="/models/cake.glb"
        // ios-src="/models/cake.usdz"
        alt="Birthday Cake"
        ar
        ar-modes="scene-viewer quick-look webxr"
        auto-rotate
        camera-controls
        style={{
          width: "100%",
          height: "500px",
          maxWidth: "600px",
          borderRadius: "20px",
        }}
      ></model-viewer>
    </div>
  );
};

export default ARCard;
