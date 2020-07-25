import { useState } from "react";

export const fetcher = (url) =>
  fetch(url).then(async (res) => {
    const result = await res.json();
    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });

export function useApiHandler(apiCall) {
  const [reqState, setReqState] = useState({
    error: null,
    data: null,
    loading: false,
  });
  const handle = async (...data) => {
    setReqState({ ...reqState, loading: true });
    try {
      const json = await apiCall(...data);
      setReqState({ ...reqState, loading: false, data: json.data });
      return json.data;
    } catch (e) {
      const message =
        (e.response && e.response.data) || "Opps! something is wrong";
      setReqState({ ...reqState, error: message });
      return Promise.reject(message);
    }
  };

  return [handle, { ...reqState }];
}
