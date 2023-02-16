import React, { useState } from "react";
import { Button, Col, FormControl, Row } from "react-bootstrap";
import { v1 as uuidv1 } from "uuid";
import s from "./TodoForm.module.css";

const TodoForm = ({ todo, setTodo }) => {
  const [value, setValue] = useState();

  function addList() {
    if (value != "" && value != null) {
      setTodo([
        ...todo,
        {
          id: uuidv1(),
          status: true,
          name: value,
        },
      ]);
      setValue("");
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === "Enter") addList();
  };

  return (
    <div className={s.form}>
      <FormControl
        placeholder="Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
      />
      <select name="" id="">
        <option value="">1 day</option>
        <option value="">2 day</option>
      </select>
      <select name="" id="">
        <option value="">Work</option>
        <option value="">Train</option>
        <option value="">Study</option>
      </select>
      <Button className={s.btn} variant="outline-secondary" onClick={addList}>
        Add
      </Button>
    </div>
  );
};

export default TodoForm;
