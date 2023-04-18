import React from "react";
import Father from "./Father";
import { FamilyContext } from "../context/FamilyContext";
//GF -> Child한테 어떤 정보를 알려줘서 Child가 그 내용을 출력하도록//?!

function GrandFather() {
  const houseName = "sparta";
  const pocketMoney = 10000;
  return (
    <FamilyContext.Provider
      value={{
        houseName,
        pocketMoney,
      }}
    >
      <Father />
    </FamilyContext.Provider>
  );
}

export default GrandFather;
