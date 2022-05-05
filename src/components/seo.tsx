/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Meta = React.DetailedHTMLProps<
  React.MetaHTMLAttributes<HTMLMetaElement>,
  HTMLMetaElement
>[];

export interface SeoProps {
  description?: string;
  lang?: string;
  meta?: Meta;
  title?: string;
  url?: string;
  image?: string;
  author?: string;
  route?: string;
}

function Seo({
  description,
  lang,
  meta,
  title,
  url,
  image,
  author,
  route,
}: SeoProps): ReactElement {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            keywords
            description
            image
            siteUrl
          }
        }
      }
    `,
  );
  const additionalMeta = meta || [];
  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;
  const metaImage = image || site.siteMetadata.image;
  const metaUrl = url || site.siteMetadata.url;
  const metaAuthor = author || site.siteMetadata.social?.twitter;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={route ? `%s | ${route}` : `%s`}
      meta={[
        {
          charSet: 'utf-8',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: `theme-color`,
          content: `#000000`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ].concat(additionalMeta as any)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
  url: ``,
  img: ``,
  author: ``,
  route: ``,
};

export default Seo;
