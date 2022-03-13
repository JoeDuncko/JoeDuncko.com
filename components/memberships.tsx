import { DataCard } from "../components/dataCard";
import { memberships } from "../data/memberships";
import { ExternalLink } from "./externalLink";

export function Memberships() {
  return (
    <DataCard title="Memberships">
      <ul>
        {memberships.map((membership) => (
          <li key={membership.name} className="mb-2">
            <ExternalLink
              href={membership.link}
              title={`To ${membership.name}`}
            >
              {membership.name}
            </ExternalLink>{" "}
            ({membership.position})
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
