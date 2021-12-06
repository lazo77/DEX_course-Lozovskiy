import React from "react";
import { IProject } from "../types";

interface IProjectCardProps {
  project: IProject;
  onClick: (id: number) => void;
  id: number;
}

//TODO: сделать компонент ProjectCardProps
export class ProjectCardProps extends React.Component<IProjectCardProps> {
  render() {
    const { project, onClick, id } = this.props;
    let liClass = "projectCard";
    if (project.important) {
      liClass += " important";
    }
    return (
      <div className={liClass} onClick={() => onClick(id)}>
        {project.text}
      </div>
    );
  }
}
