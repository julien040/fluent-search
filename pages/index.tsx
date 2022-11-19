/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { useState } from "react";
import { useDebouncedCallback, useDebounce } from "use-debounce";

// Because the json file is too big, we need to use dynamic import
const Results = dynamic(() => import("../src/components/search"), {
  suspense: true,
});

export default function Home() {
  const router = useRouter();
  const [input, setInput] = useState(
    typeof router.query.q === "string" ? router.query.q : ""
  );
  const [debouncedInput] = useDebounce(input, 200);
  // Debounce the input to prevent too many search requests

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
