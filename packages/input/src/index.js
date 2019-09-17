import React, { Fragment } from 'react';
import Label from '@lerna-geniuz/label';

const Input = ({
  className,
  type,
}) => (
  <Fragment>
    <Label>My Input C</Label>
    <input className={`gz-input ${className}`} type={type} />
  </Fragment>
);

export default Input;
