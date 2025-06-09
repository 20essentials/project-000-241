import { style, keyframes, globalStyle } from "@vanilla-extract/css";

// Global resets
globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  WebkitTapHighlightColor: "transparent",
});

globalStyle("html, body", {
  height: "100%",
});

// Body
export const body = style({
  height: "100dvh",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  placeContent: "center",
  backgroundColor: "#000",
  overflow: "hidden",
});

// Keyframe for rotation
const rotate = keyframes({
  "0%": {
    transform: "rotateX(0deg) rotateY(0deg)",
  },
  "100%": {
    transform: "rotateX(369deg) rotateY(369deg)",
  },
});

// Container
export const container = style({
  width: "130px",
  height: "130px",
  borderRadius: "50%",
  transformStyle: "preserve-3d",
  perspective: "10000px",
  position: "relative",
  animation: `${rotate} 10s linear infinite`,
});

// Aro
export const aro = style({
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
  transformStyle: "preserve-3d",
  perspective: "10000px",
  borderRadius: "inherit",
  boxShadow: "0 0 10px 0px moccasin",
});
