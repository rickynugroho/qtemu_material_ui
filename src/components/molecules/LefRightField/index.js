import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';

export default class LeftRightField extends Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={this.props.className}
      >
        <Grid item xs={this.props.leftXs}>
          <Typography>
            {this.props.leftText}
          </Typography>
        </Grid>
        <Grid item xs={this.props.rightXs}>
          <Typography>
            {this.props.rightText}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

LeftRightField.defaultProps = {
  className: '',
  leftText: '',
  rightText: '',
  leftXs: 1,
  rightXs: 2,
}