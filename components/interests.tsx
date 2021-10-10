import DataCard from "../components/dataCard";
import { interests } from "../data/interests";

export default function Interests() {
  return (
    <DataCard title="Interests">
      <ul>
        {interests.map((interest) => (
          <li>
            {interest.name} ({interest.description})
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
