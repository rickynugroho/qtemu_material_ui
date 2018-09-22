import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    textTransform: 'none',
    fontSize: '1.2em',
    // marginLeft: -15,
  },
  // menuButton: {
  //   marginLeft: -12,
  //   marginRight: 20,
  // },
};

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* 
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> 
            */}

            <div className={classes.grow}>
              <Button className={classes.title} variant="text" color="inherit">
                Qtemu
              </Button>
            </div>

            <Button color="inherit">Create Meetup</Button>
            <Button color="inherit">Explore</Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);