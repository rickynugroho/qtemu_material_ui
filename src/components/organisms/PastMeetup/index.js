import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Section from '../../molecules/Section';
import { Grid, withStyles, Typography, Card, CardContent } from '@material-ui/core';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * -2,
  },
  card: {
    margin: theme.spacing.unit * 2,
  },
  line: {
    border: 0,
    height: 1,
    backgroundColor: '#ccc',
    color: '#ccc',
  },
});

class PastMeetup extends Component {
  constructor() {
    super();

    this.state = {
      showAll: false,
      toggleButtonText: 'Show All'
    };
  }

  renderPastMeetupList() {
    const { classes } = this.props;

    return this.props.meetupList.map((meetup, index) => {
      return (
        <Grid item xs={4} key={index}>
          <Card className={classes.card} xs={4} key={index}>
            <CardContent>
              <Typography>
                {meetup.date}
              </Typography>
              <hr className={classes.line} />
              <Typography gutterBottom={true}>
                {meetup.topic}
              </Typography>
              <Typography gutterBottom={true} paragraph={true}>
                {meetup.participants} went
              </Typography>
              <Button variant="contained">View</Button>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Section title="Past Meetup" elevation={0} rightContent={<Button>Show All</Button>}>
        <div className={classes.root}>
        <Grid container spacing={0}>
          {this.renderPastMeetupList()}
        </Grid>
        </div>
      </Section>
    )
  }
}

export default withStyles(styles)(PastMeetup);
