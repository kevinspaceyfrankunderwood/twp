import React, { Component } from 'react';

import { TWPDiv } from '../../styles/GenericStyledComponents';

import AboveTheFold from './AboveTheFold'
import PostMapText from './PostMapText'
import ProjectSlider from './ProjectSlider'
import StatsArea from './StatsArea'

export const Index = () => {
  return (
    <div>
      <AboveTheFold />
      <TWPDiv>
        <iframe 
          src="https://www.google.com/maps/d/u/0/embed?mid=1X8vfQjjnxOLWqmTO6JJf4-Tr5uo" 
          width={window.innerWidth} 
          height={'600px'}
        />
      </TWPDiv>
      <PostMapText />
      <ProjectSlider />
      {/* <StatsArea /> */}
    </div>
  )
}

export default Index