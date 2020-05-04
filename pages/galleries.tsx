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
import { motion } from "framer-motion";
import { format } from "date-fns";

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
    margin-left: -20px;
    width: auto;
  }

  .masonry-grid-column {
    padding-left: 20px;
    background-clip: padding-box;

    > div {
      margin-bottom: 20px;
    }
  }
`;

const GalleryImageContainer = styled(motion.div)`
  position: relative;
  box-shadow: var(--box-shadow);
  border: 5px solid var(--main-color-transparent);
  cursor: pointer;
`;

const GalleryImage = styled.img`
  display: block;
  width: 100%;
`;

const GalleryInfoOverlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  font-weight: 100;
  font-size: var(--font-size-responsive);
`;

const GalleryInfoOverlayVariants = {
  rest: {
    background: "rgba(0, 0, 0, 0.6)",
    transition: {
      type: "tween",
    },
  },
  hover: {
    height: "100%",
    background: "var(--main-color)",
    opacity: 0.8,
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
};

const GalleryImageCaption = styled(motion.h5)`
  font-family: var(--font-main);
  font-size: var(--font-size-responsive);
  font-weight: 200;
  letter-spacing: 1px;
  margin: 0;
`;

const GalleryImageCaptionVariants = {
  rest: {},
  hover: {
    marginBottom: 20,
  },
};

const GalleryImageAdditionalInfo = styled(motion.div)`
  p {
    margin: 0;
  }
`;

const AdditionalInfoVariants = {
  rest: {
    display: "none",
  },
  hover: {
    display: "initial",
  },
};

const GalleriesPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_GALLERIES_BRIEF);

  // setup some breakpoints for masonry
  const masonryBreakpoints = {
    default: 3,
    1300: 2,
    800: 1,
    700: 2,
    550: 1,
  };

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
            Sorry. Something happened and we can't seem to load data right now.
            Possibly you're offline and if not please let us know. I'm sure the
            above text doesn't make any sense but it will help me figure out the
            problem.
          </p>
        </Card>
      )}
      <Loader isLoading={loading} />
      <GalleryList>
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {isDefined(data) &&
            data.galleries.map((gallery: any) => (
              <GalleryImageContainer
                key={gallery.Slug}
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap="hover"
              >
                <GalleryImage
                  src={`${ImageURL(
                    gallery.featured_image.provider_metadata.public_id
                  )}.jpg`}
                />
                <GalleryInfoOverlay variants={GalleryInfoOverlayVariants}>
                  <GalleryImageCaption variants={GalleryImageCaptionVariants}>
                    {gallery.title}
                  </GalleryImageCaption>
                  <GalleryImageAdditionalInfo variants={AdditionalInfoVariants}>
                    <hr />
                    <p>
                      Authored on{" "}
                      {format(
                        new Date(gallery.created_at),
                        "do 'of' MMMM yyyy"
                      )}
                    </p>
                    <p>
                      Updated Last{" "}
                      {format(new Date(gallery.updated_at), "do 'of' MMM yyyy")}
                    </p>
                    <hr />
                    <p>
                      <strong>Tags: </strong>
                      {gallery?.gallery_tags?.map((tag: any) => (
                        <span>{tag.name} </span>
                      ))}
                    </p>
                    <p>
                      <strong>Categories: </strong>
                      {gallery?.gallery_categories?.map((category: any) => (
                        <span>{category.name} </span>
                      ))}
                    </p>
                    <hr />
                    <p>{gallery.Description}</p>
                  </GalleryImageAdditionalInfo>
                </GalleryInfoOverlay>
              </GalleryImageContainer>
            ))}
        </Masonry>
      </GalleryList>
    </Layout>
  );
};
export default GalleriesPage;
