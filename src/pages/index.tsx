import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Barbie from "../components/Barbie";

const IndexPage: React.FC<PageProps> = () => (
  <main className="flex flex-col md:flex-row justify-center items-center bg-black text-white h-screen">
    <Barbie />

    <div className="flex flex-col justify-center items-center w-1/2">
      <h1>Heimer</h1>
    </div>
  </main>
);

export default IndexPage;

export const Head: HeadFC = () => <title>BarbieHeimer</title>;
