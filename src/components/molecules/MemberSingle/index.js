import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Avatar, Typography } from '@material-ui/core';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  // avatar: {
  //   margin: 0,
  // },
  bigAvatar: {
    width: 64,
    height: 64,
  },
  wrapWord: {
    wordWrap: 'break-word',
  },
  avatarWrapper: {
    maxWidth: 80,
  },
  memberName: {
    fontWeight: 'bold',
  },
};

class MemberSingle extends Component {
  render() {
    const { classes } = this.props;
    // var classNames = require('classnames');

    return (
      <Grid container spacing={0}>
        <Grid item xs className={classes.avatarWrapper}>
          <Avatar
            alt={this.props.memberInfo.name.first}
            src={this.props.memberInfo.picture.large}
            // className={classNames(classes.avatar, classes.bigAvatar)}
            className={classes.bigAvatar}
          />
        </Grid>
        <Grid item zeroMinWidth xs>
          <Typography className={classes.memberName}>
            {this.props.memberInfo.name.first}
          </Typography>
          <Typography className={classes.wrapWord}>
            {this.props.memberInfo.email}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

// MemberSingle.propTypes = {
//   classes: PropTypes.object.isRequired,
//   title: PropTypes.string,
//   content: PropTypes.string,
// };

// MemberSingle.defaultProps = {
//   title: null,
//   elevation: 2,
// };

export default withStyles(styles)(MemberSingle);
