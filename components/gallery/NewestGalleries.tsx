import { useQuery } from "react-apollo";
import Card from "components/Card";
import { Loader } from "components/elements/Loader";
import { imageURL } from "utils/functions";
import styled from "styled-components";
import Link from "next/link";
import { Grid, GridItem } from "components/elements/GridLayout";
import { iGalleryData, GALLERIES_QUERY_BRIEF } from "utils/queries/galleries";

const PostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GridLink = styled.a`
  display: flex;
  cursor: pointer;
`;

const NewestGalleries = () => {
  const { data, loading, error } = useQuery<iGalleryData>(
    GALLERIES_QUERY_BRIEF,
    {
      variables: {
        start: 0,
        limit: 6,
        where: {
          visibility: "PUBLIC",
          status: "PUBLISHED",
        },
        sort: "updated_at:DESC",
      },
    }
  );

  return (
    <Card heading="Top Galleries">
      {error && (
        <div>
          <p>Unable to load galleries.</p>
        </div>
      )}
      <Loader isLoading={loading} />
      <Grid columns={2} min="175px">
        {!loading &&
          data?.galleries.map((gallery) => (
            <GridItem id={gallery.id}>
              <Link
                as={`/galleries/gallery/${gallery.slug}`}
                href={`/galleries/gallery/[slug]`}
              >
                <GridLink>
                  <PostImg
                    src={imageURL(
                      gallery?.featured_image?.provider_metadata?.public_id
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

export { NewestGalleries };
