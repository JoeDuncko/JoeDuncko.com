import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataCard } from "../components/dataCard";
import { ExternalLink } from "./externalLink";

export function Contact({ className }: { className?: string }) {
  return (
    <DataCard className={className} title="Contact">
      <ul>
        <li>
          <ExternalLink
            href={`mailto:personal@joeduncko.com`}
            title={`Email Joe Duncko`}
          >
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </ExternalLink>
        </li>
      </ul>
    </DataCard>
  );
}
