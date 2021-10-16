import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataCard from "../components/dataCard";

export default function Contact() {
  return (
    <DataCard title="Contact">
      <ul>
        <li>
          <a href={`mailto:personal@joeduncko.com`} title={`Email Joe Duncko`}>
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </li>
      </ul>
    </DataCard>
  );
}
