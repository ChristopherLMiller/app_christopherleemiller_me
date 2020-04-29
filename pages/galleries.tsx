import Card from "../components/Card";
import { roles } from "../lib/hook/useAuth";
import { Layout } from "../components/layout/PageLayout";
import { GET_ALL_GALLERIES_BRIEF } from "../utils/query";
import { useQuery } from "react-apollo";
import { Loader } from "../components/elements/Loader";
import { isDefined } from "../utils/functions/isDefined";
import styled from "styled-components";
import { ImageURL } from "../utils/functions/imageURL";
import Masonry from "react-masonry-css";

const title = `Galleries`;
const description = `A visual of all the things me!`;

export const GalleriesAuth = {
  isSecure: false,
  permittedGroups: {
    groups: [roles.admin, roles.mod],
  },
};

const GalleryList = styled.div`
  .masonry-grid {
    display: flex;
    margin-left: -30px;
    width: auto;
  }

  .masonry-grid-column {
    padding-left: 30px;
    background-clip: padding-box;

    > div {
      margin-bottom: 30px;
    }
  }
`;

const StyledGalleryImage = styled.div`
  position: relative;
  height: min-content;
  box-shadow: var(--box-shadow);
  border: 5px solid var(--main-color-transparent);
  transition: all 0.15s;

  :hover {
    transform: scale3d(1.1, 1.1, 1);
    > span {
      background: var(--main-color-transparent);
    }
  }
`;

const GalleryImage = styled.img`
  display: block;
  width: 100%;
`;

const GalleryImageCaption = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  padding: 10px;
  font-weight: 100;
  font-size: var(--font-size-responsive);
`;

const GalleriesPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_GALLERIES_BRIEF);

  return (
    <Layout
      meta={{
        title,
        description,
        useSEO: true,
        path: `/galleries`,
      }}
    >
      {error && (
        <Card heading="Unable to load data">
          <hr />
          <h2>{error.message}</h2>
          <hr />
          <p>
            Sorry. Something happened and we can't seem to load the data right
            now.
          </p>
        </Card>
      )}
      <Loader isLoading={loading} />
      <GalleryList>
        <Masonry
          breakpointCols={3}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {isDefined(data) &&
            data.galleries.map((gallery: any) => (
              <StyledGalleryImage key={gallery.Slug} className="galleryImage">
                <GalleryImage
                  src={`${ImageURL(
                    gallery.featured_image.provider_metadata.public_id
                  )}.jpg`}
                />
                <GalleryImageCaption>{gallery.title}</GalleryImageCaption>
              </StyledGalleryImage>
            ))}
        </Masonry>
      </GalleryList>
    </Layout>
  );
};
export default GalleriesPage;
