import { SFC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ModelInfo } from './ModelInfo';
import { ModelTypes } from './Types';
import {
  StyledModelListing,
  StyledModelListingTitle,
} from '../../styles/Models';
import { FeaturedImage } from '../FeaturedImage';

const ModelListingContent = styled.div`
  border: 20px solid var(--background-light);
`;

const ModelListing: SFC<ModelTypes> = ({ model }) => (
  <Link as={`/model/${model.slug}`} href={`/model?slug=${model.slug}`}>
    <StyledModelListing>
      <StyledModelListingTitle>{model.title}</StyledModelListingTitle>
      <ModelListingContent>
        <FeaturedImage
          image={model.featured_image}
          width={700}
          alt={model.title}
        />
        <ModelInfo model={model} />
      </ModelListingContent>
    </StyledModelListing>
  </Link>
);

export { ModelListing };
