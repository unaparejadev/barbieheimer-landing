import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center bg-black text-white h-screen p-4">
      <div className="flex flex-col justify-center items-center">
        <h1>Barbie</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1>Heimer</h1>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>BarbieHeimer</title>;
