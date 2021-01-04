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

import Item from 'src/components/custom/E-Invoicing/Item';
import NavTab from 'src/components/custom/E-Invoicing/NavTab';

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: 'grey'
  }
}));

const Index = props => {
  const classes = useStyles();
  let info = [
    {
      title: 'Generate E-Invoices',
      summary: 'Upload your sales documents to genreate IRN and QR code',
      color: '#90EE90',
      icon: 'AddCircleRoundedIcon'
    },
      {
      title: 'View all E-Invoices',
      summary: 'View all Uploaded documents and take action on them',
      color: '#f6a46d',
      icon: 'VisibilityIcon'
    },
      {
      title: 'Data Import History',
      summary: 'View all your previously imported sales document and review to fix errors',
      color: '#3f97cc',
      icon: 'HistoryIcon'
    },
      {
      title: 'Purchase Invoices',
      summary: 'View E-Invoices generated against you by vendors',
      color: '#f56674',
      icon: 'ShopIcon'
    }
  ];
  return (
    <div className={classes.root}>
      <div>Welcome To Our E-Invoicing!</div>
      <div>Add Business/GSTIN</div>
      <div>Recommendations</div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
       {info.map(d => (
        <Item data={d} />
      ))}</div>
     <NavTab/>
    </div>
  );
};

export default Index;
