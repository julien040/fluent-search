/* eslint-disable @next/next/no-img-element */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Script from "next/script";
import * as React from "react";
import Logo from "../src/components/autoChangeEmoji";
import { SVGProps } from "react";

const GitHubLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
    />
  </svg>
);

function Repo() {
  const [stars, setStars] = React.useState(0);

  React.useEffect(() => {
    fetch("https://api.github.com/repos/julien040/fluent-search")
      .then((res) => res.json())
      .then((data) => setStars(parseInt(data.stargazers_count)));
  }, []);
  return (
    <div className="flex items-center gap-2">
      <GitHubLogo className="w-6 h-6" />

      <p className="text-sm">{stars.toString()} stars</p>
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-3xl h-full mx-auto p-4 transition-all">
      <Script src="https://sa.fluent-ui.julienc.me/latest.js" />
      <header className="py-2 flex justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <Link href={"https://github.com/julien040/fluent-search"}>
          <Repo />
        </Link>
        {/* Logo change with different 3D emoji on hover */}
      </header>
      {/* Makes the page full height: https://gist.github.com/dmurawsky/d45f068097d181c733a53687edce1919 */}
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
          background-color: #fed7aa;
        }
      `}</style>
      <Component {...pageProps} />
      <footer className=" mt-12 pb-8 text-sm text-center text-black/60">
        <p>
          Made with ❤️ by{" "}
          <Link className="hover:underline" href="https://julienc.me">
            Julien
          </Link>
        </p>
        <p>
          DISCLAIMER : This tool is not made by Microsoft and I&apos;m not a
          Microsoft employee (even if I want to)
        </p>
        <div className="flex justify-center gap-4 mt-4 text-black/80 ">
          <Link
            className="hover:underline"
            href="https://github.com/microsoft/fluentui-emoji"
          >
            Fluent Emoji
          </Link>
          <Link
            className="hover:underline"
            href={"https://github.com/julien040/fluent-search"}
          >
            Source code
          </Link>
          <Link className="hover:underline" href="https://julienc.me">
            My other projects
          </Link>
          <Link className="hover:underline" href="/about">
            About
          </Link>
        </div>
      </footer>
    </div>
  );
}
