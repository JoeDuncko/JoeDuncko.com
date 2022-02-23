import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataCard from "../components/dataCard";
import { socials } from "../data/socials";
import ExternalLink from "./externalLink";

export default function Socials({ className }: { className?: string }) {
  return (
    <DataCard className={className} title="Socials">
      <ul>
        {socials.map((social) => (
          <li key={social.name} className="mb-2">
            <ExternalLink
              href={social.link}
              title={`To Joe Duncko's ${social.name}`}
            >
              <FontAwesomeIcon icon={social.icon} /> {social.name}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </DataCard>
  );
}
