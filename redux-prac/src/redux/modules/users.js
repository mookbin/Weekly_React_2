//초기 상태값(state)

const initialState = {
  userId: 123,
};
//const [number,setNumber] = useState(0)

// 리듀서 : 'state에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

//  input값에는 두가지를 받는다 state와 action
const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default users;
