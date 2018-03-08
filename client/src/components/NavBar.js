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
            <img style={{width: '35%'}} src={Logo} alt="The Wildflower Project Logo"/>
          </a>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="paypalDonateButton">
              <NavLink target="_blank" rel="noopener referrer" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=GJ2922U6S4SEN&lc=US&no_note=1&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=GJ2922U6S4SEN&lc=US&no_note=1&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted" className="donateText" target="_blank" rel="noopener referrer">DONATE</a></NavLink>
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
      <div style={{marginTop: '50px'}} />
      </div>
    )
  }
}

export default NavBar;

