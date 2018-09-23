import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Section from '../../molecules/Section';
import MemberList from '../../molecules/MemberList';

class Members extends Component {
  constructor() {
    super();

    this.state = {
      showAll: false,
      toggleButtonText: 'Show All'
    };
  }

  toggleShowAll(){
    let currentShowAll = this.state.showAll;

    this.setState({
      showAll: !this.state.showAll,
      toggleButtonText: currentShowAll ? 'Show All' : 'Hide All',
    });
  }

  render() {
    // const { classes } = this.props;

    return (
      <Section title="Members" rightContent={<Button onClick={() => this.toggleShowAll()}>{this.state.toggleButtonText}</Button>}>
        <MemberList memberList={this.props.memberList} showAll={this.state.showAll} />
      </Section>
    )
  }
}
export default Members;