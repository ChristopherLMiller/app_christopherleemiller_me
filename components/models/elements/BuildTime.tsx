import { SFC, Fragment } from 'react';
import { useFetch } from 'react-async';

interface iBuildTime {
  id: string;
}

function convertTime(time: String): string {
  // verify we even have something first
  if (!time) {
    return `N/A`;
  }

  // step 1: remove the PT/FT
  const stripped = time.slice(2);

  // 0S only shows if there is no time logged but a project has been created, so just return none
  if (stripped == `0S`) {
    return `None`;
  }

  const regex = new RegExp(/((\d+)H)?(\d+)M(\d+)S/);
  const splitString = stripped.match(regex);
  if (splitString) {
    const hours = splitString[2];
    const minutes = splitString[3];

    return `${hours || 0} Hours ${minutes} Minutes`;
  }

  return `N/A`;
}

const BuildTime: SFC<iBuildTime> = ({ id }) => {
  // immediately return if id is null
  if (id === null) {
    return <Fragment>N/A</Fragment>
  }

  const headers = {
    Accept: `application/json`,
    'Content-Type': `application/json`,
    'X-Api-Key': process.env.CLOCKIFY_API_KEY,
  };
  const { data, isLoading, error } = useFetch(
    `https://api.clockify.me/api/workspaces/${process.env.CLOCKIFY_WORKSPACE_ID}/projects/${id}`,
    {
      headers,
    }
  );

  if (isLoading) return <Fragment>---</Fragment>;
  if (error) {
    console.log(error.message);
    return <Fragment>N/A</Fragment>;
  }
  if (data) return <Fragment>{convertTime(data.duration)}</Fragment>;

  return null;
};

export { BuildTime };
