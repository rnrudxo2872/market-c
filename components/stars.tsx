import { repeat } from "@libs/client/utils";
import { joinClasses } from "@libs/common";

function HalfStar({ isAvg }: { isAvg: boolean }) {
  return (
    <svg
      viewBox="0 0 576 512"
      xmlns="http://www.w3.org/2000/svg"
      className={joinClasses("text-yellow-400", isAvg ? "h-8 w-8" : "h-4 w-4")}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z" />
    </svg>
  );
}

function FullStar({ isAvg }: { isAvg: boolean }) {
  return (
    <svg
      viewBox="0 0 576 512"
      xmlns="http://www.w3.org/2000/svg"
      className={joinClasses("text-yellow-400", isAvg ? "h-8 w-8" : "h-4 w-4")}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z" />
    </svg>
  );
}

export default function Stars({
  fill,
  reviewId,
  isAvg = false,
}: {
  fill: number;
  reviewId: string;
  isAvg?: boolean;
}) {
  return (
    <div className="flex gap-0.5">
      {repeat<JSX.Element[]>(Math.floor(fill))(
        (a, index) => (
          (a[a.length] = (
            <FullStar key={`${reviewId}/star/${index}`} isAvg={isAvg} />
          )),
          a
        )
      )([])}
      {fill % 1 !== 0 ? (
        <HalfStar key={`${reviewId}/star/${Math.ceil(fill)}`} isAvg={isAvg} />
      ) : null}
    </div>
  );
}
