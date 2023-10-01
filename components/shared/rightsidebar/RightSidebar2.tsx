import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../rendertag/RenderTag";

const RightSidebar2 = () => {
  const hotQuestions = [
    { _id: "1", title: "How do i use express as a custom server in NextJS?" },
    { _id: "2", title: "How do i use express as a custom server in NextJS?" },
    { _id: "3", title: "How do i use express as a custom server in NextJS?" },
    { _id: "4", title: "How do i use express as a custom server in NextJS?" },
    { _id: "5", title: "How do i use express as a custom server in NextJS?" },
  ];

  const popularTags = [
    { _id: "1", name: "JAVASCRIPT", totalQuestions: 5 },
    { _id: "2", name: "NEXTJS", totalQuestions: 3 },
    { _id: "3", name: "REACT", totalQuestions: 4 },
    { _id: "4", name: "JAVASCRIPT", totalQuestions: 5 },
    { _id: "5", name: "REACT", totalQuestions: 4 },
  ];
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] min-w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((q) => {
            return (
              <Link
                href={`/questions/${q._id}`}
                key={q._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700 w-[248px]">
                  {q.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => {
            return (
              <RenderTag
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar2;
