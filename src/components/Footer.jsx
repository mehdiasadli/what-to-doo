import styled from 'styled-components'

import Remaining from '../components/Remaining'
import DeleteAll from '../components/DeleteAll'

const Container = styled.div`
  background-color: var(--accent-color);
  color: var(--white-color);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`

const Footer = () => {
  return (
    <Container>
        <Remaining />
        <DeleteAll />
    </Container>
  )
}

export default Footer