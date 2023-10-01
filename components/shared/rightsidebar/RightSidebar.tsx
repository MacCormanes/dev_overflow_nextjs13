import { popularTags, topQuestions } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border fixed inset-y-0 right-0 z-0 hidden border border-slate-600/10 px-[24px] pb-[32px] pt-[40px] dark:border-none xl:block xl:w-[350px]">
      <div className="mt-24 flex flex-col gap-7">
        <p className="h3-bold text-dark500_light700">Top Questions</p>
        {topQuestions.map((q) => {
          return (
            <div key={q} className="flex-between">
              <p className="body-medium text-dark500_light700 w-[248px]">{q}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </div>
          );
        })}
      </div>
      <div className="text-dark300_light700 mt-16 flex flex-col gap-4">
        <p className="h3-bold pb-5">Popular Tags</p>
        {popularTags.map((t) => {
          return (
            <div key={t.tag} className="flex-between">
              <Link href="">
                <p className="subtle-medium rounded-md bg-slate-400/20 p-2 text-slate-600/70 dark:text-slate-100/50">
                  {t.tag}
                </p>
              </Link>
              <p className="body-medium ">{t.upvotes}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RightSidebar;
