import React, { useState, useEffect } from "react";

import useFetchGifs from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const {images,isLoading} = useFetchGifs(category);
  return (
    <>
      <section id="trendingPreview" className="trendingPreview-container">
        <div className="trendingPreview-header">
          <h2 className="trendingPreview-title">{category}</h2>
          <button className="trendingPreview-btn">Ver más</button>
        </div>
        <article className="trendingPreview-movieList">
        {images.map((image) => (
          <GifItem 
            key={image.id}
            {...image}
          />
        ))}
        </article>
      </section>
    </>
  );
};
