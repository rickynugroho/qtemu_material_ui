import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Header from '../components/organisms/Header';
import Section from '../components/molecules/Section';
import { Grid, Typography, Button } from '@material-ui/core';
import Image from '../components/atoms/Image';
import LeftRightField from '../components/molecules/LefRightField';
import NewsSingle from '../components/molecules/NewsSingle';


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
  // 1. Cara menampilkan raw HTML di react material ui dgn menggunakan Typography
  // 2. Perbedaan function (material ui) dan component (yg sudah diajarkan), mana yg harus digunakan?

  constructor() {
    super();

    this.state = {
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
      nextMeetups: {
        title: 'Awesome Meetup Events',
        date: new Date().toString(),
        content: `
          <p>
            Hello, JavaScript & Node.js Ninjas!<br />
            Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br />
            The meetup format will contain some short stories and technical talks.<br />
            If you have short announcement you'd like to share with the audience, you may do so during open mic accouncement.
          </p>
          <p>
            Remember to bring a photo ID to get through building security.
          </p>
          <p>
            -----
          </p>
          <p>
            See you there!
          </p>
          <p>
            Best,<br /> 
            The JakartaJS Organizers
          </p>
        `,
      },
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

        <Section title="Next Meetup">
          <NewsSingle title={this.state.nextMeetups.title} date={this.state.nextMeetups.date}>
            {this.state.nextMeetups.content}
          </NewsSingle>
        </Section>

      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
