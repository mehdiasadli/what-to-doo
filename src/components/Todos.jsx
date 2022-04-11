import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getAllTodos } from '../app/todosSlice'
import axios from 'axios'

import Todo from '../components/Todo'

const Container = styled.div`
  background-color: var(--primary-color);
  color: var(--white-color);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
    
`
const P = styled.p`
  position: absolute;
  top:40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Todos = () => {
  // const [ todos, setTodos ] = useState([])
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todos)
  const isLoading = useSelector(state => state.todos.isLoading)

  useEffect(() => {
    dispatch(getAllTodos())
  }, [])

  return (
    <Container>
        <Wrapper>
            { isLoading ? <P>Loading</P> : todos
                ? todos.map(todo => <Todo todo={todo} />)
                : <h3>You Have no Todos</h3>
            }
        </Wrapper>
    </Container>
  )
}

export default Todos