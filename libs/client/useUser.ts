import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR("/api/users/me", () =>
    fetch("/api/users/me").then((res) => res.json())
  );
  const router = useRouter();

  useEffect(() => {
    if (data && !data.ok) router.replace("/enter");
  }, [data, router]);

  return data && !error
    ? { user: data.profile, loading: false }
    : { loading: true };
}
