// // import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { todolist } from "../shared/todollist";

// function Details() {
//   const params = useParams();
//   console.log(params);

//   const foundTodo = todolist.find((item) => {
//     return item.id === parseInt(params.id);
//   });

//   return (
//     <>
//       <div>{`ID: ${foundTodo.id}`}</div>
//       <h2>{foundTodo.title}</h2>
//       <div>{foundTodo.content}</div>
//     </>
//   );
// }

// export default Details;
