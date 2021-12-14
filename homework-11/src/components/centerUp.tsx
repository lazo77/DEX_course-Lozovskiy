import React, { FC } from "react";
import { IClassList } from "../types";
import CountDown from "./timer";

export const CenterUpComp: React.FC<IClassList> = ({ clasList }) => {
  if (clasList.includes('past')) return (
    <div className="centerUp">
      <p>2 : 1</p>
    </div>
  )
  if (clasList.includes('actual')) return (
    <div className="centerUp">
      <CountDown/>
    </div>
  )
  if (clasList.includes('ahead')) return (
    <div className="centerUp">
      <p>&ensp; -:- &ensp;</p>
    </div>
  )
  return null;
}