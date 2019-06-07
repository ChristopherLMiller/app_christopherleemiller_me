import { SFC } from 'react';
import Link from 'next/link';
import { ModelInfo } from './ModelInfo';
import { ModelTypes } from './Types';
import { StyledModelListing } from '../../styles/Models';
import { FeaturedImage } from '../FeaturedImage';

const ModelListing: SFC<ModelTypes> = ({ model }) => (
  <Link as={`/model/${model.slug}`} href={`/model?slug=${model.slug}`}>
    <StyledModelListing>
      <FeaturedImage
        image={model.featured_image}
        width={700}
        alt={model.title}
      />
      <ModelInfo model={model} />
    </StyledModelListing>
  </Link>
);

export { ModelListing };
