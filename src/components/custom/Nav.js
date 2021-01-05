/* eslint-disable */
import React from 'react';

import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  space: {
    marginRight: theme.spacing(1)
  }
}));

const Nav = props => {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <ArrowBackIcon className={classes.space} style={{ cursor: 'pointer' }} />
      <div>
        <Typography>All Products / E-Invoicing</Typography>
      </div>
      <div
        style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}
      >
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography>Switch Business</Typography>
      </div>
    </div>
  );
};

export default Nav;
