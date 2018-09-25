import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';
import Section from '../../components/molecules/Section';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    // textAlign: 'center',
    // paddingTop: theme.spacing.unit * 20,
  },
  fluidImage: {
    width: "100%",
  }
});

class NotFound extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Section>
          <Typography variant="headline" component="h1">
            Not Found.
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
