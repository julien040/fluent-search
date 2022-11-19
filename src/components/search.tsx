/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import data from "../../data";
import Fuse from "fuse.js";

import getImageURLFromGitHub from "../getImageURLFromGitHub";
import { Emoji } from "../types/emoji";
import Link from "next/link";

type Props = {
  input: string;
};
const values = Object.values(data);

const search = new Fuse(values, {
  keys: ["name", "keywords"],
});

const ResultItem = ({ name, image }: { name: string; image: string }) => {
  return (
    <Link
      className=" flex justify-center flex-col items-center bg-white/30 p-4 rounded-xl w-[47%] sm:w-[31%] md:w-[23%]"
      href={"/emoji/" + name}
      key={name}
    >
      <img src={image} alt={name} className="w-14 h-14 aspect-square" />
      <p className="text-sm mt-2">{name}</p>
    </Link>
  );
};

const SearchResults: React.FC<Props> = ({ input }) => {
  const [Results, setResults] = useState<any>();
  useEffect(() => {
    if (input.length > 0) {
      const results = search.search(input, { limit: 30 });
      setResults(results);
    }
  }, [input]);
  return (
    <div className="flex justify-items-stretch gap-4 flex-wrap ">
      {input.length === 0
        ? Object.values(data)

            .slice(0, 30)
            .map((emoji: any) => {
              return (
                <ResultItem
                  key={emoji.name}
                  name={emoji.name}
                  image={getImageURLFromGitHub(emoji.variant[0]["3D"] ?? "")}
                />
              );
            })
        : null}
      {Results?.length === 0 && input.length > 0 ? (
        <p>
          No results found for <b>{input}</b>
        </p>
      ) : null}

      {Results &&
        input.length > 0 &&
        Results.map((item: { item: Emoji }) => (
          <ResultItem
            key={item.item.name}
            name={item.item.name}
            image={getImageURLFromGitHub(item.item.variant[0]["3D"] ?? "")}
          />
        ))}
    </div>
  );
};

export default SearchResults;
