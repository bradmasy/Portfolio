import React from "react";
import customFont from "../../assets/fonts/Montserrat.ttf";


const customFontFamily = "Montserrat";
const fontFace = `
@font-face {
  font-family: ${customFontFamily};
  src: url(${customFont}) format("woff2");
  /* You may need to adjust the font file path accordingly */
}
`;

export const TileStyles: React.CSSProperties = {
    display: "flex",
    fontFamily: fontFace,
    height:"100%",
    width:"100%",
    borderRadius:"5px",
    backgroundColor: "white",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"1.5rem",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
}