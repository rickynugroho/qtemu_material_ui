import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Redirect } from "react-router-dom";
// import IconButton from '@material-ui/core/IconButton';
import {
  UserActionCreator,
} from '../../../actions';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    textTransform: 'none',
    fontSize: '1.5em',
    // marginLeft: -15,
  },
  // menuButton: {
  //   marginLeft: -12,
  //   marginRight: 20,
  // },
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(UserActionCreator.logout()),
  };
};

class Header extends Component {
  constructor() {
    super();

    this.state = {
      // auth: true,
      anchorEl: null,
      redirectHome: false,
    };
  }

  // handleChange = event => {
  //   this.setState({ auth: event.target.checked });
  // };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logout = () => {
    this.handleClose();
    this.props.logout();

    this.setState({
      redirectHome: true,
    });
  }

  render() {
    if (this.state.redirectHome) {
      this.setState({
        redirectHome: false,
      });

      return <Redirect to="/"/>;
    }

    // console.log('header', this.props.user.user.name);
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    let btnLogin = <Button component={Link} to="/login" color="inherit">Login</Button>;
    
    if (this.props.user.user.name != undefined) btnLogin = (
      <div>
        {/* <Typography variant="button" color="inherit">Hello {this.props.user.user.name}</Typography >
        <Button component={Link} to="/login" color="inherit">Logout</Button> */}
        <Button
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle />
          <Typography style={{marginLeft: 5, color: 'white'}}>{this.props.user.user.name}</Typography>
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => this.logout()}>Logout</MenuItem>
        </Menu>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.grow}>
              <Button component={Link} to="/" className={classes.title} variant="text" color="inherit">
                Qtemu
              </Button>
            </div>

            <Button component={Link} to="/create_meetup" color="inherit">Create Meetup</Button>
            <Button component={Link} to="/explore" color="inherit">Explore</Button>
            <Button component={Link} to="/about" color="inherit">About</Button>
            {btnLogin}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

// Header.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Header);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));
