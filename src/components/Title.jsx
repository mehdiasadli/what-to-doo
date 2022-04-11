import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--primary-color);
  color: var(--white-color);
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.h1`
  font-size: 1.5rem;
`

const Title = ({ title }) => {
  return (
    <Container>
      <Logo>{title}</Logo>
    </Container>
  )
}

export default Title