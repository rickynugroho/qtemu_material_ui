import React, { Component } from 'react';
import { withStyles, Grid, Avatar } from '@material-ui/core';
import MemberSingle from '../MemberSingle';

class MemberList extends Component {

  constructor() {
    super();

    this.state = {
      memberList: [],
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.memberList !== nextProps.memberList) {
      this.setState({
        memberList: nextProps.memberList,
      });

      return true;
    }
    return false;
  }

  renderMemberList(props) {
    // const { classes } = props;
    
    if (this.state.memberList.length <= 0) {
      return (
        <div>
          <img src="img/ajax-loader.gif" alt="Loading" />
        </div>
      );
    } else {
      return this.state.memberList.map((member, index) => {
        if(index < 4){
          return (
            <Grid item xs={3}>
              <MemberSingle key={index} memberInfo={member} />
            </Grid>
          );
        }
      })
    }
  }

  render() {
    return (
      <Grid container spacing={24}>
        {this.renderMemberList(this.props)}
      </Grid>
    )
  }
}

// export default withStyles(styles)(MemberList);
export default MemberList;