import React from "react";

const Book = props => {
  return (
    <div>
      {props.book._id} ({props.book.description})
    </div>
  );
};

export default Book;
