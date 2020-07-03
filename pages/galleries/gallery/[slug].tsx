import { Layout } from "components/layout/PageLayout";
import { NextPage } from "next";
import { iGallery, GALLERIES_QUERY_STRING } from "utils/queries/galleries";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import { imageURL, truncate } from "utils/functions";
import { GRAPHQL_ENDPOINT, SEPARATOR } from "config";
import { parseCookies } from "nookies";
import { NextSeo, BlogJsonLd } from "next-seo";

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

  // define SEO properties
  const openGraph = {
    title: `Post${SEPARATOR}${gallery.title}`,
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
        title={`Post${SEPARATOR}${gallery.title}`}
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
            <GalleryImage src={imageURL(image.provider_metadata?.public_id)} />
          ))}
        </Masonry>
      </GalleryList>
    </Layout>
  );
};

GalleryPage.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const cookies = parseCookies(ctx);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GALLERIES_QUERY_STRING,
      variables: { where: { slug: slug } },
    }),
  };

  // inject the bearer token if its present
  if (cookies?.token) {
    // @ts-ignore
    options.headers["Authorization"] = `Bearer ${cookies.token}`;
  }

  const response = await fetch(GRAPHQL_ENDPOINT, options);
  const data = await response.json();

  if (data?.data?.galleries?.length < 1) {
    ctx?.res?.writeHead(301, { Location: "/404" });
    ctx?.res?.end();
    return { gallery: {} };
  } else {
    return { gallery: data.data.galleries[0] };
  }
};

export default GalleryPage;
