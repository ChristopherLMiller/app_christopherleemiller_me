import React, { SFC } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from './styles/Themes';

const CardPopTransition = posed.div({
  enter: {
    opacity: `1`,
  },
  exit: {
    opacity: `0`,
  },
});

const StyledCard = styled(CardPopTransition)`
  color: black;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  max-width: 1000px;
  margin: 0 auto;
`;

const CardHeading = styled.div`
  background: ${(props: Props) => props.theme.colors.red};
  padding: 20px;
  color: ${(props: Props) => props.theme.colors.white};
  font-family: Roboto;
  text-align: center;
`;

const CardHeadingHeading = styled.h2`
  margin: 0;
  font-size: 2.5em;
  font-weight: 300;
`;
const CardHeadingSubHeading = styled.h3`
  margin: 0;
  font-size: 1em;
  font-weight: 300;
`;

const CardBody = styled.div`
  background: ${(props: Props) => props.theme.colors.grey};
  padding: 40px;
  font-size: 1.25em;
  letter-spacing: 1px;
  text-align: center;

  a {
    color: ${(props: Props) => props.theme.colors.red};

    :hover {
      text-decoration: underline;
    }
  }
`;

interface CardProps {
  children: object;
  heading?: string;
  subHeading?: string;
}

const Card: SFC<CardProps> = ({ heading, subHeading, children }) => (
  <StyledCard initialPose="exit" pose="enter">
    {(heading || subHeading) && (
      <CardHeading>
        {heading && <CardHeadingHeading>{heading}</CardHeadingHeading>}
        {subHeading && (
          <CardHeadingSubHeading>{subHeading}</CardHeadingSubHeading>
        )}
      </CardHeading>
    )}

    <CardBody>{children}</CardBody>
  </StyledCard>
);

export default Card;
