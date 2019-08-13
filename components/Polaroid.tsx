import { SFC } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Link from 'next/link';
import { FeaturedImage } from './FeaturedImage';

const PolaroidHover = posed.div({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
});

const StyledPolaroid = styled(PolaroidHover)`
  padding: 15px;
  background: var(--background-white);
  cursor: pointer;
`;

const PolaroidCaption = styled.p`
  font-family: var(--font-marker);
  color: var(--text-color);
  font-size: 1.5em;
`;

interface iPolaroid {
  image: {
    public_id: string;
  };
  alt?: string;
  caption?: string;
  link?: {
    as: string;
    href: string;
  };
  children?: object;
}

const Polaroid: SFC<iPolaroid> = ({ image, alt, caption, link, children }) => {
  if (link != null) {
    return (
      <Link as={link.as} href={link.href}>
        <StyledPolaroid>
          <FeaturedImage image={image} alt={alt} />
          {caption && <PolaroidCaption>{caption}</PolaroidCaption>}
          {children}
        </StyledPolaroid>
      </Link>
    );
  }

  return (
    <StyledPolaroid>
      <FeaturedImage image={image} alt={alt} />
      {caption && <PolaroidCaption>{caption}</PolaroidCaption>}
      {children}
    </StyledPolaroid>
  );
};

export { Polaroid };

// This element represents a basic polaroid style picture.  It should feature an image whether default or user supplied.  The text shown is to be passed in by the user as it can vary based on the usage therefore give control of that to the end user.  Also should include a click listener if user supplies a url
