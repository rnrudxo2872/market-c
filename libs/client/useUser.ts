import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

interface IUserProfile {
  id: number;
  phone: string | null;
  email: string | null;
  name: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}

export default function useUser(whiteList?: string[]) {
  const { data, error } = useSWR("/api/users/me");
  const router = useRouter();
  const isWhite = whiteList?.includes(router.pathname);

  useEffect(() => {
    if (error && !isWhite) router.replace("/enter");
    if (data && isWhite) router.replace("/");
  }, [data, error, isWhite, router]);

  return data && !error
    ? { user: data.profile as IUserProfile, loading: false }
    : { loading: true };
}
