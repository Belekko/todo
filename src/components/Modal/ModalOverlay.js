import React from 'react';
import Card from '../UI/card/Card';
import classes from './ModalOverlay.module.css';
const ModalOverlay = (props) => {
  return (
      <Card className={classes.modal}>
          <header className={classes.header}>
              <h2>{props.title}</h2>
          </header>
          <h2 className={classes.content}>
              <p>{props.message}</p>
          </h2>
          <footer className={classes.actions}>{props.children}</footer>
      </Card>
  );
};

export default ModalOverlay;