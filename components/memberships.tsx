import DataCard from "../components/dataCard";
import { memberships } from "../data/memberships";

export default function Memberships() {
  return (
    <DataCard title="Memberships">
      <ul>
        {memberships.map((membership) => (
          <li>
            <a href={membership.link} title={`To ${membership.name}`}>
              {membership.name} ({membership.position})
            </a>
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
