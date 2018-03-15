import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';
import './NavBar.css'
import Logo from '../assets/images/logoFullSize.png';
import { TWPDiv, TWPImage, media, TWPParagraph } from '../styles/GenericStyledComponents';
import instagram from '../assets/images/instagram.png'
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import TWPStyleGuide from '../styles/TWPStyleGuide';

const NavSocialDivide = TWPDiv.extend`
  margin-top: 50px;
`

const SocialIcon = TWPImage.extend`
  margin: 5px;
`

const SocialWrap = TWPDiv.extend`
  z-index: 1000;

  ${media.tablet`
    flex-direction: row;
    width: 100%;
    background-color: ${TWPStyleGuide.color.white};
    justify-content: space-evenly;
    margin-top: 50px;
  `}
`

const TriColorNavTWP = TWPDiv.extend`
  display: none;
  font-size: 1.5em;
  height: 50px;
  align-items: center;
  position: fixed;
  z-index: 1000;
  background-color: ${TWPStyleGuide.color.white};

  ${media.tablet`
    display: flex;
    width: 100%;
    justify-content: center;
  `}
`

class NavBar extends Component {
  state = { isOpen: false }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }


    render() {
    return (
      <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/" >
          <a href="/">
            <img style={{width: '95px', height: '40px'}} src={Logo} alt="The Wildflower Project Logo"/>
          </a>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="paypalDonateButton">
              <NavLink target="_blank" rel="noopener referrer" href={"https://thewildflowerprojectmn.org"}><a href="https://thewildflowerprojectmn.org" className="donateText" target="_blank" rel="noopener referrer">DONATE</a></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About Us
              </DropdownToggle>
              <DropdownMenu >
                <NavItem>
                 <NavLink href="/mission">Mission</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/history">Our History</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Our Team">Our Team</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/journal">Garden Journal</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">Contact Us</NavLink>
                </NavItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Environment
              </DropdownToggle>
              <DropdownMenu >
                <NavItem>
                 <NavLink href="/pollinators">Pollinators</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/permaculturegardens">Permaculture Gardens</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/bythenumbers">By The Numbers</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/gardenmap">Garden Map</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/photogallery">Photo Gallery</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/inthenews">In The News</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/resources">Resources</NavLink>
                </NavItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Community
              </DropdownToggle>
              <DropdownMenu >
                <NavItem>
                 <NavLink href="/partnerships">Partnerships</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/communityeducation">Community Education</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/wildflowerfestival">The Wildflower Festival</NavLink>
                </NavItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Stewardship
              </DropdownToggle>
              <DropdownMenu >
                <NavItem>
                 <NavLink href="/donate">Donate</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/volunteer">Volunteer</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/submitasite">Submit A Site</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/jointheteam">Join the Team</NavLink>
                </NavItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <TriColorNavTWP>
        <TWPParagraph
          fontSize={TWPStyleGuide.font.size.smallTiny}
          textAlign={'center'}
        >
          <span style={{color: TWPStyleGuide.color.yellow}}>the</span>
          <span style={{color: TWPStyleGuide.color.brightOrange}}>wildflower</span>
          <span style={{color: TWPStyleGuide.color.darkGreen}}>project</span>
        </TWPParagraph>
      </TriColorNavTWP>
      <SocialWrap
        position={'fixed'}
        justifyContent={'flex-start'}
        padding={'0'}
      >
          <a style={{margin: '5px'}} target="_blank" rel="noopener noreferrer" href="https://twitter.com/TWPMN">
            <SocialIcon
              //twitter
              width={'40px'}
              height={'40px'}
              src={twitter}
            />
          </a>
          <a style={{margin: '5px'}} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/wildflower_project/">
            <SocialIcon
              //instagram
              width={'40px'}
              height={'40px'}
              src={instagram}
            />
          </a>
          <a style={{margin: '5px'}} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/wildflowerproj/">
            <SocialIcon
              //facebook
              width={'40px'}
              height={'40px'}
              src={facebook}
            />
          </a>
        </SocialWrap>
        <NavSocialDivide />
      </div>
    )
  }
}

export default NavBar;

