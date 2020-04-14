import ReactMarkdown from 'react-markdown';
import { useQuery } from 'react-apollo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Card from '../../components/Card';
import { FullArticle } from '../../components/articles/Full';
import { ARTICLES_QUERY } from '../../utils/query';
import { iData } from '../../components/articles/Types'
import { NextPage, GetServerSideProps } from 'next';
import { Layout } from '../../components/layout/PageLayout';

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;


interface iPostPage {
  serverProps: object;
}

const PostPage: NextPage<iPostPage> = ({serverProps}) => {
  const router = useRouter();
  const { loading, error, data } = useQuery<iData>(ARTICLES_QUERY, {
    variables: {
      where: {
        slug_contains: router.query.slug,
      },
    },
  });

  console.log(serverProps);

  if (loading)
    return (
      <Layout meta={{title, description, useSEO: false}}>
        <p>Loading...</p>
      </Layout>
    );
  if (error) {
    console.error(`Fetch Error: ${error.message}`);

    return (
      <Layout meta={{title, description, useSEO: false}}>
        <Card heading="Unable to load data">
          <h2>{error.message}</h2>
          <p>
            Sorry. Something happened and we can't seem to load data right now.
            Possibly you're offline and if not please let us know.
          </p>
        </Card>
      </Layout>
    );
  }

  if (data !== undefined) {
    if (data.articles.length >= 1) {
      return (
        <Layout meta={{title, description, useSEO: false}}>
          {data !== undefined && data.articles.map(article => (
              <FullArticle article={article}>
                <ReactMarkdown source={article.content} escapeHtml={false} />
              </FullArticle>
            ))}
        </Layout>
      );
    }
  }

  return (
    <Layout meta={{title: title, description: description, useSEO: false}}>
        <Card heading="404 Article Not Found">
          <p>
            Sorry. We seem to have lost this article somewhere in the interwebs. I
            don't know what happened to it! Some gremlin somewhere must have
            snatched it on me, that or I just never wrote this one to begin with.
            Hmmmmm.
          </p>
          <hr />
          <Link href="/articles">
            <a>View All Articles</a>
          </Link>
        </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async context =>  {
  const { slug } = context.query;

  const response = await fetch(`https://strapi.christopherleemiller.me/articles?slug=${slug}`);
  const data = await response.json();
  return { props: { serverProps: data }}

}

export default PostPage;
