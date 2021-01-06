/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Box, Container, Grid, Link, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  gap: {
    marginTop: theme.spacing(2)
  },
  gapSmall: {
    marginTop: theme.spacing(1)
  },
  space: {
    marginRight: theme.spacing(1)
  },
  spaceLarge: {
    marginRight: theme.spacing(4)
  }
}));

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ImportContactsIcon
        onClick={handleClickOpen}
        style={{ fontSize: '90px', color: props.data.color }}
      />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Container className={classes.gapSmall}>
          <AppBar color="white" className={classes.appBar}>
            <Toolbar>
              <IconButton>
                {' '}
                <AccountBoxIcon />
              </IconButton>

              <Typography variant="h5" className={classes.spaceLarge}>
                Pan:
              </Typography>
              {/* <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              className={classes.spaceLarge}
            >
              <Typography className={classes.space} variant="h5">
                | Cleartax{' '}
              </Typography>
              <Typography variant="h5">| GSTIN: 27AA</Typography>
            </div>
            <div>
              <Typography variant="h5">| Maharasta</Typography>
            </div> */}
              <IconButton onClick={handleClose} style={{ marginLeft: 'auto' }}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div
            className={classes.gapSmall}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <ImportContactsIcon
              className={classes.space}
              style={{ fontSize: '50px', color: props.data.color }}
            />
            <Typography variant="h3">
              Import data using custom excel template
            </Typography>
          </div>
        </Container>
      </Dialog>
    </div>
  );
}
