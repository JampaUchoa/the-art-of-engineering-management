import * as React from "react";
const SVGComponent = (props: any) => (
  <svg
    viewBox="-110 -110 220 220"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <style>
      {
      }
    </style>
    <defs>
      <path id="petal-half-left" d="M0 0v-98c-15 0-35 38-30 68Z" />
      <path id="petal-half-right" d="m0 0 30-30c5-30-15-68-30-68Z" />
      <path
        id="petal-shape"
        d="M30-30c5-30-15-68-30-68s-35 38-30 68a60 60 0 0 1 60 0"
      />
    </defs>
    <g id="logo-compass-flower">
      <use href="#petal-shape" className="logo-part" />
      <use href="#petal-shape" className="logo-part" transform="rotate(90)" />
      <use href="#petal-shape" className="logo-part" transform="rotate(180)" />
      <use href="#petal-shape" className="logo-part" transform="rotate(270)" />
      <use
        href="#petal-half-left"
        className="dark-petal"
      />
      <use
        href="#petal-half-right"
        className="light-petal"
      />
      <use
        href="#petal-half-left"
        transform="rotate(90)"
        className="dark-petal"
      />
      <use
        href="#petal-half-right"
        transform="rotate(90)"
        className="light-petal"
      />
      <use
        href="#petal-half-left"
        transform="rotate(180)"
        className="dark-petal"
      />
      <use
        href="#petal-half-right"
        transform="rotate(180)"
        className="light-petal"
      />
      <use
        href="#petal-half-left"
        transform="rotate(270)"
        className="dark-petal"
      />
      <use
        href="#petal-half-right"
        transform="rotate(270)"
        className="light-petal"
      />
    </g>
  </svg>
);
export default SVGComponent;
