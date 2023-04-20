import React from "react";
import { Link } from "react-router-dom";
import { todo } from "../shared/todo";

function Details() {
  return (
    <div>
      <h3>상세페이지</h3>
      {todo.map((item) => {
        return (
          <div key={item.id}>
            {item.id} &nbsp;{" "}
            <Link to={`/details/${item.id}`}>
              {item.todo}
              {item.hi}
            </Link>{" "}
          </div>
        );
      })}
    </div>
  );
}

export default Details;
