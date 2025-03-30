import { Html, useProgress } from "@react-three/drei";
import React, { useMemo } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();

  const memorizedProgressFixed2 = useMemo(() => progress.toFixed(2), [progress]);

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {memorizedProgressFixed2}%
      </p>
    </Html>
  );
};

export default React.memo(CanvasLoader);
