import { FunctionComponent } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Link from 'next/link';
import { Image } from './elements';

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
  font-size: 2rem;
  margin: 15px 0;
`;

const PolaroidContent = styled.div`
  font-family: var(--font-marker);
  color: var(--background-darker);
  font-size: 2rem;
  margin: 15px 0;
`;

interface iPolaroid {
  image: {
    provider_metadata: {
      public_id: string;
    };
  };
  alt?: string;
  caption?: string;
  link?: {
    as: string;
    href: string;
  };
  children?: object;
}

const Polaroid: FunctionComponent<iPolaroid> = ({ image, alt, caption, link, children }) => {
  if (link != null) {
    return (
      <Link as={link.as} href={link.href}>
        <StyledPolaroid>
          <Image file={image?.provider_metadata?.public_id} alt={alt} options={{w: 300, c: 'scale'}}/>
          {caption && <PolaroidCaption>{caption}</PolaroidCaption>}
          <PolaroidContent>{children}</PolaroidContent>
        </StyledPolaroid>
      </Link>
    );
  }

  return (
    <StyledPolaroid>
      <Image file={image?.provider_metadata?.public_id} alt={alt} />
      {caption && <PolaroidCaption>{caption}</PolaroidCaption>}
      <PolaroidContent>{children}</PolaroidContent>
    </StyledPolaroid>
  );
};

export { Polaroid };

// This element represents a basic polaroid style picture.  It should feature an image whether default or user supplied.  The text shown is to be passed in by the user as it can vary based on the usage therefore give control of that to the end user.  Also should include a click listener if user supplies a url
