import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import customData from './customdata.json';
import RenderList from './RenderingData';
import Header from './Header';

export function Product({ t }) {
  const [count, setCount] = useState(0);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  function imageClick(e) {
    e.preventDefault();
    setCount(1);
    setLightboxVisible(true);
    console.log(`${count} ${lightboxVisible}`);
  }
  function galleryClose(e) {
    e.preventDefault();
    setLightboxVisible(false);
  }
  const images = [
    {
      url:
        'https://s.autoastat.com/images/copart/2021/9/27/5YJ3E1EB4KF408262/1-6625a6810395380bf127b39bf9e2b6b8-lot_thumb_watermark.jpg',
      title: 'image title 1',
    },
    {
      url:
        'https://s.autoastat.com/images/copart/2021/9/27/5YJ3E1EB4KF408262/2-d9d27dc81bc1423e8b7d15697ccb4863-lot_thumb_watermark.jpg',
      title: 'image title 2',
    },
  ];
  return (
    <Container id="product_content">
      <FeaturesRoot>
        <FeaturesListContainer>
          <FeaturesList>
            <PhotoBlock>
              <PhotoContainer>
                <LightboxContainer style={{ display: lightboxVisible === false ? 'none' : 'block' }}>
                  <Lightbox images={images} startIndex={0} onClose={galleryClose} />
                </LightboxContainer>
                <PhotoItem
                  src={
                    'https://s.autoastat.com/images/copart/2021/9/27/5YJ3E1EB4KF408262/1-6625a6810395380bf127b39bf9e2b6b8-lot_thumb_watermark.jpg'
                  }
                  alt=""
                  onClick={imageClick}
                />
                <PhotoItem
                  src={
                    'https://s.autoastat.com/images/copart/2021/9/27/5YJ3E1EB4KF408262/2-d9d27dc81bc1423e8b7d15697ccb4863-lot_thumb_watermark.jpg'
                  }
                  alt=""
                  onClick={imageClick}
                />
                <PhotoItem
                  src={
                    'https://s.autoastat.com/images/copart/2021/9/27/5YJ3E1EB4KF408262/3-5a6f9a2c53f3c16233e9077078c39cf4-lot_thumb_watermark.jpg'
                  }
                  alt=""
                  onClick={imageClick}
                />
                <PhotoItem
                  src={
                    'https://s.autoastat.com/images/copart/2021/9/27/5YJ3E1EB4KF408262/4-fae31871677b1bfd4e312a0de5121a7c-lot_thumb_watermark.jpg'
                  }
                  alt=""
                  onClick={imageClick}
                />
              </PhotoContainer>
            </PhotoBlock>
            <BasicInfoBlock>
              <Header title={t('category2')} icon="https://autoastat.com/build/images/ico_auction.3822b338.svg" />
              <ParametersBlock>
                <ParametersContent />
                <RenderList data={customData} />
              </ParametersBlock>
            </BasicInfoBlock>
          </FeaturesList>
          <FeaturesList>
            <FeatureItem>
              <Header title={t('category2')} icon="https://autoastat.com/build/images/ico_auction.3822b338.svg" />
              <Content>{t('features.seo')}</Content>
            </FeatureItem>

            <FeatureItem>
              <Header title={t('category2')} icon="https://autoastat.com/build/images/ico_auction.3822b338.svg" />
              <Content>{t('features.reduxSaga')}</Content>
            </FeatureItem>

            <FeatureItem>
              <Header title={t('category2')} icon="https://autoastat.com/build/images/ico_auction.3822b338.svg" />
              <Content>{t('features.nextI18next')}</Content>
            </FeatureItem>
          </FeaturesList>
        </FeaturesListContainer>
      </FeaturesRoot>
    </Container>
  );
}

Product.propTypes = {
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
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const FeaturesListContainer = styled('div')`
  grid-column: 1 / span 12;
`;

const FeatureBlock = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 72px;
  background-color: #f2f2f2;
  padding: 15px;
  border-radius: 10px;
`;

const FeatureItem = styled(FeatureBlock)`
  width: 33.3333%;
  margin-right: 15px;
  &:last-of-type {
    margin-right: 0px;
  }
`;

const PhotoBlock = styled(FeatureBlock)`
  width: 50%;
`;

const BasicInfoBlock = styled(FeatureBlock)`
  width: 50%;
  margin-right: 0px;
`;

const Title = styled('h3')`
  font-size: 20px;
  font-family: 'Gilroy Bold';
  font-weight: 600;
  margin: 0;
`;

const Content = styled('p')`
  line-height: 1.65;
  font-weight: 400;
`;

const LightboxContainer = styled('div')``;

const PhotoContainer = styled('div')`
  display: flex;
  flex-flow: row wrap;
`;

const PhotoItem = styled('img')`
  width: calc(50% - 10px);
  aspect-ratio: 1 / 1;
  object-fit: cover;
  cursor: pointer;
  border-radius: 5px;
  pointer-events: all;
  &:nth-of-type(even) {
    margin-bottom: 10px;
  }
  &:nth-of-type(odd) {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

const ParametersBlock = styled('div')``;

const ParametersContent = styled('div')``;

export default withTranslation('common')(Product);
