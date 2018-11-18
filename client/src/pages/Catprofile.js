import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ArrowBack from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '50%',
    width: '100%'
    // display: 'flex',
    // flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '25%',
  },

  cardContent: {
    // flexGrow: 1,
    height: '100%'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


class Catprofile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cat: {}
    }

    this.goBack = this.goBack.bind(this);
  }

  goBack(){
    this.props.history.goBack();
  }

  componentWillMount() {
    const { match: { params } } = this.props;

    console.log(params);
    fetch(`http://localhost:5000/api/cats/${params.id}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({cat:data})
      console.log(this.state);
    })
  }
  
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <ArrowBack className={classes.icon} onClick={this.goBack} />
            <Typography variant="h6" color="inherit" noWrap>
              Toronto Cat Rescue
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {this.state.cat.name}
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                {this.state.cat.age}
              </Typography>
  
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {this.state.cat.name} 
                      </Typography>
                      <Grid container spacing={40}>
                        <Grid item xs={12} sm={6} >
                          <List>
                            <ListItem> 
                              <ListItemText
                                primary="Pet Point ID#:"
                                secondary={this.state.cat.petpointID}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText
                                primary="Status:"
                                secondary={this.state.cat.status}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Location:"
                                secondary={this.state.cat.location}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                              primary="Foster Table ID#:"
                                secondary={this.state.cat.fosterTableID}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Owner Table ID#:"
                                secondary={this.state.cat.ownerTableID}
                              />
                            </ListItem>
                            <ListItem> 
                              <ListItemText
                                primary="Age:"
                                secondary={this.state.cat.age}
                              />
                            </ListItem>
                            <ListItem> 
                              <ListItemText
                                primary="Sex:"
                                secondary={this.state.cat.sex}
                              />
                            </ListItem>
                            <ListItem> 
                              <ListItemText
                                primary="Description:"
                                secondary={this.state.cat.description}
                              />
                            </ListItem>
                            <ListItem> 
                              <ListItemText
                                primary="Serial Number:"
                                secondary={this.state.cat.serialNumber}
                              />
                            </ListItem>
                            <ListItem> 
                              <ListItemText
                                primary="Shelter Table ID#:"
                                secondary={this.state.cat.shelterTableID}
                              />
                            </ListItem>
                            <ListItem> 
                              <ListItemText
                                primary="Shelter ID#:"
                                secondary={this.state.cat.shelterID}
                              />
                            </ListItem>
                            <ListItem> 
                              <ListItemText
                                primary="FIV Tested:"
                                secondary={this.state.cat.FIVTested}
                              />
                            </ListItem>
                            <ListItem> 
                              <ListItemText
                                primary="FLV Tested:"
                                secondary={this.state.cat.FLVTested}
                              />
                            </ListItem>
                            <ListItem> 
                              <ListItemText
                                primary="FVRCP Vaccination Date:"
                                secondary={this.state.cat.FVRCPVaccinationDate}
                              />
                            </ListItem>
                            <ListItem> 
                              <ListItemText
                                primary="Rabies Vaccination Date:"
                                secondary={this.state.cat.rabiesVaccinationDate}
                              />
                            </ListItem>
                            <ListItem> 
                              <ListItemText
                                primary="Vet Table ID#:"
                                secondary={this.state.cat.vetTableID}
                              />
                            </ListItem>
                            <ListItem> 
                              <ListItemText
                                primary="Medical Notes:"
                                secondary={this.state.cat.medicalNotes}
                              />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                          <List>
                            <ListItem> 
                            <ListItemText
                                primary="Behaviour Notes:"
                                secondary={this.state.cat.behaviourNotes}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Outcome:"
                                secondary={this.state.cat.outcome}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Intake Date:"
                                secondary={this.state.cat.intakeDate}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Foster Placement Date:"
                                secondary={this.state.cat.fosterPlacementDate}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Date of Birth:"
                                secondary={this.state.cat.dob}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Size:"
                                secondary={this.state.cat.size}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Primary Breed:"
                                secondary={this.state.cat.primaryBreed}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Secondary Breed:"
                                secondary={this.state.cat.secondaryBreed}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Sterilized:"
                                secondary={this.state.cat.sterilized}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Primary Colour:"
                                secondary={this.state.cat.primaryColour}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Secondary Colour:"
                                secondary={this.state.cat.secondaryColour}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Colour Pattern:"
                                secondary={this.state.cat.colourPattern}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Record Owner:"
                                secondary={this.state.cat.recordOwner}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Intake Subtype:"
                                secondary={this.state.cat.intakeSubtype}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Jurisdiction:"
                                secondary={this.state.cat.jurisdiction}
                              />
                            </ListItem>
                            <ListItem> 
                            <ListItemText
                                primary="Transfer Reason:"
                                secondary={this.state.cat.transferReason}
                              />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Edit 
                      </Button>
                    </CardActions>
                  </Card>
            </Grid>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Toronto Cat Rescue
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Copyright 2018 by DreamTeam
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

Catprofile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Catprofile);