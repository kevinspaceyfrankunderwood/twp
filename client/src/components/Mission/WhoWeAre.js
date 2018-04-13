import React from 'react';

import { TWPHeader, TWPDiv, media} from '../../styles/GenericStyledComponents'
import TWPStyleGuide from '../../styles/TWPStyleGuide';

const ResponsiveHeader = TWPHeader.extend`
  ${media.tablet`
    display: none;
  `}
`

export const WhoWeAre = () => {
    return(
        <TWPDiv
          padding={'0'}
        >  
          <ResponsiveHeader
            fontSize={'2.5em'}
            padding={'5% 10%'}
            backgroundColor={TWPStyleGuide.color.white}
            color={TWPStyleGuide.color.darkBrown}
            tabletFontSize={TWPStyleGuide.font.size.mediumSmall}
          >
            <span style={{color: TWPStyleGuide.color.yellow}}>The </span>
            <span style={{color: TWPStyleGuide.color.brightOrange}}>Wildflower </span>
            <span style={{color: TWPStyleGuide.color.darkGreen}}>Project</span>
          </ResponsiveHeader>
          <TWPDiv 
            width={'60%'}
            borderTop={`1px solid ${TWPStyleGuide.color.darkBrown}`}   
          />
          <TWPHeader
            fontSize={'2.5em'}
            padding={'5% 10%'}
            backgroundColor={TWPStyleGuide.color.white}
            color={TWPStyleGuide.color.darkBrown}
            tabletFontSize={TWPStyleGuide.font.size.mediumSmall}
            smallTabletFontSize={TWPStyleGuide.font.size.small}
          >
            To create wildflower gardens through community partnerships that restore and enhance pollinator habitat in urban environments.
          </TWPHeader>
        </TWPDiv>
          );
}


export default WhoWeAre;
