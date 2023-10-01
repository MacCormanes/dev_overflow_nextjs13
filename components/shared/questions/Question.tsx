import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Props = {
  topic: {
    _id: number;
    title: string;
  };
  tags: string[];
  upvotes?: number;
  answers?: number;
  views?: number;
};

const Question = ({
  topic,
  tags,
  upvotes = 0,
  answers = 0,
  views = 0,
}: Props) => {
  return (
    <div className="relative">
      <Card className="px-4 py-2">
        <CardHeader className="flex w-full flex-col gap-3">
          <CardTitle className="h3-semibold truncate whitespace-nowrap">
            {topic.title}
          </CardTitle>
          <div className="flex gap-2">
            {tags.map((t) => (
              <Link
                key={t}
                href={`/tags/${t}`}
                className="flex justify-between gap-2"
              >
                <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
                  {t}
                </Badge>
              </Link>
            ))}
          </div>
        </CardHeader>
        <CardContent className="mt-6"></CardContent>
        <CardFooter className="flex-between">
          <div className="flex">
            <p className="mr-2">Mac | JS Mastery</p>
            <p>- asked 24 days ago</p>
          </div>
          <div className="flex gap-2">
            <div className="small-regular flex">
              <Image
                src="/assets/icons/like.svg"
                alt="thumbs up"
                width={16}
                height={16}
                className=""
              />
              {upvotes} Votes
            </div>
            <div className="small-regular flex">
              <Image
                src="/assets/icons/answers.svg"
                alt="cloud"
                width={16}
                height={16}
                className=""
              />
              {answers} Answers
            </div>
            <div className="small-regular flex">
              <Image
                src="/assets/icons/view.svg"
                alt="eye"
                width={16}
                height={16}
                className=""
              />
              {views} Views
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Question;
