import React, { useState } from "react";
import Categories from "./Categories"; // default import does not need curly braces, name does not need to match
import TimeRange from "./TimeRange";
import Videos from "./Videos";
import { items } from "./data/videos";
import { categories } from "./data/categories"; // curly braces because it is a named export. Because it is a JS file don't need .js extension
import { useEffect } from "react";

const allCategories = [
  { id: 0, name: "All", img: "./img/All.jpg" },
  ...categories,
];

const selectedCategoriesDictionary = new Set();

// function name must be capitalised so React knows it is a component declaration
function App() {
  const [videos, setVideos] = useState([]);
  const [videosTotalLength, setVideosTotalLength] = useState(0);
  const [categories, setCategories] = useState(allCategories);
  const [timeRange, setTimeRange] = useState(15);

  const calculateTotalLength = (videos) => {
    const selectedVideosLengthArray = videos.map((video) => {
      return video.duration.total.seconds;
    });

    console.log("selectedVideosLengthArray", selectedVideosLengthArray);

    if (selectedVideosLengthArray.length > 0) {
      const reducer = (previousValue, currentValue) =>
        previousValue + currentValue;
      const totalLength = selectedVideosLengthArray.reduce(reducer);

      return totalLength;
    } else {
      return 0;
    }
  };

  const filterVideos = (category) => {
    if (selectedCategoriesDictionary.has(category)) {
      selectedCategoriesDictionary.delete(category);
    } else {
      selectedCategoriesDictionary.add(category);
    }

    if (selectedCategoriesDictionary.has("All")) {
      setCategories(allCategories);
      setVideos(items);
      return;
    }

    const newVideos = items.filter((video) => {
      return selectedCategoriesDictionary.has(video.category);
    });

    setVideos(newVideos);
  };

  useEffect(() => {
    setVideosTotalLength(calculateTotalLength(videos));
    console.log("videos", videos);
    console.log("videosTotalLength", videosTotalLength);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit - timeRange:", timeRange);
  };

  // component should return HTML, technically called JSX
  return (
    <main>
      <h2>VHS - 80s remix - Choose your own adventure workouts</h2>

      <section>
        <form onSubmit={handleSubmit}>
          <TimeRange
            timeRange={timeRange}
            setTimeRange={setTimeRange}
          ></TimeRange>

          <h2>Toggle categories to select videos</h2>

          {/* <button>Make my remix</button> */}

          <Categories categories={categories} filterVideos={filterVideos} />
          <Videos videos={videos}></Videos>

          {/* TODO - Build out playlist from selected videos */}
          {/* Reference - https://dev.vhx.tv/player/ Getting started */}
          {/* Full link - https://embed.vhx.tv/videos/1417965?api=1&auth-user-token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMjg3MDMzOSwiZXhwIjoxNjQzNzUxMzEyfQ.0hHxep4uKeY0B6dO_g8QvydWtPYrSzDwaR1CGeHdOqo&autoplay=1&back=BUNS%20OF%20STEEL&collection_id=280161&color=948fca&context=https%3A%2F%2Fwww.retrosweathomevideo.com%2Fbuns-of-steel&is_trailer=false&live=0&locale=en&playsinline=1&product_id=75904&referrer=https%3A%2F%2Fwww.retrosweathomevideo.com%2Fbuns-of-steel&sharing=1&title=0&vimeo=1*/}
          {/*
        <iframe
          id="video"
          src="https://embed.vhx.tv/videos/1416228?api=1&auth-user-token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMjg3MDMzOSwiZXhwIjoxNjQzOTIwMjQzfQ.Nuxf-NP_fvldAB7uWSpoD-YP8PrWYRZHSfLSr0rGa8g"
          width="650"
          height="280"
          frameborder="0"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
        */}
          <script src="https://cdn.vhx.tv/assets/player.js"></script>
        </form>
      </section>
    </main>
  );
}

export default App;
