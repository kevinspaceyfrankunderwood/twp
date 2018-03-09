import React from 'react';

import { TWPHeader, TWPDiv} from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';



export const WhoWeAre = () => {
    return(
        <TWPDiv
          padding={'0'}
        >  
          <TWPHeader
            fontSize={'2.5em'}
            padding={'5% 10%'}
            backgroundColor={TWPStyleGuide.color.white}
            color={TWPStyleGuide.color.darkBrown}
            tabletFontSize={TWPStyleGuide.font.size.mediumSmall}
          >
            <span style={{color: TWPStyleGuide.color.yellow}}>The </span>
            <span style={{color: TWPStyleGuide.color.brightOrange}}>Wildflower </span>
            <span style={{color: TWPStyleGuide.color.darkGreen}}>Project</span>
            <hr style={{backgroundColor: TWPStyleGuide.color.darkGray}}/>
            An organization dedicated to planting wildflower gardens and pollinator habitats in urban environments
          </TWPHeader>
        </TWPDiv>
          );
}


export default WhoWeAre;
