import React from 'react'
import styled from 'styled-components'

import { Icon } from '@blueprintjs/core'

const TeamPopover = ({ teamName, username }) => {
  return (
    // <PopoverWrapper className='bp3-popover-wrapper' position='bottom_left'>
    //   <div className='bp3-dialog-header' id='team-popover-header'>
    //     <h3 className='bp3-heading' id='team-popover-header-title'>
    //       Manage Team
    //     </h3>
    //   </div>
    //   <div>Hello</div>
    // </PopoverWrapper>
    <PopoverWrapper
      className='bp3-popover-wrapper bp3-menu bp3-elevation-1'
      position='bottom_left'
    >
      <li class='bp3-menu-header'>
        <h3 class='bp3-heading' id='team-popover-header-title'>
          Manage Team
        </h3>
      </li>
      <li>
        <button
          type='button'
          class='bp3-menu-item bp3-icon-standard bp3-icon-new-person'
        >
          Invite to team
        </button>
      </li>
      <li>
        <button type='button' class='bp3-menu-item bp3-icon-layout-circle'>
          Circle
        </button>
      </li>
      <li>
        <button type='button' class='bp3-menu-item bp3-icon-layout-grid'>
          Grid
        </button>
      </li>
      <li class='bp3-menu-header'>
        <h3 class='bp3-heading' id='team-popover-header-title'>
          Manage Account
        </h3>
      </li>
      <li>
        <button type='button' class='bp3-menu-item bp3-icon-edit'>
          Edit Profile
        </button>
      </li>
      <li>
        <button type='button' class='bp3-menu-item bp3-icon-star'>
          Favorites
        </button>
      </li>
      <li>
        <button type='button' class='bp3-menu-item bp3-icon-envelope'>
          Messages
        </button>
      </li>
    </PopoverWrapper>
  )
}

const PopoverWrapper = styled.ul`
  color: #ffffff;
  background-color: #33383d;
  font-size: 1.4rem;
  width: 17rem;
`

export default TeamPopover
