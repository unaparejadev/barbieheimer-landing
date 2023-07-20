import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="./fonts/barbie.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="barbieFont"
    />,
  ]);
};
