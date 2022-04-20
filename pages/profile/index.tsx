import { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";
import Stars from "@components/stars";
import BaseTitle from "@components/title";
import PostUser from "@components/profile/postUser";
import useSWR from "swr";
import useUser from "@libs/client/useUser";
import Image from "next/image";
import { makeImageURL } from "@libs/client/utils";
import ProfileButton from "@components/profileButton";

interface IResUserReviews {
  ok: boolean;
  reviews: {
    id: number;
    content: string;
    score: number;
    createdAt: string;
    createdBy: {
      avatar: string | null;
      id: number;
      name: string;
    };
  }[];
}

const Profile: NextPage = () => {
  const { user } = useUser();
  const { data: reviewsData } = useSWR<IResUserReviews>("/api/users/reviews");

  return (
    <Layout title={<BaseTitle title="나의 당근" />} hasTabBar>
      <div className="flex flex-col gap-8">
        <section className="flex gap-2 pt-2 px-4 items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden relative">
            {user?.avatar ? (
              <Image
                src={makeImageURL({ imageId: user.avatar })}
                alt={`${user.name}의 프로필 이미지`}
                layout="fill"
              ></Image>
            ) : (
              <div className="w-full h-full bg-gray-300"></div>
            )}
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-semibold">{user && user.name}</span>
            <Link href="/profile/edit">
              <a>
                <span className="text-xs">Update profile &rarr;</span>
              </a>
            </Link>
          </div>
        </section>
        <section className="flex justify-between gap-4 px-10">
          <ProfileButton url="/profile/sold" label="판매내역">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 bg-yellow-300 bg-opacity-80 rounded-full p-2 fill-amber-500 stroke-amber-500"
            >
              <path d="M4 6.25C4 5.00736 5.00736 4 6.25 4H14.75C15.9926 4 17 5.00736 17 6.25V14H20.5V17.25C20.5 19.0449 19.0449 20.5 17.25 20.5H7.25C5.45507 20.5 4 19.0449 4 17.25V6.25ZM17 15.5V19H17.25C18.2165 19 19 18.2165 19 17.25V15.5H17ZM15.5 19V6.25C15.5 5.83579 15.1642 5.5 14.75 5.5H6.25C5.83579 5.5 5.5 5.83579 5.5 6.25V17.25C5.5 18.2165 6.2835 19 7.25 19H15.5ZM7.00001 8.75C7.00001 8.33579 7.3358 8 7.75001 8H13.25C13.6642 8 14 8.33579 14 8.75C14 9.16422 13.6642 9.5 13.25 9.5H7.75001C7.3358 9.5 7.00001 9.16422 7.00001 8.75ZM7.00001 12.25C7.00001 11.8358 7.3358 11.5 7.75001 11.5H13.25C13.6642 11.5 14 11.8358 14 12.25C14 12.6642 13.6642 13 13.25 13H7.75001C7.3358 13 7.00001 12.6642 7.00001 12.25ZM7.00001 15.75C7.00001 15.3358 7.3358 15 7.75001 15H10.25C10.6642 15 11 15.3358 11 15.75C11 16.1642 10.6642 16.5 10.25 16.5H7.75001C7.3358 16.5 7.00001 16.1642 7.00001 15.75Z" />
            </svg>
          </ProfileButton>
          <ProfileButton url="/profile/bought" label="구매내역">
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 bg-yellow-300 bg-opacity-80 rounded-full p-2 fill-amber-500 stroke-amber-500"
            >
              <path d="M798.5,303.5H656v-46.7c0-38.5-15-74.8-42.1-102c-27.2-27.3-63.4-42.3-101.9-42.3s-74.7,15-101.9,42.3  C383,182,368,218.3,368,256.8v46.7H225.5c-27.3,0-49.5,22.2-49.5,49.5V862c0,27.3,22.2,49.5,49.5,49.5h572.9  c27.3,0,49.5-22.2,49.5-49.5V353C847.9,325.7,825.7,303.5,798.5,303.5z M415,794.5H289v-40h126V794.5z M616,303.5H408v-46.7  c0-57.5,46.7-104.3,104-104.3s104,46.8,104,104.3V303.5z" />
            </svg>
          </ProfileButton>
          <ProfileButton url="/profile/liked" label="관심목록">
            <svg
              viewBox="0 0 512 452"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 bg-yellow-300 bg-opacity-80 rounded-full p-2 fill-amber-500 stroke-amber-500"
            >
              <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
            </svg>
          </ProfileButton>
        </section>
        <section className="flex flex-col py-8 px-4 items-center">
          <div className="flex text-4xl font-bold items-center mb-8 gap-x-4">
            {reviewsData ? (
              <>
                <span>
                  {(
                    reviewsData.reviews.reduce(
                      (acc, { score }) => acc + score,
                      0
                    ) / reviewsData.reviews.length
                  ).toFixed(1)}
                </span>
                <Stars
                  isAvg
                  fill={Number(
                    (
                      reviewsData.reviews.reduce(
                        (acc, { score }) => acc + score,
                        0
                      ) / reviewsData.reviews.length
                    ).toFixed(1)
                  )}
                  reviewId={`avg`}
                />
              </>
            ) : null}
          </div>
          <div className="divide-y-2">
            {reviewsData?.reviews.map(
              ({ content, createdBy, score, id }, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 py-2 first:pt-0 last:pb-0 w-full"
                >
                  <div className="flex gap-2 items-center">
                    <section className="flex pt-2 items-center">
                      <PostUser
                        name={createdBy.name}
                        image={createdBy.avatar ? createdBy.avatar : undefined}
                        option={<Stars fill={score} reviewId={id + ""} />}
                      />
                    </section>
                  </div>
                  <div>
                    <p className="text-sm">{content}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Profile;
