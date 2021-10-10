import { format } from "date-fns";
import DataCard from "../components/dataCard";
import { Experience as ExperienceType, experiences } from "../data/experiences";

function Experience({ experience }: { experience: ExperienceType }) {
  const { title, description, company, startDate, endDate } = experience;

  return (
    <li className="mb-2">
      <h4>
        <b>{title}</b> @<br />
        <a href={company.link} title={`To ${company.name}`}>
          {company.name}
        </a>
      </h4>

      <span className="block">{company.location}</span>

      <span className="block">
        <time dateTime={startDate.toISOString()}>
          {format(startDate, "MMMM y")}
        </time>{" "}
        -{" "}
        {endDate ? (
          <time dateTime={endDate.toISOString()}>
            {format(endDate, "MMMM y")}
          </time>
        ) : (
          "Present"
        )}
      </span>

      <p>{description}</p>
    </li>
  );
}

export default function Experiences() {
  return (
    <DataCard title="Experience">
      <ol>
        {experiences.map((experience) => (
          <Experience experience={experience} />
        ))}
      </ol>
    </DataCard>
  );
}
