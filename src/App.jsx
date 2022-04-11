import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from './views/Home'

const Container = styled.section`
    height: 100vh;
    width: 100vw;    
`

const App = () => {
  return (
    <Container>
        <Routes>
            <Route path='/' exact element={<Home />} />
        </Routes>
    </Container>
  )
}

export default App