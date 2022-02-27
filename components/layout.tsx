import {
  faChartBar,
  faCodeBranch,
  faCopyright,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Joe Duncko";
export const description =
  "Product-obsessed frontend engineer and community organizer";
const catchPhrase = "let's create together";
export const siteTitle = `${name} | ${catchPhrase}`;

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const print = () => {
    window.print();
  };

  return (
    <div className="max-w-screen-lg m-auto p-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* TODO: move this, don't hide it when printing other pages */}
      <header className="flex flex-col items-center mb-4 print:hidden">
        {home ? (
          <>
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
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  className="rounded-full"
                  src="/images/JoeDuncko2019Square.jpg"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className="max-w-screen-lg sm:flex text-xs print:hidden">
        <div className="text-center sm:text-left flex-1">
          {/* Fix height */}
          <FontAwesomeIcon icon={faCopyright} /> Joe Duncko{" "}
          {new Date().getFullYear()}
        </div>

        <div className="text-center flex-1">
          <a
            href="https://github.com/JoeDuncko/JoeDuncko.github.io"
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
          <em>let's create, together</em>
        </div>
      </footer>
    </div>
  );
}
