import { useQuery } from "react-apollo";
import { iModelData, MODELS_QUERY_BRIEF } from "utils/queries/models";
import Card from "components/Card";
import { Loader } from "components/elements/Loader";
import { imageURL } from "utils/functions";
import styled from "styled-components";
import Link from "next/link";
import { Grid, GridItem } from "components/elements/GridLayout";

const PostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GridLink = styled.a`
  display: flex;
  cursor: pointer;
`;
const NewestModels = () => {
  const { data, loading, error } = useQuery<iModelData>(MODELS_QUERY_BRIEF, {
    variables: {
      start: 0,
      limit: 6,
      where: {
        visibility: "PUBLIC",
        status: "PUBLISHED",
      },
      sort: "updated_at:DESC",
    },
  });

  return (
    <Card heading="Current Builds">
      {error && (
        <div>
          <p>Unable to load posts.</p>
        </div>
      )}
      <Loader isLoading={loading} />
      <Grid columns={2} min="175px">
        {!loading &&
          data?.models.map((model) => (
            <GridItem id={model.id}>
              <Link
                as={`/models/model/${model.slug}`}
                href={`/models/model/[slug]`}
              >
                <GridLink>
                  <PostImg
                    src={imageURL(
                      model?.featured_image?.provider_metadata?.public_id
                    )}
                  />
                </GridLink>
              </Link>
            </GridItem>
          ))}
      </Grid>
    </Card>
  );
};

export { NewestModels };
