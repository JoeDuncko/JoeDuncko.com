import {
  faChartBar,
  faCodeBranch,
  faCopyright,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { catchPhrase, name } from "../constants";

export function Footer() {
  const print = () => {
    window.print();
  };

  return (
    <footer className="max-w-screen-lg sm:flex text-xs print:hidden items-center">
      <div className="text-center sm:text-left flex-1">
        <FontAwesomeIcon icon={faCopyright} /> {name} {new Date().getFullYear()}
      </div>

      <div className="text-center flex-1">
        <a
          href="https://github.com/JoeDuncko/joeduncko.com"
          className="m-1"
          target="_blank"
        >
          <FontAwesomeIcon icon={faCodeBranch} />
        </a>
        <button onClick={print} className="m-1">
          <FontAwesomeIcon icon={faPrint} />
        </button>
        <a
          href="https://simpleanalytics.com/joeduncko.com?utm_source=joeduncko.com"
          className="m-1"
          target="_blank"
        >
          <FontAwesomeIcon icon={faChartBar} />
        </a>
      </div>

      <div className="text-right flex-1">
        <em>{catchPhrase}</em>
      </div>
    </footer>
  );
}
