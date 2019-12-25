import Router from 'next/router';
import React from 'react';
import Card from '../../../components/Card';
import { withLayout } from '../../../components/layout/withLayout';
import { Main } from '../../../styles/Generics';
import { roles, hasPermission } from '../../../utils/functions/Auth';
import { useQuery } from 'react-apollo';
import { iData } from '../../../components/articles/Types';
import { ARTICLES_QUERY } from '../../../utils/query';
import format from 'date-fns/format';
import { StyledButton } from '../../../components/Buttons';
import Link from 'next/link';

const title = `Admin`;
const description = `Admin Control Panel`;

export const adminAuth = {
  isSecure: true,
  permitted: {
    groups: ['Administrator']
  }
};

const AdminArticleIndexPage = () => {
  const { data, loading, error } = useQuery<iData>(ARTICLES_QUERY, {
    variables: {
      start: 0,
      limit: 100,
    }
  });

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    console.log(error);
    return <p>Error</p>
  }

  return (
    <Main>
      <Card heading="Edit Post">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Created</th>
              <th>Updated</th>
              <th>Published</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.articles.map(article => (
              <tr key={article.id}>
                <td><Link href={`/post/${article.slug}`} as={`/post/${article.slug}`}><a>{article.title}</a></Link></td>
                <td>{article.slug}</td>
                <td>{format(new Date(article.created_at), 'MM/dd/yyyy')}</td>
                <td>{format(new Date(article.updated_at), 'MM/dd/yyyy')}</td>
                <td>{article.published ? 'True' : 'False'}</td>
                <td><StyledButton><Link href={`/admin/articles/edit/${article.id}`} as={`/admin/articles/edit/${article.id}`} ><a>Edit</a></Link></StyledButton></td>
                <td><a>Delete</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Main >
  )
}

AdminArticleIndexPage.getInitialProps = async (ctx: any) => {
  if (hasPermission({ groups: [roles.admin] }, { useCookie: true })) {
    return true;
  }

  if (ctx.res) {
    ctx.res.writeHead(302, {
      location: '/',
    });
    ctx.res.end();
  } else {
    Router.push('/');
  }

  return true;
}

export default withLayout(AdminArticleIndexPage, {
  title, description, useSEO: false, path: `/ admin / articles`
});