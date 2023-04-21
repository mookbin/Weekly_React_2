import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addTodo, completeTodo, removeTodo } from "../redux/modules/reducer";

const Toptitle = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid gray;
  font-size: 18px;
  padding: 15px;
`;

const Inputbox = styled.div`
  background-color: #eee;
  margin: 20px 10px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-weight: 600;
  border-radius: 10px;
`;
const Inputstyle = styled.input`
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
`;

const Addbuttonstyle = styled.button`
  margin-left: 185px;
  width: 150px;
  padding: 10px;
  background-color: #008080;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const Boxlist = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Todobox = styled.div`
  margin-left: 10px;
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;

const Buttonset = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 24px;
`;

const Todobutton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 2px solid ${(props) => props.bordercolor};
  border-radius: 10px;
  width: 150px;
  height: 35px;
  cursor: pointer;
`;

const H2st = styled.h2`
  padding-left: 20px;
`;

function Home() {
  const todolist = useSelector((state) => state.todolist);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const clickAddButton = () => {
    const maxId = Math.max(...todolist.map((id) => id.id));
    dispatch(
      addTodo({
        id: maxId + 1,
        title,
        content,
      })
    );
  };

  const clickRemoveButtonHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const clickCompleteButtonHandler = (id) => dispatch(completeTodo(id));

  return (
    <>
      <Toptitle>
        <span>My Todo List</span> <span>React</span>
      </Toptitle>
      <Inputbox>
        <div>
          <span>
            제목 &nbsp;{" "}
            <Inputstyle value={title} onChange={titleChangeHandler} />
          </span>
          <span>
            내용 &nbsp;{" "}
            <Inputstyle value={content} onChange={contentChangeHandler} />
          </span>
        </div>
        <Addbuttonstyle onClick={clickAddButton}>추가하기</Addbuttonstyle>
      </Inputbox>
      <H2st>Working..🔥</H2st>
      <Listbox
        todolist={todolist.filter((item) => !item.isDone)}
        clickRemoveButtonHandler={clickRemoveButtonHandler}
        clickCompleteButtonHandler={clickCompleteButtonHandler}
      />
      <H2st>Done..!🎉</H2st>
      <Listbox
        todolist={todolist.filter((item) => item.isDone)}
        clickRemoveButtonHandler={clickRemoveButtonHandler}
        clickCompleteButtonHandler={clickCompleteButtonHandler}
      />
    </>
  );
}

function Listbox({
  todolist,
  clickRemoveButtonHandler,
  clickCompleteButtonHandler,
}) {
  return (
    <Boxlist>
      {todolist.map((todoitem) => {
        return (
          <Todobox key={todoitem.id}>
            <Link to={`/Details/${todoitem.id}`}>상세보기</Link>
            <h2>{todoitem.title}</h2>
            <div className="listcontent">{todoitem.content}</div>
            <Buttonset>
              <Todobutton
                bordercolor="red"
                onClick={() => clickRemoveButtonHandler(todoitem.id)}
              >
                삭제하기
              </Todobutton>
              <Todobutton
                bordercolor="green"
                onClick={() => clickCompleteButtonHandler(todoitem.id)}
              >
                {todoitem.isDone ? "취소" : "완료"}
              </Todobutton>
            </Buttonset>
          </Todobox>
        );
      })}
    </Boxlist>
  );
}
export default Home;
