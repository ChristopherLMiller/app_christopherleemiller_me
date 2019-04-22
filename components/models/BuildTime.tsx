import React from 'react';
import { StyledModelListingParagraph } from '../styles/Models';

class BuildTime extends React.Component {
  constructor(props: object) {
    super(props);

    this.state = {
      time: "",
      isLoading: false,
      error: null,
    }
  }

  convertTime(time: String) {
    let hours = 0;
    let minutes = 0;
    let output = "";

    // step 1: remove the PT/FT
    let stripped = time.slice(2);

    if (stripped == "0S") {
      return "None"
    }

    // step 2: pull out hours
    let hoursIndex = time.indexOf('H');
    if (hoursIndex !== -1) {
      hours = parseInt(stripped.slice(0, hoursIndex));
      output += `${hours} Hours `;
    }

    // step 3. grab the minutes
    let minutesIndex = time.indexOf('M');
    if (minutesIndex !== -1) {
      minutes = parseInt(stripped.slice(minutesIndex - 4, minutesIndex - 2));
      output += `${minutes} Minutes`;
    }

    return output;
  }

  async componentDidMount() {
    this.setState({
      isLoading: true
    });

    try {
      const response = await fetch(`https://api.clockify.me/api/workspaces/${process.env.CLOCKIFY_WORKSPACE_ID}/projects/${this.props.id}`, {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": process.env.CLOCKIFY_API_KEY,
        }
      });

      const json = await response.json();

      this.setState({
        isLoading: false,
        time: this.convertTime(json.duration),
      })
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      })
    }

  }

  render() {


    return (
      <StyledModelListingParagraph>
        Build Time: {this.state.time}
      </StyledModelListingParagraph>
    );
  }
}

export default BuildTime;