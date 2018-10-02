import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import MemberSingle from '../MemberSingle';
import { connect } from 'react-redux';
import {
  UserActionCreator,
} from '../../../actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (data) => dispatch(UserActionCreator.updateProfile(data)),
  };
};

class MemberList extends Component {

  constructor() {
    super();

    this.state = {
      memberList: [],
      showAll: false,
      user: [],
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
    // else if(this.state.user !== this.props.user){
    //   //should we do this?
    //   //Knp masuknya sbg user.user
    //   this.setState({
    //     user: nextProps.user,
    //   });

    //   return true;
    // }
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

  
  setProfile = (data) => {
    this.props.updateProfile({
      name: 'Ricky',
      email: 'edu.ricky.nugroho@gmail.com',
    });
  }

  render() {
    console.log('User: ', this.props.user);
    return (
      <Grid container spacing={24}>
        {this.renderMemberList()}
        {this.showTotalMember()}

        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => this.setProfile()}>Set User Profile</Button>
          <Typography>User: {this.props.user.user.name}</Typography>
          <Typography>Email: {this.props.user.user.email}</Typography>
        </Grid>
      </Grid>
    )
  }
}

// export default withStyles(styles)(MemberList);
export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
// export default (MemberList);