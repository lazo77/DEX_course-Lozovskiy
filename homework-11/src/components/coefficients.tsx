import React, { FC } from "react";
import { IClassList } from "../types";

export const Coefficients: React.FC<IClassList> = ({ clasList }) => {
  if (clasList.includes('actual')) return (
    <div className="coefficients">
      <div className="coef">
        <div className="coef_value cv1" onClick={() => alert('3.52')}>3.52</div>
        <div className="coef_text">п1</div>
      </div>
      <div className="coef">
        <div className="coef_value cv2" onClick={() => alert('2')}>2</div>
        <div className="coef_text">x</div>
      </div>
      <div className="coef">
        <div className="coef_value cv3" onClick={() => alert('3.9')}>3.9</div>
        <div className="coef_text">п2</div>
      </div>
    </div>
  )
  return null;
}