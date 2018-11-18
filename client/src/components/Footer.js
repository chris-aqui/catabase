// start with rfc then tab
import React from "react";
import Typography from '@material-ui/core/Typography';


var footerStyle = {
  padding: "20px",
  // position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
};

export default () => {
  return (
    <div style={footerStyle}>
    <footer className="footer" >
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      Copyright &copy; {new Date().getFullYear()} Toronto Cat Rescue
      </Typography>
    </footer>
    </div>
  );
};

