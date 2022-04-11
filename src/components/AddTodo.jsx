import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../app/todosSlice'
import axios from 'axios'

const Container = styled.div`
  background-color: var(--primary-color);
  color: var(--white-color);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`
const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Input = styled.input`
  width: 30%;
  height: 1.8rem;
  padding: 0 1rem;
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 800px) {
    width: 75%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`
const Btn = styled.button`
  width: 30%;
  height: 1.8rem;
  background-color: var(--dark-color);
  color: var(--white-color);
  &:hover {
    background-color: var(--white-color);
    color: var(--black-color);
  }
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 800px) {
    width: 75%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`
const P = styled.p`
  transition: all 0.3s ease;
  color: var(--error-color);
`

const AddTodo = () => {
  const dispatch = useDispatch()
  const [ empty, setEmpty ] = useState('')
  const [ newTodo, setNewTodo ] = useState({
    title: '',
    desc: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()

    if(!newTodo.title) {
      setEmpty('Title Cannot be Empty')
      setTimeout(() => {setEmpty('')}, 3000)
    } else {
        dispatch(addTodo(newTodo)).then(() => setNewTodo({ title: '', desc: '' }))
    }

  }

  return (
    <Container>
      <Form onSubmit={e => handleSubmit(e)} >
        Add a Todo
        {empty && <P>{empty}</P>}
        <Input type='text' value={newTodo.title} onChange={e => setNewTodo({...newTodo, title: e.target.value})} placeholder='Add a Title' />
        <Input type='text' value={newTodo.desc} onChange={e => setNewTodo({...newTodo, desc: e.target.value})} placeholder='Add a Description' />
        <Btn onClick={e => handleSubmit(e)} >Add</Btn>
      </Form>
    </Container>
  )
}

export default AddTodo