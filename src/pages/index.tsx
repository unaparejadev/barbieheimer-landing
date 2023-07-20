import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Oppenheimer from "../components/Oppenheimer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center bg-black text-white h-screen">
      <div className="flex flex-col justify-center items-center bg-pink-500 h-screen w-1/2">
        <h1>Barbie</h1>
      </div>
      <Oppenheimer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>BarbieHeimer</title>;
