import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import Section from '../../molecules/Section';

const styles = {
  line: {
    border: 0,
    height: 1,
    backgroundColor: '#ccc',
    color: '#ccc',
    marginBottom: 20,
    marginTop: 10,
  },
};

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Section elevation={0}>
        <hr className={classes.line} />
        <Typography align="center" paragraph={true}>
          Copyright &copy; 2018
        </Typography>
      </Section>
    )
  }
}

export default withStyles(styles)(Footer);
