import React, { FC } from "react";
import { IClassList } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";

export const DownButton: React.FC<IClassList> = ({ clasList }) => {
  if (clasList.includes('past')) return (
    <div className="downButton">
      <button className="arrowButton">
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </button>
    </div>
  )
  if (clasList.includes('ahead')) return (
    <div className="downButton">
      <button className="ticketButton">
        <span>
          <FontAwesomeIcon icon={faTicketAlt} />
        </span>
      </button>
    </div>
  )
  if (clasList.includes('actual')) return (
    <div className="downButton">
      <button className="buyTicketButton" onClick={() => alert('купить билет')}>
        <span>
          <FontAwesomeIcon icon={faTicketAlt} />
        </span>
        <div>
          купить билет
        </div>
      </button>
    </div>
  )
  return null;
}