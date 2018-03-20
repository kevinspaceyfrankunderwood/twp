import React from 'react'

import TWPStyleGuide from '../../styles/TWPStyleGuide'
import { media, TWPHeader, TWPDiv, TWPParagraph, TWPSectionHeader, TWPImage } from '../../styles/GenericStyledComponents';
import Restore from '../../assets/images/BankFlowerEdit.jpeg'
import Kids from '../../assets/images/BeesKids.jpg'
import Urban from '../../assets/images/urbanParkingBefore.jpg'

const ResEduWrap = TWPDiv.extend`
  ${media.tablet`
    flex-direction: column
  `}
`

const ResponsiveDiv = TWPDiv.extend`
  ${media.tablet`
    width: 80%;
  `}
`


const RestoreEducate = () => {
  return (
    <div>
      <ResEduWrap
        flexDirection={'row'}
        justifyContent={'space-around'}
        padding={'0'}
        margin={'2%'}
      >
        <ResponsiveDiv
          width={'45%'}
          margin={'5px'}
          backgroundColor={TWPStyleGuide.color.yellow}
          borderRadius={'5px'}
        >
          <TWPSectionHeader
            fontSize={TWPStyleGuide.font.size.medium}
            padding={'2%'}
          >
            Restoration
          </TWPSectionHeader>
          <TWPImage
            borderRadius={'5px'}
            src={Urban}
            maxHeight={'325px'}
            width={'90%'}
            margin={'15px 0'}
          />
          <TWPParagraph
            padding={'10px 10%'}
          >
            Transforming spaces of neglect to areas of beauty demonstrates the impact a little love can generate.
          </TWPParagraph>
        </ResponsiveDiv>
        <ResponsiveDiv
          width={'45%'}
          margin={'5px'}
          backgroundColor={TWPStyleGuide.color.brightOrange}
          borderRadius={'5px'}
        >
          <TWPSectionHeader
            fontSize={TWPStyleGuide.font.size.medium}
            padding={'2%'}
          >
            Education
          </TWPSectionHeader>
          <TWPImage
            borderRadius={'5px'} 
            src={Kids}
            maxHeight={'325px'}
            width={'90%'}
            margin={'15px 0'}
          />
          <TWPParagraph
            padding={'10px 10%'}
          >
            Educating community members increases awareness about why pollinators are vital for our survival.
          </TWPParagraph>
        </ResponsiveDiv>
      </ResEduWrap>
    </div>
  )
}

export default RestoreEducate