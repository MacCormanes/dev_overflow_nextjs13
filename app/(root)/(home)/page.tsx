import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocalSearch from "../../../components/shared/search/LocalSearch";
import Filters from "@/components/shared/filters/Filters";
import { HomePageFilters } from "../../../constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "../../../components/shared/NoResult/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: "1",
    title:
      "Cascading Deletes in SQLAlchemy?asdfasdfasfasasdfasdfasdfasfasdfasdfasdfasdfasdfasfasdfasdf",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "123",
      name: "Alice",
      picture: "alice.jpg",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div?",
    tags: [
      { _id: "3", name: "css" },
      { _id: "4", name: "styling" },
    ],
    author: {
      _id: "456",
      name: "Bob",
      picture: "bob.jpg",
    },
    upvotes: 15,
    views: 200,
    answers: [
      {
        answerId: "1",
        answerText: "You can center a div using flexbox.",
      },
      {
        answerId: "2",
        answerText: "Another way is to use margin: auto;",
      },
    ],
    createdAt: new Date("2023-09-02T14:30:00.000Z"),
  },
  {
    _id: "3",
    title: "Introduction to React Hooks",
    tags: [
      { _id: "5", name: "react" },
      { _id: "6", name: "javascript" },
    ],
    author: {
      _id: "789",
      name: "Charlie",
      picture: "charlie.jpg",
    },
    upvotes: 200000,
    views: 150000,
    answers: [
      {
        answerId: "3",
        answerText:
          "React Hooks provide a way to use state and other React features in functional components.",
      },
    ],
    createdAt: new Date("2023-09-03T10:45:00.000Z"),
  },
  {
    _id: "4",
    title: "Getting Started with Python Flask",
    tags: [
      { _id: "7", name: "python" },
      { _id: "8", name: "web" },
    ],
    author: {
      _id: "101",
      name: "David",
      picture: "david.jpg",
    },
    upvotes: 12,
    views: 120,
    answers: [],
    createdAt: new Date("2023-09-04T09:15:00.000Z"),
  },
  {
    _id: "5",
    title: "Responsive Web Design Techniques",
    tags: [
      { _id: "9", name: "css" },
      { _id: "10", name: "web" },
    ],
    author: {
      _id: "111",
      name: "Eva",
      picture: "eva.jpg",
    },
    upvotes: 25,
    views: 180,
    answers: [
      {
        answerId: "4",
        answerText:
          "Using media queries is a common technique for achieving responsive web design.",
      },
    ],
    createdAt: new Date("2023-09-05T15:20:00.000Z"),
  },
];

// Access individual examples as examples[0], examples[1], and so on.

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex flex-1 flex-col justify-between gap-5 max-md:flex-row sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />
        <Filters
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
            discussion. our query could be the next big thing others learn from. Get
            involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
