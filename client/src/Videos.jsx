import React from "react";

const Videos = ({ videos }) => {
  return (
    <div>
      <h2>Videos</h2>
      {videos.map((video) => {
        const { id, title, url, instructor, duration } = video;
        return (
          <article key={id}>
            <a href={url}>{url}</a>
            <div>
              <h4>{title}</h4>
              <h4>
                {duration.minutes} mins {duration.seconds} seconds
              </h4>
            </div>
            <p>{instructor}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Videos;
