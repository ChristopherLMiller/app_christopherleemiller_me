import Card from "components/Card";
import { Layout } from "components/layout/PageLayout";
import { GALLERIES_QUERY_BRIEF } from "utils/queries";
import { useQuery } from "react-apollo";
import { Loader } from "components/elements/Loader";
import { isDefined, imageURL } from "utils/functions";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { iGalleryData } from "utils/queries/galleries";
import Link from "next/link";

const title = `Galleries`;
const description = `A visual of all the things me!`;

const GalleryList = styled.div`
  .masonry-grid {
    display: flex;
    margin-left: -20px;
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
    marginBottom: 10,
  },
};

const GalleriesPage = () => {
  const { loading, error, data } = useQuery<iGalleryData>(
    GALLERIES_QUERY_BRIEF
  );

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
            data?.galleries.map((gallery) => (
              <Link
                as={`/galleries/gallery/${gallery.slug}`}
                href={"/galleries/gallery/[slug]"}
              >
                <GalleryImageContainer
                  key={gallery.slug}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  whileTap="hover"
                >
                  <GalleryImage
                    src={`${imageURL(
                      gallery.featured_image.provider_metadata.public_id
                    )}.jpg`}
                  />
                  <GalleryInfoOverlay variants={GalleryInfoOverlayVariants}>
                    <GalleryImageCaption variants={GalleryImageCaptionVariants}>
                      {gallery.title}
                    </GalleryImageCaption>
                  </GalleryInfoOverlay>
                </GalleryImageContainer>
              </Link>
            ))}
        </Masonry>
      </GalleryList>
    </Layout>
  );
};
export default GalleriesPage;
