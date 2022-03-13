import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataCard } from "../components/DataCard";
import { ExternalLink } from "./ExternalLink";

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
