import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR("/api/users/me");
  const router = useRouter();

  useEffect(() => {
    if (error || (data && !data?.ok)) router.replace("/enter");
  }, [data, error, router]);

  return data && !error
    ? { user: data.profile, loading: false }
    : { loading: true };
}
