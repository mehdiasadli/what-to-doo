import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Remaining = () => {
  const todos = useSelector(state => state.todos.todos)
  let remaining = 0
  todos.forEach(todo => {
    !todo.isDone && remaining++
  })

  return (
    <Container>The number of Remaining Todos is {remaining}</Container>
  )
}

export default Remaining