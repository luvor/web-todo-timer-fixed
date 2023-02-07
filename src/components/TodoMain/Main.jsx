import React, { useState } from 'react'
import { Button, Col, FormControl, Row } from 'react-bootstrap';
import { v1 as uuidv1 } from 'uuid';
import s from './Main.module.css'

const Main = ({todo,setTodo}) => {
  const [value,setValue] = useState()


  function addList(){
    setTodo([...todo,
      {
        id:uuidv1(),
        status:true,
        name:value
      }
      
    ]
    )
    setValue('')

  }
  return (
    <Row>
      <Col className={s.form}>
      <FormControl placeholder='Name' value={value} onChange = {(e)=>setValue(e.target.value)} />
      <Button className={s.btn} variant="outline-secondary" onClick={addList} >Add</Button>
      </Col>
    </Row>
  )
}

export default Main