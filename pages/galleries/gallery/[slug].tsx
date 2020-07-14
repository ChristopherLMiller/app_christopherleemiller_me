import { Layout } from "components/layout/PageLayout";
import { NextPage } from "next";
import { iGallery, GALLERIES_QUERY_STRING } from "utils/queries/galleries";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import { imageURL, truncate } from "utils/functions";
import { SEPARATOR } from "config";
import { NextSeo, BlogJsonLd } from "next-seo";
import { queryData } from "utils/functions/queryData";

const title = `Galleries`;
const description = `A visual of all the things me!`;

const GalleryList = styled.div`
  .masonry-grid {
    display: flex;
    margin-left: -40px;
    width: auto;
  }

  .masonry-grid-column {
    padding-left: 40px;
    background-clip: padding-box;

    > img {
      margin-bottom: 40px;
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

  // define SEO properties
  const openGraph = {
    title: `Gallery${SEPARATOR}${gallery.title}`,
    description: truncate(gallery.description, 3),
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/galleries/gallery/${gallery.slug}`,
    type: `article`,
    article: {
      authors: ["ChrisM"],
      modifiedTime: gallery.updated_at,
      publishedTime: gallery.created_at,
    },
    images: [
      {
        alt: gallery.title,
        url: `${imageURL(
          gallery?.featured_image?.provider_metadata?.public_id,
          { c: "scale", w: 1200 },
          1,
          "jpg"
        )}`,
      },
    ],
  };

  return (
    <Layout meta={{ title, description, useSEO: false }}>
      <NextSeo
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/galleries/gallery/${gallery.slug}`}
        title={`Gallery${SEPARATOR}${gallery.title}`}
        description={truncate(gallery.description, 3)}
        openGraph={openGraph}
      />
      <BlogJsonLd
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${gallery.slug}`}
        title={gallery.title}
        images={[
          `${imageURL(
            gallery?.featured_image?.provider_metadata?.public_id
          )}.jpg`,
        ]}
        datePublished={gallery.created_at}
        dateModified={gallery.updated_at}
        authorName="ChrisM"
        description={truncate(gallery.description, 3)}
      />
      <GalleryList>
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {gallery?.Images?.map((image) => (
            <GalleryImage
              src={imageURL(image.provider_metadata?.public_id, { w: 800 })}
            />
          ))}
        </Masonry>
      </GalleryList>
    </Layout>
  );
};

GalleryPage.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const data = await queryData(ctx, GALLERIES_QUERY_STRING, { slug: slug });

  if (data?.galleries?.length < 1) {
    ctx?.res?.writeHead(301, { Location: "/404" });
    ctx?.res?.end();
    return { gallery: {} };
  } else {
    return { gallery: data.galleries[0] };
  }
};

export default GalleryPage;
