import React from "react";
import CollectionsSlider from "./CollectionsSlider";
const Collections = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="mt-24 mx-auto container xl:px-24 md:px-8 px-4 relative">
      <h2 className="text-center text-maingold text-3xl font-medium mb-8">
        New Collections
      </h2>
      <CollectionsSlider />
    </div>
  );
};

export default Collections;
