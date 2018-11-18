import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Fosters from "./Fosters";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Catspage from "./Catspage";
import Footer from "../components/Footer";


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  root: {
    flexGrow: 1
  }
};

class Dashboard extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <React.Fragment>
        <Paper >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Cats" />
            <Tab label="Fosters" />
            <Tab label="Owners" />
            <Tab label="Shelters" />
            <Tab label="Vets" />
          </Tabs>
          </Paper>
          {value === 0 && (
            <TabContainer>
              <Catspage/>
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
             <Fosters />
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer>
              {" "}
              <Fosters />
            </TabContainer>
          )}
        <Footer styles="footerStyle"/>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Dashboard);
