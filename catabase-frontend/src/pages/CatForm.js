import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import Api from "../utils/Api";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const age = [
  {
    value: "Unweaned",
    label: "Unweaned"
  },
  {
    value: "Juvenile",
    label: "Juvenile"
  },
  {
    value: "Young Adult",
    label: "Young Adult"
  },
  {
    value: "Adult",
    label: "Adult"
  },
  {
    value: "Senior",
    label: "Senior"
  }
];
const sex = [
  {
    value: "Male",
    label: "Male"
  },
  {
    value: "Female",
    label: "Female"
  }
];
const size = [
  {
    value: "Small",
    label: "Small"
  },
  {
    value: "Medium",
    label: "Medium"
  }
];

const primaryBreed = [
  {
    value: "DSH",
    label: "DSH"
  },
  {
    value: "DMH",
    label: "DMH"
  },
  {
    value: "DLH",
    label: "DLH"
  },
  {
    value: "other",
    label: "other"
  }
];
const secondaryBreed = [
  {
    value: "DSH",
    label: "DSH"
  },
  {
    value: "DMH",
    label: "DMH"
  },
  {
    value: "DLH",
    label: "DLH"
  },
  {
    value: "other",
    label: "other"
  }
];

const FIVTested = [
  {
    value: "Positive",
    label: "Positive"
  },
  {
    value: "Negative",
    label: "Negative"
  },
  {
    value: "Not Tested",
    label: "Not Tested"
  }
];

const FLVTested = [
  {
    value: "Positive",
    label: "Positive"
  },
  {
    value: "Negative",
    label: "Negative"
  },
  {
    value: "Not Tested",
    label: "Not Tested"
  }
];

class CatForm extends Component {
  state = {
    name: "",
    age: "",
    sex: "",
    status: "",
    primaryBreed: "DSH",
    secondaryBreed: "DSH",
    size: "Small",
    description: "",
    serialNumber: "",
    shelterTableID: "",
    petPointID: "",
    image: "",
    FIVTested: "",
    FLVTested: "",
    FVRCPVaccination: "",
    rabiesVaccinationDate: "",
    vetTableID: "",
    medicalNote: "",
    behaviourNote: "",
    outCome: "",
    intakeDate: "",
    fosterPlacementDate: ""
  };
  componentDidMount() {
    this.loadCats();
  }
  loadCats = () => {
    Api.getCats().then(res =>
      this.setState({
        name: "",
        age: "",
        sex: "",
        description: "",
        serialNumber: "",
        shelterTableID: "",
        petPointID: "",
        image: "",
        FIVTested: "",
        FLVTested: "",
        FVRCPVaccination: "",
        rabiesVaccinationDate: "",
        vetTableID: "",
        medicalNote: "",
        behaviourNote: "",
        outCome: "",
        intakeDate: "",
        fosterPlacementDate: ""
      })
    );
  };
  // handleInputChange = event => {
  //         const { name, value } = event.target;

  //         this.setState({
  //           [name]: value
  //         });
  //       };
  handleInputChange = event => {
    const { name, value, type } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    //
    // const newCat = this.state;
    // console.log(newCat);

    fetch("http://localhost:5000/api/cats/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        console.log(response);
        return response.json();
        // this.props.history.push("/dashboard");
      })
      .then(data => {
        console.log(data);
      });
    // Api.saveCat(newCat);
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={6}>
            <TextField
              required
              //   value={this.state.name}
              onChange={this.handleInputChange}
              id="Name"
              name="name"
              label="Name"
              fullWidth
              autoComplete="Name"
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <TextField
              id="age"
              name="age"
              select
              label="Select"
              classNames={classes.textField}
              value={this.state.age}
              onChange={this.handleInputChange}
              SelectProps={{
                MenuProps: {
                  classNames: classes.menu
                }
              }}
              helperText="Please select age"
              margin="normal"
            >
              {age.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              value={this.state.sex}
              onChange={this.handleInputChange}
              id="Sex"
              name="sex"
              label="Select Sex"
              fullWidth
              select
              SelectProps={{
                MenuProps: {
                  classNames: classes.menu
                }
              }}
              helperText="Please select sex"
              margin="normal"
              // autoComplete="billing address-line1"
            >
              {sex.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="size"
              name="size"
              select
              label="Select"
              classNames={classes.textField}
              value={this.state.size}
              onChange={this.handleInputChange}
              SelectProps={{
                MenuProps: {
                  classNames: classes.menu
                }
              }}
              helperText="Please select size"
              margin="normal"
            >
              {size.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6} sm={6}>
            <TextField
              id="primaryBreed"
              name="primaryBreed"
              select
              label="Select"
              classNames={classes.textField}
              value={this.state.primaryBreed}
              onChange={this.handleInputChange}
              SelectProps={{
                MenuProps: {
                  classNames: classes.menu
                }
              }}
              helperText="Please select primary breed"
              margin="normal"
            >
              {primaryBreed.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6} sm={6}>
            <TextField
              id="secondaryBreed"
              name="secondaryBreed"
              select
              label="Select"
              classNames={classes.textField}
              value={this.state.secondaryBreed}
              onChange={this.handleInputChange}
              SelectProps={{
                MenuProps: {
                  classNames: classes.menu
                }
              }}
              helperText="Please select secondary breed"
              margin="normal"
            >
              {secondaryBreed.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              //   value={this.state.description}
              onChange={this.handleInputChange}
              id="Description "
              name="description "
              label="Write Description  "
              fullWidth
              autoComplete="Write Description"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              //   value={this.state.serialNumber}
              onChange={this.handleInputChange}
              id="SerialNumber"
              name="serialNumber"
              label="SerialNumber"
              type="Number"
              fullWidth
              autoComplete="SerialNumber"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              //   value={this.state.shelterTableID}
              onChange={this.handleInputChange}
              id="ShelterTableID"
              name="shelterTableID"
              label="ShelterTableID"
              type="Number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              //   value={this.state.petPointID}
              onChange={this.handleInputChange}
              id="PetPointID"
              name="petPointID"
              label="PetPointID"
              type="Number"
              fullWidth
              autoComplete="PetPointID"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              //   value={this.state.image}
              onChange={this.handleInputChange}
              id="Image"
              name="image"
              label="Image"
              fullWidth
              autoComplete="Image"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="FIVTested"
              name="FIVTested"
              select
              label="Select"
              classNames={classes.textField}
              value={this.state.FIVTested}
              onChange={this.handleInputChange}
              SelectProps={{
                MenuProps: {
                  classNames: classes.menu
                }
              }}
              helperText="FIVTested"
              margin="normal"
            >
              {FIVTested.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6} sm={6}>
            <TextField
              id="FLVTested"
              name="FLVTested"
              select
              label="Select"
              classNames={classes.textField}
              value={this.state.FLVTested}
              onChange={this.handleInputChange}
              SelectProps={{
                MenuProps: {
                  classNames: classes.menu
                }
              }}
              helperText="FLVTested"
              margin="normal"
            >
              {FLVTested.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              //   value={this.state.FVRCPVaccination}
              type="date"
              onChange={this.handleInputChange}
              id="FVRCPVaccination Date"
              name="FVRCPVaccination Date"
              label="FVRCPVaccination Date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              //   value={this.state.rabiesVaccinationDate}
              type="date"
              onChange={this.handleInputChange}
              id="RabiesVaccinationDate"
              name="rabiesVaccinationDate"
              label="RabiesVaccinationDate"
              InputLabelProps={{ shrink: true }}
              fullWidth
              autoComplete="RabiesVaccination Date"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              //   value={this.state.vetTableID}
              onChange={this.handleInputChange}
              id=" VetTableID"
              name="vetTableID"
              label="Vet Table ID"
              type="Number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              //   value={this.state.medicalNote}
              onChange={this.handleInputChange}
              id="MedicalNote"
              name="medicalNote"
              label="Medical Note"
              fullWidth
              autoComplete="Medical Note"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              //   value={this.state.behaviourNote}
              onChange={this.handleInputChange}
              id="Behaviour Note"
              name="behaviourNote"
              label="Behaviour Note"
              fullWidth
              autoComplete="Behaviour Note"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              //   value={this.state.outCome}
              onChange={this.handleInputChange}
              id="Out Come"
              name="outCome"
              label="Outcome"
              fullWidth
              autoComplete="Outcome"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              //   value={this.state.intakeDate}
              onChange={this.handleInputChange}
              id="Intake Date"
              name="intakeDate"
              label="Intake Date"
              InputLabelProps={{ shrink: true }}
              type="date"
              fullWidth
              autoComplete="Intake Date"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              //   value={this.state.fosterPlacementDate}
              onChange={this.handleInputChange}
              id="Foster Placement Date"
              name="fosterPlacementDate"
              label="Foster Placement Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              // autoComplete="Out Come"
            />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleFormSubmit}
          >
            Submit
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
}
// TextFields.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

// export default CatForm;
export default withStyles(styles)(CatForm);
