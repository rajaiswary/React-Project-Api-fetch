import React from 'react';
import { Button } from 'reactstrap';



export default (props) => {
    return <Button color="danger">{props.children}</Button>;
  };