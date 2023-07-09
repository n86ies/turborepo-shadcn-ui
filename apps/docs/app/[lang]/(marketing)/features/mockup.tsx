import { H2 } from "ui/typography";
import { motion } from "framer-motion";

type MockupProps = {
  children: React.ReactNode;
  title: React.ReactNode;
  summary: React.ReactNode;
};

export async function Mockup({ title, summary, children }: MockupProps) {
  return (
    <section className="grid grid-cols-1 py-8 lg:grid-cols-2 my-16">
      <div className=" mb-4 flex flex-col justify-center space-y-4 md:mb-0 md:mr-8">
        <H2 className={"dark:text-white text-blue-950"}>{title}</H2>
        <summary className="list-none">{summary}</summary>
      </div>

      <div className="rounded bg-muted border relative flex items-end w-full  h-fit lg:h-[24rem] flex-grow ">
        <div className="shadow-mockup w-4 -ml-2 shadow-gray-300 h-4 absolute top-4 rounded-full"></div>
        <div className="flex h-full self-start-end justify-center w-full p-2">
          {children}
        </div>
      </div>
    </section>
  );
}