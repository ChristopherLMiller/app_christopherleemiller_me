import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

let easing = [0.175, 0.85, 0.42, 0.96];

const divVariants = {
  exit: {
    y: 150,
    opactiy: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};


const StyledCard = styled.div`
  color: black;
  font-family: var(--font-main);
  font-weight: 300;
  max-width: 1000px;
  margin: 0 auto;
`;

const CardHeading = styled.div`
  background: var(--main-color);
  padding: 3% 5%;
  color: var(--text-color-light);
  font-family: var(--font-main);
  text-align: center;
`;

const CardHeadingHeading = styled.h2`
  margin: 0;
  font-size: 4rem;
  font-weight: 300;
`;
const CardHeadingSubHeading = styled.h3`
  margin: 0;
  font-size: 2rem;
  font-weight: 300;
`;

interface iCardBody {
  padding?: boolean;
}

const CardBody = styled.div`
  background: var(--background-light);
  padding: ${(props: iCardBody) => (props.padding ? `3% 5%` : `0`)};
  font-size: var(--font-size-responsive);
  letter-spacing: -1px;
  text-align: center;

  p {
    word-break: break-word;

    a {
    color: var(--main-color);

    :hover {
      text-decoration: underline;
    }
  }
  }
`;

interface CardProps {
  children: object;
  heading?: string;
  subHeading?: string;
  padding?: boolean;
}

const Card: FunctionComponent<CardProps> = ({
  heading,
  subHeading,
  children,
  padding = true,
}) => (
  <motion.div variants={divVariants}>
    <StyledCard>
      {(heading || subHeading) && (
        <CardHeading>
          {heading && <CardHeadingHeading>{heading}</CardHeadingHeading>}
          {subHeading && (
            <CardHeadingSubHeading>{subHeading}</CardHeadingSubHeading>
          )}
        </CardHeading>
      )}

      <CardBody padding={padding}>{children}</CardBody>
    </StyledCard>
  </motion.div>
);

export default Card;
