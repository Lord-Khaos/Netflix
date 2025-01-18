import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleFilter = (e) => {
    e.preventDefault();
    onFilter({ title, rating });
  };

  return (
    <form className="filter-form" onSubmit={handleFilter}>
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Filter</button>
    </form>
  );
};

export default Filter;
