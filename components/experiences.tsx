import classNames from "classnames";
import { format } from "date-fns";
import DataCard from "../components/dataCard";
import { Experience as ExperienceType, experiences } from "../data/experiences";
import ExternalLink from "./externalLink";

function Experience({ experience }: { experience: ExperienceType }) {
  const { title, description, company, startDate, endDate, hideWhenPrinting } =
    experience;

  return (
    <li className={classNames("mb-2", hideWhenPrinting && "print:hidden")}>
      <div className="flex mb-1 gap-4">
        <div className="flex-grow">
          <h4>
            <b>{title}</b> @<br />
            {company.link ? (
              <ExternalLink href={company.link} title={`To ${company.name}`}>
                {company.name}
              </ExternalLink>
            ) : (
              company.name
            )}
          </h4>
        </div>

        <div className="text-right text-sm text-gray-500">
          <span className="block">{company.location}</span>

          <span className="block">
            {/* Inline-block helps not break between years and months on mobile, see
            https://stackoverflow.com/questions/18222409/specifying-a-preferred-line-break-point-in-html-text-in-a-responsive-design */}
            <time dateTime={startDate.toISOString()} className="inline-block">
              {format(startDate, "MMM y")}
            </time>{" "}
            -{" "}
            {endDate ? (
              <time dateTime={endDate.toISOString()} className="inline-block">
                {format(endDate, "MMM y")}
              </time>
            ) : (
              "Present"
            )}
          </span>
        </div>
      </div>

      <p>{description}</p>
    </li>
  );
}

export default function Experiences() {
  return (
    <DataCard title="Experience">
      <ol>
        {experiences.map(
          (
            experience,
            index // using index as a key here since I've worked at the same place multiple times. I don't plan on reordering this list, so this should be fine
          ) => (
            <Experience key={index} experience={experience} />
          )
        )}
      </ol>
    </DataCard>
  );
}
