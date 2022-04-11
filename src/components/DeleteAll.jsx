import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { deleteAll } from '../app/todosSlice'

const Container = styled.button`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: var(--white-color);
  font-size: 1.05rem;
  &:hover {
    background-color: var(--error-color);
  }
  @media (max-width: 800px) {
    width: 30%;
  }
`

const DeleteAll = () => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteAll())
  }
  return (
    <Container onClick={() => handleDelete()} >
      DeleteAll
    </Container>
  )
}

export default DeleteAll