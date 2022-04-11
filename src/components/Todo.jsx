import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../app/todosSlice'
const Container = styled.div`
    width: 20rem;
    background-color: ${props => props.isDone ? 'var(--secondary-color)' : 'var(--dark-color)'};
    padding: 1rem;
    cursor: pointer;
`

const Todo = ({ todo }) => {
  const dispatch = useDispatch()

  const handleClick = () => dispatch(updateTodo(todo._id))
  
  return (
    <Container key={`todo--${todo._id}`}  isDone={todo.isDone} onClick={() => handleClick()} >
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
    </Container>
  )
}

export default Todo