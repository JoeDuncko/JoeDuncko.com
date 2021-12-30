import DataCard from "../components/dataCard";
import { interests } from "../data/interests";

export default function Interests() {
  return (
    <DataCard title="Interests">
      <ul>
        {interests.map((interest) => (
          <li className="mb-2">
            <h4 className="inline">{interest.name}</h4> ({interest.description})
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
