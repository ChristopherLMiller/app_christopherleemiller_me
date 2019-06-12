import posed from 'react-pose';
import { SFC, Fragment } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ModelInfo } from './ModelInfo';
import { ModelTypes } from './Types';
import { StyledModelListing } from '../../styles/Models';
import { FeaturedImage } from '../FeaturedImage';
import { ListingTitle } from './elements/ListingTitle';

const ModelListingContentHover = posed.div({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
});

const ModelListingContent = styled(ModelListingContentHover)`
  border: 20px solid var(--background-light);
  cursor: pointer;
`;

const ModelListing: SFC<ModelTypes> = ({ model }) => (
  <StyledModelListing>
    <ListingTitle
      as={`/model/${model.slug}`}
      href={`/model?slug=${model.slug}`}
    >
      {model.title}
    </ListingTitle>
    <Link as={`/model/${model.slug}`} href={`/model?slug=${model.slug}`}>
      <ModelListingContent>
        <Fragment>
          <FeaturedImage
            image={model.featured_image}
            width={700}
            alt={model.title}
          />
          <ModelInfo model={model} />
        </Fragment>
      </ModelListingContent>
    </Link>
  </StyledModelListing>
);

export { ModelListing };
