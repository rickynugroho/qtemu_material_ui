import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RawHtml from '../../atoms/RawHtml';

const styles = theme => ({
  date: {
    color: 'grey',
    marginBottom: theme.spacing.unit,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.1em',
  }
});

class NewsSingle extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.title}>
          {this.props.title}
        </Typography>
        <Typography className={classes.date}>
          {this.props.date}
        </Typography>
        <RawHtml>
          {this.props.children.toString()}
        </RawHtml>
      </div>
    );
  }
}

NewsSingle.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
};

// NewsSingle.defaultProps = {
//   title: null,
//   elevation: 2,
// };

export default withStyles(styles)(NewsSingle);
