//action value (휴먼에러 방지)
const PLUS_ONE = "counter/PLUS_ONE";
const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N";

//action creator (휴먼에러 방지) : action value를 return 하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
    //   payload:
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

//초기 상태값(state)
const initialState = {
  number: 0,
};
//const [number,setNumber] = useState(0)

// 리듀서 : 'state에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

//  input값에는 두가지를 받는다 state와 action
//action 객체라는 것은 action type을 payload만큼 처리하는 것이다.
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      //   return state + 1; 라고 쓰면 안됨 원래 객체였기 때문에 객체로 맞춰주자
      return {
        number: state.number + 1,
      };

    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
