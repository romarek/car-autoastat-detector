/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { withTranslation } from 'utils/with-i18next';

import VisibilitySensor from 'react-visibility-sensor';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// import CardSwipe from './CardSwipe';

export function Features({ t }) {
  return (
    <Container id="features">
      <SectionHeadline>{t('features.title')}</SectionHeadline>
      <FeaturesRoot>
        <FeaturesListContainer>
          <FeaturesList>
            {[...Array(3)].map(index => (
              <FeatureItem key={index}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 90 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={{
                          root: {
                            width: '100%',
                          },
                          path: {
                            stroke: `rgba(198, 40, 40, ${percentage / 100})`,
                            strokeLinecap: 'butt',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                          },
                          trail: {
                            stroke: '#d6d6d6',
                            strokeLinecap: 'butt',
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                          },
                          // Customize the text
                          text: {
                            fill: '#000',
                            fontSize: '16px',
                          },
                          background: {
                            fill: '#3e98c7',
                          },
                        }}
                      />
                    );
                  }}
                </VisibilitySensor>

                <Title>Find your car</Title>

                <Content>{t('features.seo')}</Content>
              </FeatureItem>
            ))}
          </FeaturesList>
        </FeaturesListContainer>
      </FeaturesRoot>
      {/* <CardSwipe /> */}
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
  width: 100%;
`;

const FeaturesList = styled('div')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SectionHeadline = styled('h1')`
  text-align: center;
`;

const Title = styled('h3')`
  font-size: 20px;
  font-family: 'Gilroy Bold';
  font-weight: 600;
  text-align: center;
  margin: 0;
  padding-top: 15px;
`;

const Content = styled('p')`
  line-height: 1.65;
  font-weight: 400;
`;

export default withTranslation('features')(Features);
