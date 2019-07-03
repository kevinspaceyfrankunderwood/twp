import React, { Component } from 'react'

import { Header } from 'semantic-ui-react'
import axios from 'axios'

import AboveTheFold from './AboveTheFold'
import EverySeed from './EverySeed'
import Dragonfly from './DragonFly'
import InstagramGoogle from './InstagramGoogle'
import { TWPDiv } from '../../styles/GenericStyledComponents'
import TwoInfoBoxes from './TwoInfoBoxes'
import TWPStyleGuide from '../../styles/TWPStyleGuide'

export const Index = () => {
  return (
    <div>
      <AboveTheFold />
      <TwoInfoBoxes />
      {/* <EverySeed /> */}
      <Dragonfly />
      <InstagramGoogle />
      <TWPDiv backgroundColor={TWPStyleGuide.color.black}>
        <iframe
          src='https://www.google.com/maps/d/u/0/embed?mid=1X8vfQjjnxOLWqmTO6JJf4-Tr5uo'
          width={'100%'}
          height={window.innerHeight * 0.5}
        />
      </TWPDiv>
    </div>
  )
}

export default Index
