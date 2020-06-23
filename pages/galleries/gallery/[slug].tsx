import { Layout } from "components/layout/PageLayout";
import { NextPage } from "next";
import { iGallery } from "utils/queries/galleries";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import { imageURL } from "utils/functions";

const title = `Galleries`;
const description = `A visual of all the things me!`;

const GalleryList = styled.div`
  .masonry-grid {
    display: flex;
    margin-left: -20px;
    width: auto;
  }

  .masonry-grid-column {
    padding-left: 20px;
    background-clip: padding-box;

    > img {
      margin-bottom: 20px;
    }
  }
`;

const GalleryImage = styled.img`
  display: block;
  width: 100%;
  box-shadow: var(--box-shadow);
  border: 5px solid var(--main-color-transparent);
  cursor: pointer;
`;

interface iGalleryPage {
  gallery: iGallery["gallery"];
}

const GalleryPage: NextPage<iGalleryPage> = ({ gallery }) => {
  const masonryBreakpoints = {
    default: 3,
    1300: 2,
    800: 1,
    700: 2,
    550: 1,
  };

  return (
    <Layout meta={{ title, description, useSEO: false }}>
      <GalleryList>
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {gallery?.Images?.map((image) => (
            <GalleryImage src={imageURL(image.provider_metadata?.public_id)} />
          ))}
        </Masonry>
      </GalleryList>
    </Layout>
  );
};

GalleryPage.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const response = await fetch(
    `https://strapi.christopherleemiller.me/galleries?slug=${slug}`
  );
  const data = await response.json();

  if (data.length < 1 || data == undefined) {
    ctx?.res?.writeHead(301, { Location: "/404" });
    ctx?.res?.end();
    return { gallery: {} };
  } else {
    return { gallery: data[0] };
  }
};

export default GalleryPage;
