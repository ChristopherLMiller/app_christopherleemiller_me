import { NextSeo } from 'next-seo';
import { Footer } from './Footer';
import Header from './Header';
import { SITE_DEFAULT_IMAGE } from '../../config';
import { ImageURL } from '../../utils/functions/imageURL';
import { Profile } from './Profile';
import styled from 'styled-components'
import { FunctionComponent } from 'react';
import { Main } from '../../styles/Generics';

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
    }
}

const Layout:FunctionComponent<iLayout> = ({meta, children}) => (
    <InnerPage>
        
          <Profile />
          <Header title={meta.title} description={meta.description} />
          {meta.useSEO && (
            <NextSeo
              title={meta.title}
              canonical={meta.path ? `${process.env.SITE_URL}${meta.path}` : undefined}
              description={meta.description}
              openGraph={{
                title: meta.title,
                description: meta.description,
                type: 'website',
                images: [
                  {
                    alt: meta.title,
                    url: meta.image ? `${ImageURL(meta.image)}.jpg` : SITE_DEFAULT_IMAGE,
                  },
                ],
                url: `${process.env.SITE_URL}${meta.path}`,
              }}
            />
          )}
          <Main>
          {children}
          </Main>
          <Footer />
          
        </InnerPage>
);

export { Layout };