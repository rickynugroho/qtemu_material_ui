import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Section from '../../molecules/Section';

class Footer extends Component {
  render() {
    // const { classes } = this.props;

    return (
      <Section elevation={0}>
        <hr />
        <Typography align="center" paragraph="true">
          Copyright &copy; 2018
        </Typography>
      </Section>
    )
  }
}

export default Footer;