import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

function SEO({pageTitle}) {
  const baseTitle = 'Rainy April Day';
  const title = pageTitle ? `${baseTitle} - ${pageTitle}` : baseTitle;

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default SEO;

SEO.propTypes = {
  pageTitle: PropTypes.string,
};
