import React, { useState } from "react";
import Radio from "@mui/material/Radio";

const CustomRadio = (props) => {
  const { onChange, checked, value, inputProps,label,number } = props;

  return (
    <>
    {label?
    <>
      <Radio
        checked={checked}
        onChange={onChange}
        value={value}
        name="radio-buttons"
        inputProps={inputProps}
      /><span>{label}</span></>:<><div>{number}</div><Radio
      checked={checked}
      onChange={onChange}
      value={value}
      name="radio-buttons"
      inputProps={inputProps}
    /></>}
    </>
  );
};
export default CustomRadio;
