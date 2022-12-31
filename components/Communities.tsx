import { communities } from "../data/communities";
import { DataCard } from "./DataCard";
import { ExternalLink } from "./ExternalLink";

export function Communities() {
  return (
    <DataCard title="Communities">
      <ul>
        {communities.map((membership) => (
          <li key={membership.name} className="mb-2">
            <ExternalLink
              href={membership.link}
              title={`To ${membership.name}`}
            >
              {membership.name}
            </ExternalLink>{" "}
            ({membership.position}): {membership.description}
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
