import React from "react";
import { TInput } from "../../../types";

const Index = ({ className, onChange, value,placeHolder,...props }: TInput) => {
  return (
    <input className={className} onChange={onChange} value={value} placeholder ={placeHolder} {...props}></input>
  );
};

export default Index;
