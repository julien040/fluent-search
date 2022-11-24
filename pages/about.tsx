import type { NextPage } from "next";

import Head from "next/head";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About - Fluent UI Emoji</title>
      </Head>
      <div className=" flex flex-col items-center justify-center h-[60vh] text-center ">
        <h1 className="text-2xl mt-4 font-bold">About</h1>
        <p className="mt-4 text-sm text-gray-600">
          I love emojis from Microsoft Fluent UI.
          <br />I made this website to download them because I find it easier
          than searching on GitHub.
          <br />
          Feel free to use it too.
        </p>
      </div>
    </div>
  );
};

export default About;
