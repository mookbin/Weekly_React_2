import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// import { PLUS_ONE, MINUS_ONE } from "./redux/modules/counter";
// import { plusOne, minusOne } from "./redux/modules/counter";
import { useState } from "react";
import { plusN, minusN } from "./redux/modules/counter";

function App() {
  const [number, setNumber] = useState(0);

  // useEffect(() => {
  //   console.log("number->", number);
  // }, [number]);

  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다.
  //useSelector 라는 훅

  const counter = useSelector((state) => {
    return state.counter;
  });
  //중앙저장소 안에있는 state 전체를 말한다

  console.log("counter -> ", counter.number);
  //counter-> 0

  //dispatch를 가져와보자
  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(event) => {
            // setNumber(+event.target.value);
            const { value } = event.target;
            setNumber(+value);
          }}
        />
      </div>
      <button
        onClick={() => {
          //+1을 해주는 로직을 써주면 된다.
          // dispatch({
          //   type: PLUS_ONE,
          // });
          // dispatch(plusOne());
          dispatch(plusN(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // dispatch({
          //   type: MINUS_ONE,
          // });
          // dispatch(minusOne());
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
