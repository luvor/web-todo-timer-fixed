import React, { useState } from "react";
import { Button } from "react-bootstrap";
import s from "./Todo.module.css";
import open from "../icons/unlock.png";
import close from "../icons/padlock.png";
import edit from "../icons/edit.png";
import delet from "../icons/delete.png";

const TodoList = ({ todo, setTodo }) => {
  const [change, setChange] = useState(null);
  const [value, setValue] = useState();

  function deleteItem(id) {
    let newlist = [...todo].filter((item) => item.id != id);
    setTodo(newlist);
  }
  function changeItem(id, name) {
    setChange(id);
    setValue(name);
  }

  function closeItem(id) {
    let newList = [...todo].map((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newList);
  }

  function saveChanges(id) {
    let newList = [...todo].map((item) => {
      if (item.id == id) {
        item.name = value;
      }
      return item;
    });
    setTodo(newList);
    setChange(null);
  }
  return (
    <>
      {todo.map((item) => (
        <div className={s.items} key={item.id}>
          {change == item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div className={!item.status ? s.stat : ""}>{item.name}</div>
          )}
          {change == item.id ? (
            <div>
              <Button
                className={s.btn}
                variant="outline-danger"
                onClick={() => saveChanges(item.id)}
              >
                Save
              </Button>
            </div>
          ) : (
            <div>
              <Button
                className={s.btn}
                variant="outline-danger"
                onClick={() => deleteItem(item.id)}
              >
                <img className={s.icons} src={delet}></img>
              </Button>
              <Button
                className={s.btn}
                variant="outline-danger"
                onClick={() => changeItem(item.id, item.name)}
              >
                <img className={s.icons} src={edit}></img>
              </Button>
              <Button
                className={s.btn}
                variant="outline-danger"
                onClick={() => closeItem(item.id)}
              >
                {item.status ? (
                  <div>
                    <img className={s.icons} src={close}></img>
                  </div>
                ) : (
                  <div>
                    <img className={s.icons} src={open}></img>
                  </div>
                )}
              </Button>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default TodoList;
