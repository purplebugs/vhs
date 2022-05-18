import React from "react";
import Category from "./Category";

const Categories = ({ categories, filterVideos }) => {
  return (
    <div>
      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            {...category}
            filterVideos={filterVideos}
          ></Category>
        );
      })}
    </div>
  );
};

export default Categories;
