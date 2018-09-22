import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: theme.spacing.unit * 2,
  },
  section: {
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit,
  },
});

class Section extends Component {
  constructor(props) {
    super(props); 
    
    let title = null;

    if (this.props.title !== null) {
      title = <Typography variant="headline" component="h3">{this.props.title}</Typography>;
    }

    this.state = {
      'title': title,
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.state.title}

        <Paper className={classes.section} elevation={1} rounded="false">
          {this.props.children}
          {/* 
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography> 
          */}
        </Paper>
      </div>
    );
  }
}

Section.propTypes = {
  classes: PropTypes.object.isRequired,
};

Section.defaultProps = {
  title: null,
};

export default withStyles(styles)(Section);
