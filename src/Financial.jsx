import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Financial = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Financial Advice</h3>
        <button className="grid-c-title-icon">
          <AddIcon />
        </button>
      </div>
      <div className="grid-c8-content">
        <p className="text text-silver-v1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          doloribus!
          <br /> <br />
          Dolor sit amet consectetur adipisicing elit. Quidem, odit.
        </p>
      </div>
    </div>
  );
};

export default Financial;
