import React from 'react'

import TWPStyleGuide from '../../styles/TWPStyleGuide'
import { media, TWPHeader, TWPDiv, TWPParagraph, TWPSectionHeader, TWPImage, TWPAnchor } from '../../styles/GenericStyledComponents';
import Restore from '../../assets/images/BankFlowerEdit.jpeg'
import Kids from '../../assets/images/BeesKids.jpg'
import Urban from '../../assets/images/urbanParkingBefore.jpg'

const ResEduWrap = TWPDiv.extend`
  ${media.tablet`
    flex-direction: column
  `}
`

const ResponsiveAnchor = TWPAnchor.extend`
  ${media.tablet`
    width: 80%;
    margin: 15px 0;
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
        <ResponsiveAnchor href="/submitasite" width={'45%'} height={'500px'}>
          <TWPDiv
            width={'100%'}
            height={'100%'}
            margin={'0'}
            padding={'0'}
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
              maxHeight={'275px'}
              width={'90%'}
              margin={'15px 0'}
            />
            <TWPParagraph
              padding={'10px 10%'}
              smallTabletFontSize={TWPStyleGuide.font.size.smallTiny}
            >
              Transforming spaces of neglect to areas of beauty demonstrates the impact a little love can generate.
            </TWPParagraph>
          </TWPDiv>
        </ResponsiveAnchor>
        <ResponsiveAnchor href="/events" width={'45%'} height={'500px'}>
          <TWPDiv
            width={'100%'}
            height={'100%'}
            margin={'0'}
            padding={'0'}
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
              maxHeight={'275px'}
              width={'90%'}
              margin={'15px 0'}
            />
            <TWPParagraph
              padding={'10px 10%'}
              smallTabletFontSize={TWPStyleGuide.font.size.smallTiny}
            >
              Educating community members increases awareness about why pollinators are vital for our survival.
            </TWPParagraph>
          </TWPDiv>
        </ResponsiveAnchor>
      </ResEduWrap>
    </div>
  )
}

export default RestoreEducate