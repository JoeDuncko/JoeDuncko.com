import Image from "next/image";
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
    </header>
  );
}
