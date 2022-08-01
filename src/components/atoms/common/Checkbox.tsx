import React from 'react';
import { Icon } from '@material-ui/core';

interface Props {
  checked: boolean;
  classes?: string;
  handler: () => void
}

const Checkbox = (props: Props) => {
  const { checked, classes, handler } = props;

  return (
    <button onClick={() => handler()} type="button" className={classes}>
      <Icon>{checked ? 'check_box' : 'check_box_outline_blank_icon'}</Icon>
    </button>
  );
};

Checkbox.defaultProps = {
  classes: '',
};

export default Checkbox;
