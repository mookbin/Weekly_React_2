import React from "react";
import { useParams } from "react-router-dom";
import { todo } from "../shared/todo";
function Detail() {
  const params = useParams();

  //console.log(params);

  //어떤 todo인지 찾아보기
  const foundTodo = todo.find((item) => {
    //console.log("item.id", item.id);
    //console.log("params.id", params.id);
    return item.id === parseInt(params.id);
  });

  // console.log("foundData", foundData);
  return (
    <div>
      <h3>할 일 : {foundTodo.todo}</h3>
    </div>
  );
}

export default Detail;
