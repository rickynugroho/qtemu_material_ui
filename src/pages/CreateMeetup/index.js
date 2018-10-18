import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import withRoot from '../../withRoot';
import Section from '../../components/molecules/Section';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
// import { Link } from "react-router-dom";

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

class Login extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      // <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={6}>
          <Section>
            <Typography variant="headline" component="h1" className={classes.title}>
              Create Meetup
            </Typography>

            <TextField
              id="standard-name"
              label="Meetup Name"
              fullWidth
              className={classes.textField}
              // value={this.state.name}
              // onChange={this.handleChange('name')}
              // margin="normal"
            />

            <TextField
              id="standard-date"
              label="Date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="standard-description"
              label="Description"
              fullWidth
              multiline
              className={classes.textField}
              rows="4"
            />

            <Button color="primary" variant="contained" className={classes.loginBtn}>Create</Button>
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
export default (withStyles(styles)(Login));
