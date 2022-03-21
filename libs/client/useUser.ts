import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState<{ ok: boolean; profile: any }>();
  const router = useRouter();

  useEffect(() => {
    fetch("/api/users/me")
      .then((res) => res.json())
      .then((data) => {
        if (!data.ok) {
          router.replace("/enter");
          return;
        }
        setUser(data);
      });
  }, [router]);

  return user ? { user: user?.profile } : undefined;
}
