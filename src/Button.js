import React from 'react';

const Button = ({ class: className, title }) => {
  const btnFunc = (btnTitle) => {
    console.log('Button: ' + btnTitle + ' clicked');
  };

  return (
    <button className={className} onClick={() => btnFunc(title)}>
      {title}
    </button>
  );
};

export default Button;