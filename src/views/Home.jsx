import styled from 'styled-components'

import Title from '../components/Title'
import AddTodo from '../components/AddTodo'
import Main from '../components/Main'

const Container = styled.section`
    height: 100%;
    width: 100%;
    background-color: var(--white-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
`

const Home = () => {
  return (
    <Container>
        <Title title='What TO DOO' />
        <AddTodo />
        <Main />
    </Container>
  )
}

export default Home