// Create boilerplate with shortcut by typing "rafce"
// Default export
import React, { useState } from "react";

const Category = ({ id, name, img, filterVideos }) => {
  const [active, setActive] = useState(false);

  // If use syntax below then above line should pass in props, Ref: https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/21947240#overview
  // They both do exactly the same thing
  // const { name, img } = props;

  return (
    <img
      src={img}
      width="20%"
      key={id}
      alt={name}
      width="20%"
      className={active ? "active" : "inactive"}
      onClick={() => {
        setActive(!active);
        filterVideos(name);
      }}
    />
  );
};

export default Category;
