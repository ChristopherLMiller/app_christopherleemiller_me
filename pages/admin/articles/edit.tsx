import Router, { useRouter } from 'next/router';
import React from 'react';
import Card from '../../../components/Card';
import { withLayout } from '../../../components/layout/withLayout';
import { Main } from '../../../styles/Generics';
import { roles, hasPermission } from '../../../utils/functions/Auth';
import { Formik, Form, Field } from 'formik';
import { Label } from '../../../components/inputs/Label';
import { FieldSet } from '../../../components/inputs/FieldSet';
import { useQuery } from 'react-apollo';
import { iData } from '../../../components/articles/Types';
import { ARTICLES_QUERY } from '../../../utils/query';
import { Button } from '../../../components/inputs/Button';

const title = `Admin`;
const description = `Admin Control Panel`;

export const adminAuth = {
  isSecure: true,
  permitted: {
    groups: ['Administrator']
  }
};

const AdminArticleEditPage = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery<iData>(ARTICLES_QUERY, {
    variables: {
      where: {
        id: router.query.id
      }
    }
  });

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    console.log(error);
    return <p>Error</p>;
  }

  return (
    <Main>
      {data?.articles.map(article => (
        <Card heading="Edit Post">
          <Formik
            initialValues={{}}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <FieldSet>
                  <Label htmlFor="title">Title: </Label>
                  <Field type="text" name="title" value={article.title} />
                </FieldSet>
                <FieldSet>
                  <Label htmlFor="slug">Slug: </Label>
                  <Field type="text" name="slug" value={article.slug} />
                </FieldSet>
                <FieldSet>
                  <Label htmlFor="seo_title">SEO Title: </Label>
                  <Field type="text" name="seo_title" value={article.seo_title} />
                </FieldSet>
                <FieldSet>
                  <Label htmlFor="content">Content: </Label>
                  <Field component="textarea" name="content" rows="20" value={article.content} />
                </FieldSet>
                <Button>{isSubmitting}</Button>
              </Form>
            )}

          </Formik>

        </Card>))}
    </Main >
  );

}

AdminArticleEditPage.getInitialProps = async (ctx: any) => {
  if (hasPermission({ groups: [roles.admin] }, ctx)) {
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

export default withLayout(AdminArticleEditPage, {
  title, description, useSEO: false, path: `/admin/article/edit`
});