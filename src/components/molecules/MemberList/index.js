import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import MemberSingle from '../MemberSingle';
import { connect } from 'react-redux';
import {
  UserActionCreator,
} from '../../../actions';

const mapStateToProps = (state) => {
  return {
    members: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    profile: (data) => dispatch(UserActionCreator.profile(data)),
  };
};

class MemberList extends Component {

  constructor() {
    super();

    this.state = {
      memberList: [],
      showAll: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.memberList !== nextProps.memberList) {
      this.setState({
        memberList: nextProps.memberList,
      });

      return true;
    } else if (this.state.showAll !== nextProps.showAll) {
      this.setState({
        showAll: nextProps.showAll,
      });

      return true;
    }
    return false;
  }

  renderMemberList() {
    // const { classes } = props;
    
    if (this.state.memberList.length <= 0) {
      //show loading
      return (
        <div>
          <img src="img/ajax-loader.gif" alt="Loading" />
        </div>
      );
    } else {
      if (this.state.showAll === false){
        return this.state.memberList.map((member, index) => {
          if(index < 3){
            return (
              <Grid item xs={3} key={index}>
                <MemberSingle memberInfo={member} />
              </Grid>
            );
          }
          return null;
        });
      } else {
        return this.state.memberList.map((member, index) => {
          return (
            <Grid item xs={3} key={index}>
              <MemberSingle memberInfo={member} />
            </Grid>
          );
        });
      }
    }
  }

  showTotalMember() {
    if (this.state.memberList.length > 0 && !this.state.showAll) {
      return(
        <Grid item xs={3}>
          <Typography>
            and {this.state.memberList.length - 3} others.
          </Typography>
        </Grid>
      );
    }
  }

  setProfile() {
    this.props.hitung({
      name: 'Ricky',
      email: 'edu.ricky.nugroho@gmail.com',
    });
  }

  render() {
    return (
      <Grid container spacing={24}>
        {this.renderMemberList()}
        {this.showTotalMember()}

        <Grid item xs={3}>
          {/* <Button onClick={() => this.setProfile()}>Profile</Button> */}
        </Grid>
      </Grid>
    )
  }
}

// export default withStyles(styles)(MemberList);
// export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
export default (MemberList);