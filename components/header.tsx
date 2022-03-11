import Image from "next/image";
import Link from "next/link";
import { description, name } from "../constants";

export default function Header() {
  return (
    <header className="flex flex-col items-center mb-4 print:hidden">
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

      <section>
        <ul className="flex flex-row items-center text-center gap-8">
          {/* TODO: highlight the active page */}
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
}
