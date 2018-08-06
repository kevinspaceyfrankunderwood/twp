import React from 'react'
import { Tab } from 'semantic-ui-react'

import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { handleLogout } from '../../reducers/user';
import Events from './Events/Index'


class AdminNavigationTabs extends React.Component {
  
  render() {
    const panes = [
      { menuItem: 'Events', render: () => <Events /> },
      { menuItem: 'Log Out', render: () => <Button primary onClick={() => this.props.dispatch(handleLogout(this.props.history))}>Log Out</Button>},
    ]
    return(
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} style={{width: '90%', margin: '0 auto'}} />
    )
  }

}


export default connect()(AdminNavigationTabs);