import DataCard from "../components/dataCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <DataCard title="Select Projects">
      <ul>
        {projects.map((project) => (
          <li className="mb-2">
            <a href={project.link} title={`To ${project.name}`}>
              <h4 className="inline">{project.name}</h4>
            </a>
            , {project.description}
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
