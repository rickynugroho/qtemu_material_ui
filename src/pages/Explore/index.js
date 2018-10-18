import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import withRoot from '../../withRoot';
import Section from '../../components/molecules/Section';
import { Typography } from '@material-ui/core';
// import Image from '../../components/atoms/Image';
// import RawHtml from '../../components/atoms/RawHtml';
import PastMeetup from '../../components/organisms/PastMeetup';

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
  aboutContent: {
    marginTop: -15,
    lineHeight: '1.4',
  },
  meetupList: {
    margin: theme.spacing.unit * -2,
  },
});

class Explore extends React.Component {
  constructor() {
    super();

    this.state = {
      meetups: [
        {
          id: 39,
          date: '1 November 2017',
          topic: 'React Meetup with Kumparan',
          content: 'Today we place our meetup at Kumparan office...',
          participants: '54'
        },
        {
          id: 40,
          date: '15 September 2017',
          topic: 'React Meetup with Bibli',
          content: 'Today we place our meetup at Bibli office...',
          participants: '65'
        },
        {
          id: 41,
          date: '7 October 2017',
          topic: 'React Meetup with Hacktiv8',
          content: 'Today we place our meetup at Hacktiv8 office...',
          participants: '81'
        },
        {
          id: 39,
          date: '1 November 2017',
          topic: 'React Meetup with Kumparan',
          content: 'Today we place our meetup at Kumparan office...',
          participants: '54'
        },
        {
          id: 40,
          date: '15 September 2017',
          topic: 'React Meetup with Bibli',
          content: 'Today we place our meetup at Bibli office...',
          participants: '65'
        },
        {
          id: 41,
          date: '7 October 2017',
          topic: 'React Meetup with Hacktiv8',
          content: 'Today we place our meetup at Hacktiv8 office...',
          participants: '81'
        }
      ]
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Section>
          <Typography variant="headline" component="h1" className={classes.title}>
            Explore
          </Typography>
          
          <PastMeetup className={classes.meetupList} meetupList={this.state.meetups} />

          {/* <Grid container spacing={16}>
            <Grid item xs={12}>
            </Grid>
          </Grid> */}
        </Section>
      </div>
    );
  }
}

Explore.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(Explore));
