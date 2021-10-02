import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import { withTranslation } from 'utils/with-i18next';

export function Content500({ t }) {
  return <Container id="error500">{t('500PageHeader')}</Container>;
}

Content500.propTypes = {
  t: PropTypes.func,
};

const Container = styled('div')`
  width: 100%;
  margin: 0 auto;
  padding: 6rem 1rem;
  max-width: 1024px;
`;

export default withTranslation('common')(Content500);
