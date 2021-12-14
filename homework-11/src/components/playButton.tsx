import React, { FC } from "react";
import { IClassList } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const PlayButton: React.FC<IClassList> = ({ clasList }) => {
  if (clasList.includes('actual')) return (
    <div className="playButtonWrap">
      <button className="playButton" onClick={() => alert('смотреть трансляцию матча')}>
        <div>
          смотреть трансляцию матча
        </div>
        <span className="play">
          <FontAwesomeIcon icon={faPlay} />
        </span>
      </button>
    </div>
  )
  return null;
}