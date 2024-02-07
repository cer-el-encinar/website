import React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';

import { Layout } from '../../components/Layout';
import { News } from '../../declarations';
import { Contained, Hero } from '../../components';

type Data = {
  mdx: News;
};

const NoticiaPage: React.FC<PageProps> = ({ data }) => {
  const { body, frontmatter } = (data as Data).mdx;
  return (
    <Layout>
      <Hero>
        <Hero.Title>{frontmatter.title}</Hero.Title>
      </Hero>
      <Contained>{body}</Contained>
    </Layout>
  );
};

export default NoticiaPage;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        slug
        date
        cover {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 80)
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = ({ data }) => (
  <>
    <html lang="es" />
    <title>{(data as Data).mdx.frontmatter.title}</title>
    <meta name="description" content="CER El Encinar" />
  </>
);
