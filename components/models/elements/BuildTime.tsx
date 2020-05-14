import { FunctionComponent } from "react";
import { useFetch } from "react-async";
import { makeTimeFriendly } from "utils/functions";

interface iBuildTime {
  id: string;
}

interface iFetchData {
  duration: string;
}

const BuildTime: FunctionComponent<iBuildTime> = ({ id }) => {
  // immediately return if id is null
  if (id === null) {
    return null;
  }

  const headers = {
    Accept: `application/json`,
    "Content-Type": `application/json`,
    "X-Api-Key": process.env.CLOCKIFY_API_KEY,
  };
  const { data, isLoading, error } = useFetch<iFetchData>(
    `https://api.clockify.me/api/workspaces/${process.env.NEXT_PUBLIC_CLOCKIFY_WORKSPACE_ID}/projects/${id}`,
    {
      headers,
    }
  );

  if (error) {
    console.log(`Unable to fetch from clockify: ${error.message}`);
    return null;
  }

  if (data)
    return (
      <span>
        Build Time: {isLoading ? "-----" : makeTimeFriendly(data.duration)}
      </span>
    );

  return null;
};

export { BuildTime };
