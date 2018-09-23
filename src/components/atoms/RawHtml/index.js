import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
});

class RawHtml extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root} dangerouslySetInnerHTML={{__html: this.props.children}} />
        )
    }
}

export default withStyles(styles)(RawHtml);
