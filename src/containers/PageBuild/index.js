import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import { withTranslation } from 'utils/with-i18next';

export function PageInBuild({ t }) {
  return <Container id="PageInBuild">{t('pageBuild')}</Container>;
}

PageInBuild.propTypes = {
  t: PropTypes.func,
};

const Container = styled('div')`
  width: 100%;
  margin: 0 auto;
  padding: 6rem 1rem;
  max-width: 1024px;
`;

export default withTranslation('common')(PageInBuild);
