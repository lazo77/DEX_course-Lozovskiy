import React from "react";
import { IProject } from "../types";
import { ProjectCardProps } from "./ProjectCard";

interface IProjectsListProps {
  projects: IProject[];
  onClick: (id: number) => void;
}
export class ProjectsList extends React.Component<IProjectsListProps> {
  render() {
    const { projects, onClick } = this.props;
    const listItems = projects.map((project) => (
      <ProjectCardProps
        key={project.id}
        id={project.id}
        onClick={onClick}
        project={project}
      />
    ));
    return <div>{listItems}</div>;
  }
}
//TODO: Добавить компонент ProjectsList
// важные подкрасить красным, неважные зелёным
