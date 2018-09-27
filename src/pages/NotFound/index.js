import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';
import Section from '../../components/molecules/Section';
import { Typography, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    fontSize: '1.8em',
    textAlign: 'center',
  },
  goToHomeBtn: {
    marginTop: 20,
  }
});

class NotFound extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Section>
          <Typography variant="headline" component="h1" className={classes.root}>
            404 Not Found
          </Typography>
          <Typography>
            The page you're looking for is not exists.
          </Typography>
          <Typography className={classes.goToHomeBtn}>
            <Button variant="contained" color="primary" component={Link} to="/">
              Go to Home
            </Button>
          </Typography>
        </Section>
      </div>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(NotFound));
