import { DataCard } from "../components/DataCard";
import { openSourceContributions } from "../data/openSourceContributions";
import { ExternalLink } from "./ExternalLink";

export function OpenSourceContributions() {
  return (
    <DataCard title="Open Source">
      <ul>
        {openSourceContributions.map((openSourceContribution) => (
          <li key={openSourceContribution.name} className="mb-2">
            <ExternalLink
              href={openSourceContribution.link}
              title={`To ${openSourceContribution.name}`}
            >
              {openSourceContribution.name}
            </ExternalLink>{" "}
            ({openSourceContribution.position}):{" "}
            {openSourceContribution.description}
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
