import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { description, name } from "../constants";

export function Header() {
  return (
    <header className="flex flex-col items-center mb-4 print:hidden">
      <nav className="mb-8">
        <ul className="flex flex-row items-end text-center gap-8">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/resume">Resume</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
        </ul>
      </nav>

      <Image
        priority
        className="rounded-full"
        src="/images/JoeDuncko2019Square.jpg"
        height={144}
        width={144}
        alt={name}
      />

      <h1 className="text-4xl">{name}</h1>

      <section className="flex flex-col items-center text-center">
        <p>{description}</p>
      </section>
    </header>
  );
}

const NavLink = ({ href, children }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a className={router.pathname === href ? "font-semibold" : ""}>
        {children}
      </a>
    </Link>
  );
};
