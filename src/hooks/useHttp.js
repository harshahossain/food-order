import { useEffect, useState, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const response = fetch(url, config);

  const resData = await response.json();
  if (!response) {
    throw new Error(
      resData.message || "something went wrong, failed to send request"
    );
  }
  return resData;
}

export default function useHttp(url, config) {
  const [data, setData] = useState();
  const [isLoading, setIsLoadig] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async function sendRequest() {
      setIsLoadig(true);
      try {
        const resData = sendHttpRequest(url, config);
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      }
      setIsLoadig(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (config && config.method === "GET") {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
  };
}
