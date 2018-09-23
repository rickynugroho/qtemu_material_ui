import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import { Grid, Avatar } from '@material-ui/core';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

class MemberSingle extends Component {
  render() {
    const { classes } = this.props;
    var classNames = require('classnames');

    return (
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <Avatar
            alt={this.props.memberInfo.name.first}
            src={this.props.memberInfo.picture.large}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
        </Grid>
        <Grid item xs={9}>
          {this.props.memberInfo.name.first}
          <br />
          {this.props.memberInfo.email}
        </Grid>
      </Grid>
      // <DivText className="profile-member">
      //   <DivText>{member.name.first}</DivText>
      //   <DivText className="wrap-text">{member.email}</DivText>
      // </DivText>
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
