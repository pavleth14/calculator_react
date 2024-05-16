import React, { useState, useEffect } from "react";

const Button = ({ item, arrayOfChars, setArrayOfChars }) => {
  

  let classNames = "Button";

  if (item === "+" || item === "=") {
    classNames += " doubleHeight";
  } else if (item === "0") {
    classNames += " doubleWidth";
  }

  const showItem = () => {
    if (item === "=") {
      console.log(arrayOfChars);
      return;
    }
    console.log(item);
    setArrayOfChars((state) => [...state, item]);
  };

  return (
    <div onClick={showItem} className={classNames}>
      {item}
    </div>
  );
};

export default Button;
