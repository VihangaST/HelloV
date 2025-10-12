import React from "react";
// import "@google/model-viewer";

const ARViewer = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <model-viewer
        src="/models/cake1.glb"
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
        onError={(e) =>
          alert(
            "AR mode not available on this device. You can still view the 3D model!"
          )
        }
      ></model-viewer>
    </div>
  );
};

export default ARViewer;
