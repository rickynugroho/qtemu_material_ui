import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
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

        <Paper className={classes.section} elevation={this.props.elevation} rounded="false">
          {this.props.children}
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
  elevation: 2,
};

export default withStyles(styles)(Section);
