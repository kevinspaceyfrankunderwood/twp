import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';
import axios from 'axios'

import AboveTheFold from './AboveTheFold'
import EverySeed from './EverySeed'
import Dragonfly from './DragonFly'
import InstagramGoogle from './InstagramGoogle'

export const Index = () => {
  return (
    <div>
      <AboveTheFold />
      <EverySeed />
      <Dragonfly />
      <InstagramGoogle />
    </div>
  )
}

export default Index