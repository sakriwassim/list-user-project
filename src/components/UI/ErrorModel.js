import React, { Fragment } from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css';
import ReactDOM from "react-dom";
const Backdrop = (props) => {
 return <div className={classes.backdrop} onClick={props.onClick}>
 </div>
};

const ModelOverlay = (props) => {
 return (
  <Card className={classes.modal} >
   <header className={classes.header}>
    <h2>{props.title}</h2>
   </header>
   <div className={classes.content}>
    <p>{props.message}</p>
   </div>
   <footer className={classes.actions}>
    <Button onClick={props.onClick}> Okay </Button>
   </footer>
  </Card>
 )

}
const ErrorModel = (props) => {
 return (
  <Fragment>
   {ReactDOM.createPortal(<Backdrop
    onClick={props.onClick} />,
    document.getElementById('backdrop-root'))}

   {ReactDOM.createPortal(<ModelOverlay
   title={props.title}
   message={props.message}
   onClick={props.onClick} />,
   document.getElementById('backdrop-root'))}


  </Fragment>

 )

}

export default ErrorModel;
