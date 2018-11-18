import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button'
import { Paper } from '@material-ui/core';

class OwnerForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      age: '',
      sex: '',
      description: '',
      serialNumber: '',
      shelterTableID: ''
    }
  }
  handleInputChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val })
    console.log(this.state)
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    fetch('http://localhost:5000/api/owners', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then(response => {
      console.log(response);
      console.log('very cool kanye')
    })
  }
  render () {
    return (
      <React.Fragment>
        <Paper style={{padding: 30}}>
            <form onSubmit={this.handleSubmit}>
          <Grid container spacing={24}>
              <Grid item xs={12}>
                <TextField
                  required
                  value={this.state.age}
                  onChange={this.handleInputChange}
                  id='age'
                  name='age'
                  label='Age'
                  type="number"
                  fullWidth
                  autoComplete='age'
                            />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  value={this.state.sex}
                  onChange={this.handleInputChange}
                  id='sex'
                  name='sex'
                  label='Sex'
                  type='text'
                  fullWidth
                  autoComplete='sex'
                            />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  id='description'
                  multiline
                  rows="4"
                  name='description'
                  label='Write a Description'
                  type='text'
                  fullWidth
                  autoComplete='Write Description'
                            />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  value={this.state.serialNumber}
                  onChange={this.handleInputChange}
                  id='serial number'
                  name='serialNumber'
                  label='Serial Number'
                  type="number"
                  fullWidth
                  autoComplete='serial number'
                            />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={this.state.shelterTableID}
                  onChange={this.handleInputChange}
                  id='shelterTableID'
                  name='shelterTableID'
                  label='Shelter Table ID'
                  type="number"
                  fullWidth
                            />
              </Grid>
              <Grid container justify={'center'} alignItems={'center'} xs={12}>
                <Button 
                type="submit"
                variant="contained" 
                color="primary" 
                >
                  Submit
                </Button>
              </Grid>
          </Grid>
          </form>
        </Paper>
      </React.Fragment>
    )
  }
}
export default OwnerForm
