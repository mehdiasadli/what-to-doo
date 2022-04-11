import styled from 'styled-components'

import Todos from '../components/Todos'
import Footer from '../components/Footer'

const Container = styled.div`
  background-color: var(--primary-color);
  color: var(--white-color);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  position: relative;
`
const Logo = styled.h2`
`

const Main = () => {
  return (
    <Container>
      <Logo>Your Todos</Logo>
      <Todos />
      <Footer />
    </Container>
  )
}

export default Main