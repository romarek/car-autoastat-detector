import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import { withTranslation } from 'utils/with-i18next';

export function Features({ t }) {
  return (
    <Container id="features">
      <FeaturesRoot>
        <FeaturesListContainer>
          <FeaturesList>
            <FeatureItem>
              <Title>Find your car</Title>

              <Content>{t('features.seo')}</Content>
            </FeatureItem>

            <FeatureItem>
              <Title>Check your car</Title>

              <Content>{t('features.reduxSaga')}</Content>
            </FeatureItem>

            <FeatureItem>
              <Title>Buy extra plan</Title>

              <Content>{t('features.nextI18next')}</Content>
            </FeatureItem>
          </FeaturesList>
        </FeaturesListContainer>
      </FeaturesRoot>
    </Container>
  );
}

Features.propTypes = {
  t: PropTypes.func,
};

const Container = styled('div')`
  width: 100%;
  margin: 0 auto;
  padding: 6rem 1rem;
  max-width: 1024px;
`;

const FeaturesRoot = styled('div')`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 27.136px;
`;

const FeaturesList = styled('div')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const FeaturesListContainer = styled('div')`
  grid-column: 1 / span 12;
`;

const FeatureItem = styled('div')`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 72px;
  background-color: #f2f2f2;
  padding: 15px;
  border-radius: 10px;
`;

const Title = styled('h3')`
  font-size: 20px;
  font-family: 'Metropolis';
  font-weight: 600;
  margin: 0;
`;

const Content = styled('p')`
  line-height: 1.65;
  font-weight: 400;
`;

export default withTranslation('features')(Features);
