import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RawHtml from '../../atoms/RawHtml';

const styles = theme => ({
  // root: {
  //   ...theme.mixins.gutters(),
  //   marginLeft: theme.spacing.unit * 2,
  //   marginRight: theme.spacing.unit * 2,
  //   marginTop: theme.spacing.unit * 3,
  //   marginBottom: theme.spacing.unit * 3,
  // },
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
  // constructor(props) {
  //   super(props); 

  //   let title = null;

  //   if (this.props.title !== null) {
  //     title = <Typography variant="headline" component="h3">{this.props.title}</Typography>;
  //   }

  //   this.state = {
  //     'title': title,
  //   };
  // }

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
  date: PropTypes.date,
  content: PropTypes.string,
};

// NewsSingle.defaultProps = {
//   title: null,
//   elevation: 2,
// };

export default withStyles(styles)(NewsSingle);
