import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#01c49f",
  color: "white",
};

function Box1({ initCount }) {
  console.log("Box1 컴포넌트가 렌더링되었습니다.");
  return (
    <div style={style}>
      <button
        onClick={() => {
          initCount();
        }}
      >
        초기화
      </button>
      {/* 버튼 눌렀을 때 initCount가 호출되도록 */}
    </div>
  );
}

export default React.memo(Box1);
