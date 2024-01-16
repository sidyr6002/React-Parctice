import React from 'react';

const Button = (props) => {
  const { clickFunc, children } = props;
  const btnFunc = () => { 
    clickFunc();
  };

  console.log(props)

  return (
    <button onClick={btnFunc}>
      {children}
    </button>
  );
};

export default Button;