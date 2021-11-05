import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';
import { useRouter } from 'next/router';

import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import localIpUrl from 'local-ip-url';
const { detect } = require('detect-browser');
// import RenderList from './RenderingData';
import Header from './Header';
import SliderResponsive from 'components/Slider/RecentViews';
import 'react-image-gallery/styles/css/image-gallery.css';

export function Product({ t }) {
  const router = useRouter();
  const browser = detect();
  const [product, setProduct] = useState([]);
  const [userAgent, setUserAgent] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  const [vinUrl, setVinUrl] = useState('http://185.157.81.192:8081/api/salesdata/vin/${product.VIN}');
  useEffect(() => {
    async function getProductByVin() {
      const { vin } = router.query;
      setUserAgent(`${browser.name} ${browser.version} ${browser.os}`);
      await axios
        .get(`http://185.157.81.192:8081/api/salesdata/vin/${vin}`)
        .then(res => {
          setProduct(res.data);
          // eslint-disable-next-line no-console
          console.log(product);
          setOriginalUrl(res.data.ImageURL01);
          setVinUrl(`http://185.157.81.192:8081/api/salesdata/vin/${vin}`);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
    getProductByVin();
    async function sendUserData() {
      const userView = {
        vin: router.query.vin,
        isDatabaseIn: true,
        ipAddress: localIpUrl('public', 'ipv4'),
        userAgent: userAgent,
      };
      axios
        .post('http://185.157.81.192:8081/api/requests/', {
          vin: userView.vin,
          isDatabaseIn: userView.isDatabaseIn,
          ipAddress: userView.ipAddress,
          userAgent: userView.userAgent,
        })
        .then(res => {
          // eslint-disable-next-line no-console
          console.log(res.data);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
    sendUserData();
  }, []);
  let images = [];
  images.push(
    {
      url: product.ImageURL01,
      title: product.Title,
      original: product.ImageURL01,
      thumbnail: product.ImageURL01,
    },
    {
      url: product.ImageURL02,
      title: product.Title,
      original: product.ImageURL02,
      thumbnail: product.ImageURL02,
    },
    {
      url: product.ImageURL03,
      title: product.Title,
      original: product.ImageURL03,
      thumbnail: product.ImageURL03,
    },
    {
      url: product.ImageURL04,
      title: product.Title,
      original: product.ImageURL04,
      thumbnail: product.ImageURL04,
    },
    {
      url: product.ImageURL05,
      title: product.Title,
      original: product.ImageURL05,
      thumbnail: product.ImageURL05,
    },
    {
      url: product.ImageURL06,
      title: product.Title,
      original: product.ImageURL06,
      thumbnail: product.ImageURL06,
    },
    {
      url: product.ImageURL07,
      title: product.Title,
      original: product.ImageURL07,
      thumbnail: product.ImageURL07,
    },
    {
      url: product.ImageURL08,
      title: product.Title,
      original: product.ImageURL08,
      thumbnail: product.ImageURL08,
    },
    {
      url: product.ImageURL09,
      title: product.Title,
      original: product.ImageURL09,
      thumbnail: product.ImageURL09,
    }
  );
  return (
    <Container id="product_content">
      <FeaturesRoot>
        <FeaturesListContainer>
          <FeaturesList>
            <PhotoBlock>
              <Title>
                {product.Title}
                {product.Color !== undefined ? product.Color + ' ' : ''}
                {product.Engine !== undefined ? product.Engine + ' ' : ''}
              </Title>
              <PhotoContainer>
                <ImageGallery items={images} originalWidth={'100%'} />
              </PhotoContainer>
            </PhotoBlock>
            <BasicInfoBlock>
              <Header
                title={
                  product.FinalBid !== undefined
                    ? t('phrases.bid') +
                      ': ' +
                      product.FinalBid +
                      (product.CurrencyCode !== undefined ? product.CurrencyCode : t('phrases.noMoreInfo'))
                    : t('phrases.noMoreInfo')
                }
                icon="https://autoastat.com/build/images/ico_auction.3822b338.svg"
              />
              <ParametersBlock>
                <ParametersContent>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.vin')}</ParametersCell>
                    <ParametersCell>{product.VIN !== undefined ? product.VIN : t('phrases.noMoreInfo')}</ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.lot')}</ParametersCell>
                    <ParametersCell>
                      {product.LotNumber !== undefined ? product.LotNumber : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.auction')}</ParametersCell>
                    <ParametersCell>
                      {product.YardName !== undefined ? product.YardName : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.year')}</ParametersCell>
                    <ParametersCell>
                      {product.Year !== undefined ? product.Year : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.seller')}</ParametersCell>
                    <ParametersCell>
                      {product.Seller !== undefined ? product.Seller : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.date')}</ParametersCell>
                    <ParametersCell>
                      {product.SaleDateMDCY !== undefined ? product.SaleDateMDCY : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.fuel')}</ParametersCell>
                    <ParametersCell>
                      {product.FuelType !== undefined ? product.FuelType : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.color')}</ParametersCell>
                    <ParametersCell>
                      {product.Color !== undefined ? product.Color : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.location')}</ParametersCell>
                    <ParametersCell>
                      {product.LocationCity !== undefined ? product.LocationCity : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.reatilValue')}</ParametersCell>
                    <ParametersCell>
                      {product.RepairCost !== undefined ? product.RepairCost : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.repairValue')}</ParametersCell>
                    <ParametersCell>
                      {product.RepairCost !== undefined ? product.RepairCost : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.primaryDamage')}</ParametersCell>
                    <ParametersCell>
                      {product.PrimaryDamage !== undefined ? product.PrimaryDamage : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.secondaryDamage')}</ParametersCell>
                    <ParametersCell>
                      {product.SecondaryDamage !== undefined ? product.SecondaryDamage : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.estRetailValue')}</ParametersCell>
                    <ParametersCell>{product.id !== undefined ? product.id : t('phrases.noMoreInfo')}</ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.bodyStyle')}</ParametersCell>
                    <ParametersCell>
                      {product.BodyStyle !== undefined ? product.BodyStyle : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.runsdrives')}</ParametersCell>
                    <ParametersCell>
                      {product.RunsDrives !== undefined ? product.RunsDrives : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.keys')}</ParametersCell>
                    <ParametersCell>
                      {product.HasKeysYesOrNo !== undefined ? product.HasKeysYesOrNo : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.transmission')}</ParametersCell>
                    <ParametersCell>
                      {product.Transmission !== undefined ? product.Transmission : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                  <ParametersRow>
                    <ParametersCell>{t('phrases.specialNote')}</ParametersCell>
                    <ParametersCell>
                      {product.SpecialNote !== undefined ? product.SpecialNote : t('phrases.noMoreInfo')}
                    </ParametersCell>
                  </ParametersRow>
                </ParametersContent>
                {/* <RenderList data={customData} /> */}
              </ParametersBlock>
            </BasicInfoBlock>
          </FeaturesList>
        </FeaturesListContainer>
      </FeaturesRoot>
      <SliderResponsive headline="Recent views" apilink={`http://185.157.81.192:8081/api/salesdata/vin/${vinUrl}`} />
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
  max-width: 1240px;
  @media (max-width: 1024px) {
    max-width: 100%;
    margin: unset;
  }
`;

const FeaturesRoot = styled('div')`
  display: flex;
`;

const FeaturesList = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  gap: 15px;
  @media (max-width: 768px) {
    flex-flow: column;
  }
`;

const FeaturesListContainer = styled('div')`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const FeatureBlock = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.02);
  padding: 15px;
  border-radius: 10px;
`;

const PhotoBlock = styled(FeatureBlock)`
  width: 60%;
  margin-right: 15px;
`;

const BasicInfoBlock = styled(FeatureBlock)`
  width: 40%;
  margin-right: 0px;
`;

const Title = styled('h3')`
  font-size: 36px;
  font-family: 'Gilroy Bold';
  font-weight: 600;
  margin: 0;
  width: 100%;
  text-align: left;
  padding: 1.5rem 0;
`;

const PhotoContainer = styled('div')`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
`;

const ParametersBlock = styled('div')``;

const ParametersContent = styled('div')``;

const ParametersRow = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  padding: 10px;
`;

const ParametersCell = styled('div')`
  &:nth-of-type(1) {
    width: 30%;
    color: gray;
  }
  &:nth-of-type(2) {
    width: 70%;
  }
`;

export default withTranslation('common')(Product);
