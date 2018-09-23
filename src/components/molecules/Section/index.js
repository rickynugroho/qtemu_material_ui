import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

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
  noElevation: {
    padding: 0,
    backgroundColor: 'inherit',
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
    let className = classes.section + ' ' + ((this.props.elevation && this.props.elevation) === 0 ? classes.noElevation : null);

    return (
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs>
            {this.state.title}
          </Grid>
          <Grid item xs>
            <Typography align="right">
              {this.props.rightContent}
            </Typography>
          </Grid>
        </Grid>

        <Paper className={className} elevation={this.props.elevation} rounded="false">
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
  rightContent: null,
  elevation: 2,
};

export default withStyles(styles)(Section);
