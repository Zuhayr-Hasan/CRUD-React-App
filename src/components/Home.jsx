import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employee from './Employee'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  let history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age)
    localStorage.setItem('Id', id)
  }

  const handleDelete = (id) => {
    var index = Employee.map(function(e) {
      return e.id
    }).indexOf(id);

    Employee.splice(index, 1);

    history('/');
  }
  return (
    <>
      <div style={{ margin: '10rem' }}>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employee && Employee.length > 0
              ? Employee.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>
                        <Link to={`/edit`}>
                          <Button
                            style={{ background: 'purple', border: 'none' }}
                            onClick={() => handleEdit(item.id, item.name, item.age)}
                          >
                            Edit
                          </Button>
                        </Link>
                        &nbsp;
                        <Button
                          style={{ background: 'purple', border: 'none' }}
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  )
                })
              : 'No Data Available'}
          </tbody>
        </Table>
        <br></br>
        <Link className='d-grid gap-2' to='/create'>
          <Button size='lg' style={{ background: 'purple', textDecoration: 'underline', border: 'none' }}>
            Create
          </Button>
        </Link>
      </div>
    </>
  )
}

export default Home