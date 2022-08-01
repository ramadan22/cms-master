import React from 'react';

interface Props {
  type?: string,
  value?: string,
  image?: string,
  styles?: object,
  classes?: string,
  disabled?: boolean,
  placeholder?: string,
  handler?: (evt: any) => void,
  imageClasses?: string,
  imageHandler?: () => void,
}

const Input = (props: Props) => {
  const {
    type,
    value,
    image,
    styles,
    handler,
    classes,
    disabled,
    placeholder,
    imageHandler,
    imageClasses,
  } = props;

  return (
    <div className="relative w-full" style={styles || {}}>
      {
        image !== ''
          ? (
            <div tabIndex={0} role="button" onClick={imageHandler} onKeyPress={imageHandler}>
              <img src={image} alt={type} className={imageClasses} />
            </div>
          )
          : ''
      }
      <input
        type={type}
        value={value}
        onPaste={handler}
        onChange={handler}
        disabled={disabled}
        className={classes}
        onKeyPress={handler}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
};

Input.defaultProps = {
  image: '',
  value: '',
  classes: '',
  type: 'text',
  styles: null,
  disabled: false,
  placeholder: '',
  imageClasses: '',
  handler: () => {},
  imageHandler: () => {},
};

export default Input;
