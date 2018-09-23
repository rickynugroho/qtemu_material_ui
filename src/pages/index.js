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
import RawHtml from '../components/atoms/RawHtml';
import axios from 'axios';
// import MemberList from '../components/molecules/MemberList';
import Members from '../components/organisms/Members';
import PastMeetup from '../components/organisms/PastMeetup';

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
  // 3. Create a href in material ui, use Button?
  // 4. React.Fragment apakah kita harus menggunakan ini pada saat map()? Atau pakai div saja?
  // 5. Penggunaan atomic design berkurang karena menggunakan material-ui, apakah ini artinya benar?
  // 6. Karena banyak state yg diperlukan, maka content bagian members dipindah ke organism, di index hanya dipanggil saja dgn props list member. Apakah ini benar?

  constructor() {
    super();

    this.state = {
      info: {
        meetupName: 'React Meetup',
        meetupImage: '/img/host-meetup.jpg',
        location: 'Jakarta, Indonesia',
        numberOfMembers: '796',
        headOrganizer: 'Hacktiv8',
        members: [],
      },
      about: {
        description: `
        <p>
          Come and meet other developers.
        </p>
        `,
        twitter: '@ReactMeetup',
      },
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

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=16")
      .then(response => {
        let temporaryState = this.state;
        temporaryState.info.members = response.data.results;
        this.setState(temporaryState);
      });
  }


  render() {
    const { classes } = this.props;
    let twitterLink = `http://twitter.com/${this.state.about.twitter}`;

    return (
      <div className={classes.root}>

        <Header />

        <Section>
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <Image
                src={this.state.info.meetupImage}
                alt={this.state.info.meetupName}
                className={classes.fluidImage}
              />
            </Grid>
            <Grid item xs={9}>
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

        <Section title="About Meetup" elevation={0}>
          <RawHtml>
            {this.state.about.description}
          </RawHtml>
          <Typography>
            Twitter: <Button href={twitterLink}>{this.state.about.twitter}</Button>
          </Typography>
        </Section>

        <Members memberList={this.state.info.members} />

        <PastMeetup meetupList={this.state.meetups} />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
