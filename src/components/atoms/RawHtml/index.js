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
        var classNames = require('classnames');

        return (
            <div className={classNames(this.props.className, classes.root)} dangerouslySetInnerHTML={{__html: this.props.children}} />
        )
    }
}

RawHtml.defaultProps = {
  className: null,
};

export default withStyles(styles)(RawHtml);
