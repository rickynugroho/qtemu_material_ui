import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import MemberSingle from '../MemberSingle';

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

  render() {
    return (
      <Grid container spacing={24}>
        {this.renderMemberList()}
        {this.showTotalMember()}
      </Grid>
    )
  }
}

// export default withStyles(styles)(MemberList);
export default MemberList;