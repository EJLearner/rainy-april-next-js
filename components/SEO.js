import PropTypes from 'prop-types';
import React from 'react';

function SEO({pageTitle}) {
  const baseTitle = 'Rainy April Day';
  const title = pageTitle ? `${baseTitle} - ${pageTitle}` : baseTitle;

  return <title>{title}</title>;
}

export default SEO;

SEO.propTypes = {
  pageTitle: PropTypes.string
};
