import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { myName, siteDescription } from "../constants";

export function Header() {
  return (
    <header className="flex flex-col items-center mb-4 print:hidden">
      <nav className="mb-8">
        <ul className="flex flex-row items-end text-center gap-8">
          <NavLinkListItem href="/">Home</NavLinkListItem>
          <NavLinkListItem href="/resume">Resume</NavLinkListItem>
          <NavLinkListItem href="/blog">Blog</NavLinkListItem>
        </ul>
      </nav>

      <Image
        priority
        className="rounded-full"
        src="/images/JoeDuncko2019Square.jpg"
        height={144}
        width={144}
        alt={myName}
      />

      <h1 className="text-4xl">{myName}</h1>

      <section className="flex flex-col items-center text-center">
        <p>{siteDescription}</p>
      </section>
    </header>
  );
}

const NavLinkListItem = ({ href, children }) => {
  const router = useRouter();

  return (
    <li
      className={classnames(
        "hover:underline",
        router.pathname === href ? "font-semibold" : ""
      )}
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};
