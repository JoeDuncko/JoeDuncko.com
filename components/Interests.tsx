import { DataCard } from "../components/DataCard";
import { interests } from "../data/interests";

export function Interests() {
  return (
    <DataCard title="Interests">
      <ul>
        {interests.map((interest) => (
          <li key={interest.name} className="mb-2">
            <h4 className="inline">{interest.name}</h4> ({interest.description})
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
