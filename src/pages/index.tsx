import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Barbie from "../components/Barbie";
import Oppenheimer from "../components/Oppenheimer";

const IndexPage: React.FC<PageProps> = () => (
  <main className="flex flex-col md:flex-row justify-center items-center bg-black text-white h-screen">
    <Barbie />
    <Oppenheimer />
  </main>
);

export default IndexPage;

export const Head: HeadFC = () => <title>BarbieHeimer</title>;
