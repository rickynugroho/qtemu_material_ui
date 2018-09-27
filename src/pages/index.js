import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Home from './Home';
import About from './About';
import { Button } from '@material-ui/core';
import NotFound from './NotFound';
import Login from './Login';

// import PropTypes from 'prop-types';
// import Header from '../components/organisms/Header';
// import Section from '../components/molecules/Section';
// import axios from 'axios';

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
  },
};

class Index extends React.Component {
  render() {
    const { classes } = this.props;
    
    return (
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              {/* 
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton> 
              */}

              <div className={classes.grow}>
                <Button component={Link} to="/" className={classes.title} variant="text" color="inherit">
                  Qtemu
                </Button>
              </div>

              <Button component={Link} to="/create_meetup" color="inherit">Create Meetup</Button>
              <Button component={Link} to="/explore" color="inherit">Explore</Button>
              <Button component={Link} to="/about" color="inherit">About</Button>
              <Button component={Link} to="/login" color="inherit">Login</Button>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
