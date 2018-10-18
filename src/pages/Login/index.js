import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import withRoot from '../../withRoot';
import Section from '../../components/molecules/Section';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import {
  UserActionCreator,
} from '../../actions';
import { connect } from 'react-redux';

const styles = theme => ({
  loginBtn: {
    marginTop: theme.spacing.unit * 4,
  },
  title: {
    marginBottom: theme.spacing.unit * 2,
  },
  textField: {
    marginTop: theme.spacing.unit * 1,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(UserActionCreator.login(data)),
  };
};

class Login extends React.Component {
  constructor (){
    super();

    this.state = {
      email: '',
    };
  }

  login = (data) => {
    this.props.login({
      name: 'Ricky',
      email: this.state.email,
    });
  }

  render() {
    // console.log(this.props.user);
    const { classes } = this.props;

    return (
      // <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={4}>
          <Section>
            <Typography variant="headline" component="h1" className={classes.title}>
              Login
            </Typography>

            <TextField
              id="standard-email"
              label="E-Mail"
              fullWidth
              className={classes.textField}
              // value={this.state.name}
              onChange={(e) => { this.setState({email: e.target.value}) }}
              // margin="normal"
            />

            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              fullWidth
              className={classes.textField}
              // autoComplete="current-password"
              // margin="normal"
            />

            <Button color="primary" variant="contained" className={classes.loginBtn} onClick={() => this.login()}>Login</Button>
            <Button component={Link} to="/register" className={classes.loginBtn}>or Register</Button>
          </Section>
        </Grid>
      </Grid>
      // </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withRoot(withStyles(styles)(Login));
// export default (withStyles(styles)(Login));
// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));