import React from "react";
import Checkbox from "@mui/material/Checkbox";

const CustomCheckBox = (props) => {
  const { onChange, checked,label,value } = props;

  return (
      <div>
    <Checkbox
      checked={checked}
      onChange={onChange}
      value={value}
      inputProps={{ "aria-label": "controlled" }}
    /><span>{label}</span>
     </div>
  );
 
};

export default CustomCheckBox;
