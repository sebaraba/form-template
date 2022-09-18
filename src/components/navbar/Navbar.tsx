import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

function Navbar() {

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={styles.logo}>
          Navbar
        </Typography>
          <div className={styles.navlinks}>
            <Link to="/certificates" className={styles.link}>
              All Certificates
            </Link>
            <Link to="/register" className={styles.link}>
              Register Certificate
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
