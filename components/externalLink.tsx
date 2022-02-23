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
      target="_blank"
    >
      {children}
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        className="relative print:hidden"
        style={{
          left: "0.2em",
          top: "-1em",
          fontSize: "0.5em",
          color: isHovered ? "aqua" : null, // TODO: do this in a more tailwind-y way
        }}
      />
    </a>
  );
}
