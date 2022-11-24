/* eslint-disable @next/next/no-img-element */
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import data from "../../data";
import getImageURLFromGitHub from "../../src/getImageURLFromGitHub";

import Head from "next/head";

type Props = { emoji: typeof data.Abacus };

const Emoji: NextPage<Props> = ({ emoji }) => {
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div>
      <Head>
        <title>{emoji.name} - Fluent UI Emoji</title>
        <meta
          name="description"
          content={"Download " + emoji.name + " from Microsoft Fluent UI Emoji"}
        />
      </Head>
      <div className="max-w-md mx-auto text-center ">
        <img
          className="w-28 h-28 aspect-square mx-auto"
          src={getImageURLFromGitHub(emoji.variant[0]["3D"] ?? "")}
          alt={"Emoji of " + emoji.name}
        />
        <h1 className="text-2xl mt-4 font-bold">{emoji.name}</h1>
        <div className="text-sm text-gray-600 flex my-0 gap-4 items-center mx-auto max-w-fit">
          <span>Emoji on your device:</span>
          <span
            onClick={() => copyToClipboard(emoji.glyph)}
            className="text-2xl cursor-copy"
          >
            {emoji.glyph}
          </span>
        </div>
      </div>
      <div className="bg-white/40 p-4 rounded-xl mt-4 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {emoji.variant.map((variants) =>
            Object.values(variants).map((variant, index) => (
              <a
                href={getImageURLFromGitHub(variant)}
                target="_blank"
                rel="noopener noreferrer"
                key={variant}
                className="flex flex-col items-center gap-4"
              >
                <img
                  className="w-24 h-24 aspect-square"
                  src={getImageURLFromGitHub(variant)}
                  alt={"Emoji of " + emoji.name}
                />
                <span className="text-sm">{Object.keys(variants)[index]}</span>
              </a>
            ))
          )}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Click on an emoji to open it
        </p>
      </div>
    </div>
  );
};

const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.values(data).map((emoji) => ({
    params: { id: emoji.name },
  }));
  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const emoji = Object.values(data).find((emoji) => emoji.name === params?.id);
  return {
    props: {
      emoji,
    },
  };
};

export { getStaticPaths, getStaticProps };

export default Emoji;
