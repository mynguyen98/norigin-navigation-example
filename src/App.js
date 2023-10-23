import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import styled, { createGlobalStyle } from 'styled-components'

import { init } from '@noriginmedia/norigin-spatial-navigation'

import Menu from './Menu'
import Content from './Content'
init({
  debug: false,
  visualDebug: true,
  // useGetBoundingClientRect:true
})

function App() {
  return (
    <React.StrictMode>
      <AppContainer>
        <Menu focusKey='MENU' />
        <Content />
      </AppContainer>
    </React.StrictMode>
  )
}
export default App

const AppContainer = styled.div`
  background-color: #221c35;
  /* width: 1440px; */
  height: 100vh;
  display: flex;
  flex-direction: row;
`
