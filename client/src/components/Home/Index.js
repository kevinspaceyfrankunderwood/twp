import React, { Component } from 'react'

import { Header } from 'semantic-ui-react'
import axios from 'axios'

import AboveTheFold from './AboveTheFold'
import EverySeed from './EverySeed'
import Dragonfly from './DragonFly'
import InstagramGoogle from './InstagramGoogle'
import { TWPDiv } from '../../styles/GenericStyledComponents'
import TwoInfoBoxes from './TwoInfoBoxes'

export const Index = () => {
  return (
    <div>
      <AboveTheFold />
      <TwoInfoBoxes />
      <EverySeed />
      <Dragonfly />
      <InstagramGoogle />
      <TWPDiv>
        <iframe
          src='https://www.google.com/maps/d/u/0/embed?mid=1X8vfQjjnxOLWqmTO6JJf4-Tr5uo'
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </TWPDiv>
    </div>
  )
}

export default Index
