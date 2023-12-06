import React from 'react';

const Button = (props) => {
  const { clickFunc, children } = props;
  const btnFunc = () => {
    //console.log("Child:", children, "clicked");
    clickFunc();
  };

  return (
    <button onClick={() => btnFunc()}>
      {children}
    </button>
  );
};

export default Button;