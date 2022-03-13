import { DataCard } from "../components/dataCard";
import { projects } from "../data/projects";
import { ExternalLink } from "./externalLink";

export function Projects() {
  return (
    <DataCard title="Select Projects">
      <ul>
        {projects.map((project) => (
          <li key={project.name} className="mb-2">
            <ExternalLink href={project.link} title={`To ${project.name}`}>
              <h4 className="inline">{project.name}</h4>
            </ExternalLink>
            , {project.description}
            <div className="hidden print:block">
              <i>{project.link}</i>
            </div>
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
