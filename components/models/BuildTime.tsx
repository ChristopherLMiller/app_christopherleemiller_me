import React from 'react';
import { StyledModelListingParagraph } from '../../styles/Models';

interface BuildTimeTypes {
  id: string;
  mounted: Boolean;
}
class BuildTime extends React.Component<BuildTimeTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      time: ``,
      isLoading: false,
      error: null,
    };
  }

  convertTime(time: String) {
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
    const hours = splitString[2];
    const minutes = splitString[3];

    return `${hours || 0} Hours ${minutes} Minutes`;
  }

  async componentDidMount() {
    this.mounted = true;

    if (this.mounted) {
      this.setState({
        isLoading: true,
      });
    }

    try {
      const response = await fetch(
        `https://api.clockify.me/api/workspaces/${
          process.env.CLOCKIFY_WORKSPACE_ID
        }/projects/${this.props.id}`,
        {
          headers: {
            'Content-Type': `application/json`,
            'X-Api-Key': process.env.CLOCKIFY_API_KEY,
          },
        }
      );

      const json = await response.json();

      if (this.mounted) {
        this.setState({
          isLoading: false,
          time: this.convertTime(json.duration),
        });
      }
    } catch (error) {
      if (this.mounted) {
        this.setState({
          error,
          isLoading: false,
        });
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <StyledModelListingParagraph>
        Build Time: {this.state.time}
      </StyledModelListingParagraph>
    );
  }
}

export { BuildTime };
