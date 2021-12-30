import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// TODO: make this type more flexible so that it can take anything a link can
export default function ExternalLink({
  children,
  href,
  title,
}: {
  children;
  href: string;
  title: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      title={title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        className="relative"
        style={{
          left: "5px",
          top: "-5px",
          fontSize: "0.8rem",
          color: isHovered ? "lightblue" : null, // TODO: do this in a more tailwind-y way
        }}
      />
    </a>
  );
}
