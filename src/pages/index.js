import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Header from '../components/organisms/Header';
import Section from '../components/molecules/Section';
import { Grid, Typography, Button } from '@material-ui/core';
import Image from '../components/atoms/Image';
import LeftRightField from '../components/molecules/LefRightField';


const styles = theme => ({
  root: {
    // textAlign: 'center',
    // paddingTop: theme.spacing.unit * 20,
  },
  fluidImage: {
    width: "100%",
  }
});

class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      tanggal: new Date().toString(),
      info: {
        meetupName: 'React Meetup',
        meetupImage: '/img/host-meetup.jpg',
        location: 'Jakarta, Indonesia',
        numberOfMembers: '796',
        headOrganizer: 'Hacktiv8',
        memberOrganizer: [],
      },
      twitter: '@ReactMeetup',
      hashTag: '#reactmeetup',
      meetups: [
        {
          id: 39,
          date: '1 November 2017',
          topic: 'React Meetup with kumparan',
          participants: '54'
        },
        {
          id: 40,
          date: '15 September 2017',
          topic: 'React Meetup with bibli',
          participants: '65'
        },
        {
          id: 41,
          date: '7 October 2017',
          topic: 'React Meetup with Hacktiv8',
          participants: '81'
        }
      ]
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />

        <Section>
          <Grid container spacing={24}>
            <Grid item xs={2}>
              <Image
                src={this.state.info.meetupImage}
                alt={this.state.info.meetupName}
                className={classes.fluidImage}
              />
            </Grid>
            <Grid item xs={10}>
              <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="flex-start"
                style={{ height: '100%' }}
              >
                <Grid item>
                  <Typography variant="headline" component="h3">
                    {this.state.info.meetupName}
                  </Typography>
                </Grid>

                <Grid item style={{ width: '100%' }}>
                  <LeftRightField leftText="Location" rightText={this.state.info.location} />
                </Grid>

                <Grid item style={{ width: '100%' }}>
                  <LeftRightField leftText="Members" rightText={this.state.info.numberOfMembers} />
                </Grid>

                <Grid item style={{ width: '100%' }}>
                  <LeftRightField leftText="Organizers" rightText={this.state.info.headOrganizer} />
                </Grid>

                <Grid item style={{ width: '100%' }}>
                  <Button variant="contained" color="primary" className={classes.button}>
                    Join Us
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Section>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
