import React from "react";

const TimeRange = ({ timeRange, setTimeRange }) => {
  return (
    <>
      <article>
        <label htmlFor="timeRange" className="form-label">
          Example range - TODO wire this up with making a playlist
        </label>
        <input
          value={timeRange}
          type="range"
          className="form-range"
          id="timeRange"
          name="timeRange"
          onChange={(e) => setTimeRange(e.target.value)}
          min="5"
          max="60"
          step="5"
        ></input>
        <div>Value: {timeRange}</div>
      </article>
    </>
  );
};

export default TimeRange;
