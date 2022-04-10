import { useState } from "react";

interface IUseMutation<S = unknown, T = unknown> {
  fetchMutation: (data: T) => void;
  data: S | undefined;
  loading: boolean;
  error: any;
}

type UseMutationResult<S, T> = IUseMutation<S, T>;

type MutationMethod = "POST" | "DELETE" | "PUT" | "PATCH";

interface IOption {
  method?: MutationMethod;
}

export default function useMutation<S = unknown, T = unknown>(
  url: string,
  options?: IOption
): UseMutationResult<S, T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState<S>();

  function fetchMutation(data: T) {
    setLoading(true);
    fetch(url, {
      method: options ? options.method : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => (console.log(res), res.json()))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }

  return { fetchMutation, data, error, loading };
}
