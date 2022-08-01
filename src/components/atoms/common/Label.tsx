import React from 'react';

interface Props {
  text?: string;
  styles?: object;
  classes?: string;
}

const Label = (props: Props) => {
  const {
    text,
    styles,
    classes,
  } = props;

  return (
    <span style={styles || {}} className={classes}>{text}</span>
  );
};

Label.defaultProps = {
  text: '',
  classes: '',
  styles: null,
};

export default Label;
