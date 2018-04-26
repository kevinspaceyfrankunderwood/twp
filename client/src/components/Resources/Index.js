import React, { Component } from 'react';

import AboveTheFold from './AboveTheFold'
import BeeSlider from './BeeSlider'
import ResourcePDFs from './ResourcePDFs'
import YoutubeEmbed from './YoutubeEmbed'
import OutsideLinks from './OutsideLinks'


export const Index = () => {
  return (
    <div>
       <AboveTheFold />
      <BeeSlider />
      <ResourcePDFs />
      {/* <OutsideLinks /> */}
      <YoutubeEmbed />
    </div>
  )
}

export default Index