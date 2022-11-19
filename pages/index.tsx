/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import { useState } from "react";
import { useDebouncedCallback, useDebounce } from "use-debounce";

// Because the json file is too big, we need to use dynamic import
const Results = dynamic(() => import("../src/components/search"), {
  suspense: true,
});

export default function Home() {
  const [input, setInput] = useState("");
  const [debouncedInput] = useDebounce(input, 300);
  // Debounce the input to prevent too many search requests

  useEffect(() => {
    // Do something with the debounced input
    console.log("That mf changed");
  }, [debouncedInput]);

  return (
    <div>
      <Head>
        <title>Microsoft Emoji search</title>
        <meta
          name="description"
          content="Search and find your favorite Microsoft Emoji"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" mt-4 ">
        {/* <img
          src="https://github.com/microsoft/fluentui-emoji/raw/main/art/readme_banner.webp"
          alt="Microsoft Emoji"
          className="rounded-lg aspect-[1765/800] "
        />
        <p className="text-gray-600 text-sm mt-4 ">
          I love emojis from Microsoft Fluent UI. They are so cute and
          expressive. <br />
          Each time I want to use them, I have to search for them on GitHub. So
          I made this website to make it easier for me to find them.
          <br />
          Feel free to use it too.
        </p> */}
        <div className="">
          <input
            type="text"
            placeholder="Love"
            onChange={(e) => setInput(e.target.value)}
            className="rounded-lg mb-8 bg-white/50 p-3 w-full placeholder:text-gray-400 placeholder:text-sm focus:bg-white/70 transition-all"
          />
          <Suspense fallback={<div>Loading...</div>}>
            <Results input={debouncedInput} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
