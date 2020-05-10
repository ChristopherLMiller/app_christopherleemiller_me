export const makeTimeFriendly = (time: string) => {
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