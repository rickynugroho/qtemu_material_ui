import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';
import Section from '../../components/molecules/Section';
import { Grid, Typography } from '@material-ui/core';
// import Image from '../../components/atoms/Image';
import RawHtml from '../../components/atoms/RawHtml';

const styles = theme => ({
  root: {
    // textAlign: 'center',
    // paddingTop: theme.spacing.unit * 20,
  },
  title: {
    marginTop: 10,
    marginBottom: 25,
    textAlign: 'center',
    fontSize: '2em',
  },
  fluidImage: {
    width: "100%",
    paddingRight: 10,
  },
  aboutContent: {
    marginTop: -15,
    lineHeight: '1.6',
    paddingRight: 10,
  }
});

class About extends React.Component {
  constructor() {
    super();

    this.state = {
      aboutImage: '/img/host-meetup.jpg',
      aboutContent: `
      <p>
        Donec vulputate cursus suscipit. Cras consequat lacus eu turpis rutrum malesuada. In id lectus rutrum, vestibulum turpis a, elementum neque. Nunc ac suscipit magna. Etiam lacinia orci eu leo viverra, vel pretium turpis volutpat. Nam turpis nibh, pretium sed feugiat non, sagittis in massa. Sed vel tempor ligula. Duis urna tortor, fringilla ut accumsan nec, varius non libero. Donec fringilla pretium sapien a tincidunt. Duis suscipit dui massa, a dictum nibh finibus luctus. 
      </p>
      <p>
        Nam et iaculis orci. Cras a mattis leo. Phasellus eleifend dolor eu scelerisque congue. Proin nulla magna, lacinia ac rhoncus nec, sodales vel sapien. Nullam eget lobortis mi. Nulla rhoncus ante id tellus blandit egestas. Nullam non ante at purus facilisis vehicula sed vel dolor. In eget mauris lacinia, imperdiet tellus eu, eleifend turpis. Aliquam molestie tellus nulla, et aliquet velit vestibulum vel. Sed bibendum vehicula imperdiet. Duis vestibulum nulla commodo consequat eleifend. Mauris ac sapien quis odio finibus suscipit. Aliquam blandit sollicitudin molestie. Aliquam sed leo sed urna pellentesque egestas ac ut ante. Nulla facilisi. 
      </p>
      `,
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Section>
          <Typography variant="headline" component="h1" className={classes.title}>
            React Meetup with Hacktiv8
          </Typography>
          <Grid container spacing={16}>
            <Grid item xs={9}>
              {/* <Image
                src={this.state.aboutImage}
                alt="About"
                className={classes.fluidImage}
              /> */}
              <RawHtml className={classes.aboutContent}>
                {this.state.aboutContent}
              </RawHtml>
            </Grid>
            <Grid item xs={3}>
              <Typography>
                Date: 1 Oktober 2018
              </Typography>
              <Typography>
                Location: Hacktiv8
              </Typography>
              <Typography>
                65 went
              </Typography>
            </Grid>
          </Grid>
        </Section>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(About));
