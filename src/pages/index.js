import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Home from './Home';
import About from './About';
// import { Button } from '@material-ui/core';
import NotFound from './NotFound';
import Login from './Login';
import Register from './Register';
import Explore from './Explore';
import CreateMeetup from './CreateMeetup';
import ViewMeetup from './ViewMeetup';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';

import { Provider } from "react-redux";
import store from "../configs";

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
    // const { classes } = this.props;
    
    return (
      <Provider store={store}>
        <Router>
          <div>
            {/* <AppBar position="static">
              <Toolbar>
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
            </AppBar> */}
            <Header />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/explore" component={Explore} />
              <Route path="/view_meetup" component={ViewMeetup} />
              <Route path="/create_meetup" component={CreateMeetup} />
              <Route component={NotFound} />
            </Switch>

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
