import { useState } from "react";

interface IUseMutation<S> {
  fetchMutation: (data: S | any) => void;
  data: S | any;
  loading: boolean;
  error: any;
}

type UseMutationResult<S> = IUseMutation<S>;

export default function useMutation<S = any>(
  url: string
): UseMutationResult<S> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState<S>();

  function fetchMutation(data: S) {
    setLoading(true);
    fetch(url, {
      method: "POST",
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
