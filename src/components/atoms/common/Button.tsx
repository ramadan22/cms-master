import React from 'react';

interface Props {
  text?: string;
  image?: string;
  styles?: object;
  classes?: string;
  disabled?: boolean;
  handler?: () => void;
  classesImage?: string;
}

const Button = (props: Props) => {
  const {
    text,
    image,
    styles,
    handler,
    classes,
    disabled,
    classesImage,
  } = props;

  return (
    <button onClick={handler} className={classes} style={styles || {}} disabled={disabled} type="button">
      {
        image !== ''
          ? <img src={image} alt="button" className={classesImage} />
          : ''
      }
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: '',
  image: '',
  classes: '',
  styles: null,
  disabled: false,
  classesImage: '',
  handler: () => {},
};

export default Button;
