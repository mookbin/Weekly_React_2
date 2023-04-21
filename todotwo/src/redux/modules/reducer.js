// // src/modules/button.js

// // 초기 상태값
// const initialState = [
//     {
//         id: 1, // id는 모두 고유값이어야 합니다.
//         title: "리액트 강의보기",
//         body: "챕터 1부터 챕터 12까지 학습",
//         isDone: false
//     },

// ]

// // 리듀서
// const button = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TODO:
//             return {
//                 id: state.id + 1,
//             }
//         case DEL_TODO:
//             return {
//                 id: state.id - 1
//             }
//         case CHECK_TODO:
//             return {
//                 state.isDone === true ? '취소' : '완료'
//             }
//     }
// };

// const ADD_TODO = 'ADD_TODO'
// const DEL_TODO = 'DEL_TODO'
// const CHECK_TODO = 'CHECK_TODO'

// export const addTodo = (title, content) => {
//     return {
//         type: ADD_TODO,
//         payload: {
//             id: id + 1,
//             title,
//             content,
//         }
//         // type에는 위에서 만든 상수로 사용 (vscode에서 자동완성 지원)
//     };
// };

// export const deleteTodo = () => {

// }

// const clickButton = () => {
//     const maxId = Math.max(...todolist.map((id) => (id.id)))
//     console.log(maxId + 1)
//     const newTodolist = {
//         id: maxId + 1,
//         title,
//         content
//     }
//     setTodolist([...todolist, newTodolist])
// }

// const clickRemoveButtonHandler = (id) => {
//     const newTodo = todolist.filter((a) => a.id !== id)
//     setTodolist(newTodo)
// }

// const clickCompleteButtonHandler = id => setTodolist(a =>
//     a.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item)
// );

// 모듈파일에서는 리듀서를 export default 한다.
// export default button;

//액션타입 정의
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

//액션 생성자 함수
export const addTodo = (id, title, content) => {
  return {
    type: ADD_TODO,
    payload: {
      id,
      title,
      content,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: {
      id,
    },
  };
};

export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: {
      id,
    },
  };
};

//초기상태 정의
const initialState = {
  todolist: [
    { id: 1, title: "1번", content: "1번 내용", isDone: false },
    { id: 2, title: "2번", content: "2번 내용", isDone: true },
  ],
};

//리듀서 함수 정의
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todolist: [...state.todolist, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todolist: state.todolist.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todolist: state.todolist.map((item) =>
          item.id === action.payload.id
            ? { ...item, isDone: !item.isDone }
            : item
        ),
      };
    default:
      return state;
  }
};

export default reducer;
