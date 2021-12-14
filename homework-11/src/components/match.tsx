import React, { FC } from "react";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; */
import { IMatch } from "../types";
import { CenterUpComp } from "../components/centerUp";
import { DownButton } from "../components/downButton";
import { Coefficients } from "../components/coefficients";
import { PlayButton } from "../components/playButton";

export const Match: React.FC<IMatch> = ({
  matchClassList,
  header,
  teams: [team1, team2],
  downText: {
    downDate,
    downPlace,
  }
}) => {
  const team1ImgUrl = team1.imgUrl;
  const team1Name = team1.teamName;
  const team2ImgUrl = team2.imgUrl;
  const team2Name = team2.teamName;
  return (
    <div className="matchWrap">
      <div className={matchClassList}>
        <h2>{header}</h2>
        <div className="teams">
          <div className="team">
            <div className="teamlogo">
              <img src={team1ImgUrl}
                alt={`FC ${team1Name.toUpperCase()}`} />
            </div>
            <p>{team1Name}</p>
          </div>
          <CenterUpComp clasList={matchClassList} />
          <div className="team">
            <div className="teamlogo">
              <img src={team2ImgUrl}
                alt={`FC ${team2Name.toUpperCase()}`} />
            </div>
            <p>{team2Name}</p>
          </div>
        </div>
        <div className="down">
          <div className="downText">
            <p className="date">
              {downDate}
            </p>
            <p className="place">
              {downPlace}
            </p>
          </div>
          <Coefficients clasList={matchClassList} />
          <DownButton clasList={matchClassList} />
        </div>
      </div>
      <PlayButton clasList={matchClassList} />
    </div>
  )
}