import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataCard from "../components/dataCard";
import { socials } from "../data/socials";

export default function Socials() {
  return (
    <DataCard title="Socials">
      <ul>
        {socials.map((social) => (
          <li className="mb-2">
            <a href={social.link} title={`To Joe Duncko's ${social.name}`}>
              <FontAwesomeIcon icon={social.icon} /> {social.name}
            </a>
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
