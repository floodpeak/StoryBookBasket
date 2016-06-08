/**
 * Created by walter on 16/6/2.
 */
import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { SocialMood, SocialMoodBad, SocialSentimentSissatisfied } from 'material-ui/svg-icons/';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import moment from 'moment';

const BP_LIMITATION = {
    "LP": [60, 90],
    "HP": [90, 140],
};

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <SocialMoodBad color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class BPItem extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  getBPColors(PressureType) {
    let MinP = BP_LIMITATION[PressureType][0];
    let MaxP = BP_LIMITATION[PressureType][1];
    switch (true) {
      case this.props[PressureType] < MinP:
        return 'gray';
      case this.props[PressureType] > MaxP:
        return 'red';
      default:
        return 'green';
    }
  }

  render () {
    let dateString = moment(this.props.date).format("dddd, MMMM Do YYYY, h:mm:ss a");
    return (
    <ListItem
      rightIconButton={rightIconMenu}
      primaryText={
        <div>
          <span style={{color: this.getBPColors('HP')}}>{this.props.HP}</span>/<span style={{color: this.getBPColors('LP')}}>{this.props.LP}</span>毫米汞柱,
          <span> {this.props.pulse}脉搏</span>
        </div>
      }
      secondaryText={
            <p>
              <span>{dateString}</span><br />
            </p>
          }
      secondaryTextLines={1}
    />
    );
  }
}

BPItem.propTypes = {
  Date: React.PropTypes.object,
  HP: React.PropTypes.number,
  LP: React.PropTypes.number,
  pulse: React.PropTypes.number
};

BPItem.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default BPItem;