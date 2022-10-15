import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employee from './Employee'
import { v4 as uuid } from 'uuid'
import { Link, useNavigate } from 'react-router-dom'

const Edit = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [id, setId] = useState('')

  let history = useNavigate()

  var index = Employee.map((e) => e.id).indexOf(id)

  const handleSubmit = (e) => {
    e.preventDefault()
    let a = Employee[index]
    a.name = name
    a.age = age

    history('/')
  }

  useEffect(() => {
    setName(localStorage.getItem('Name'))
    setAge(localStorage.getItem('Age'))
    setId(localStorage.getItem('Id'))
  }, [])

  return (
    <div>
      <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Control
            type='text'
            value={name}
            placeholder='Enter Name'
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formAge'>
          <Form.Control
            type='text'
            value={age}
            placeholder='Enter Age'
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          onClick={(e) => handleSubmit(e)}
          type='Submit'
          style={{ background: 'purple', border: 'none', padding: '10px 0' }}
        >
          Update
        </Button>
      </Form>
    </div>
  )
}

export default Edit