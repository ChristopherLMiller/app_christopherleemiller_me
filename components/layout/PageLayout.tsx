import { NextSeo } from "next-seo";
import { Footer } from "components/layout/Footer";
import Header from "components/layout/Header";
import { SITE_DEFAULT_IMAGE } from "config";
import { imageURL } from "utils/functions/imageURL";
import styled from "styled-components";
import { FunctionComponent } from "react";
import { Main } from "styles/Generics";

const InnerPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
`;

interface iLayout {
  meta: {
    title: string;
    description: string;
    useSEO: boolean;
    path?: string;
    image?: string;
  };
}

const Layout: FunctionComponent<iLayout> = ({ meta, children }) => (
  <InnerPage>
    <Main>
      <Header title={meta.title} description={meta.description} />
      {meta.useSEO && (
        <NextSeo
          title={meta.title}
          canonical={
            meta.path ? `${process.env.SITE_URL}${meta.path}` : undefined
          }
          description={meta.description}
          openGraph={{
            title: meta.title,
            description: meta.description,
            type: "website",
            images: [
              {
                alt: meta.title,
                url: meta.image
                  ? `${imageURL(meta.image)}.jpg`
                  : SITE_DEFAULT_IMAGE,
              },
            ],
            url: `${process.env.SITE_URL}${meta.path}`,
          }}
        />
      )}

      {children}
    </Main>
    <Footer />
  </InnerPage>
);

export { Layout };
