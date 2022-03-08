import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";

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

      <Footer />
    </div>
  );
}
