import DataCard from "../components/dataCard";
import { memberships } from "../data/memberships";

export default function Memberships() {
  return (
    <DataCard title="Memberships">
      <ul>
        {memberships.map((membership) => (
          <li key={membership.name} className="mb-2">
            <a href={membership.link} title={`To ${membership.name}`}>
              {membership.name} ({membership.position})
            </a>
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
