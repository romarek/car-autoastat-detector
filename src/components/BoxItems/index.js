/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import axios from 'axios';
import { css } from '@emotion/react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import ActionButton from './ActionButton';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function BoxItemsResponsive(props) {
  const [carResults, setCarResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8081/api/salesdata?page=1')
      .then(res => {
        setCarResults(res.data.salesdata);
        setLoading(false);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);
  return (
    <SliderContainer>
      <h2> {props.headline} </h2>
      {loading ? (
        <ScaleLoader loading={loading} css={override} size={150} />
      ) : (
        <BoxItems>
          {carResults.map(car => (
            <BoilerplateImage key={car.VIN}>
              <ContainerItems>
                <ImageItem src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <DataContainer>
                  <TitleItem>
                    {car.Make} {car.ModelDetail} {car.BodyStyle} {car.Color}
                  </TitleItem>
                  <ContentItem>VIN: {car.VIN}</ContentItem>
                  <ContentItem>Date: {car.LastUpdatedTime} </ContentItem>
                </DataContainer>
                <ButtonsContainer>
                  <ActionButton label="Add to favourite" case="favourite" buttonColor="#535353" link="/" />
                  <ActionButton label="Read more" case="more" buttonColor="#000" link={`/car-model/${car.VIN}`} />
                </ButtonsContainer>
              </ContainerItems>
            </BoilerplateImage>
          ))}
        </BoxItems>
      )}
    </SliderContainer>
  );
}

BoxItemsResponsive.propTypes = {
  headline: PropTypes.string,
};

const SliderContainer = styled('div')`
  max-width: 1024px;
  padding: 15px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BoilerplateImage = styled('div')`
  width: 100%;
  aspect-ratio: 16 / 12;
  border-radius: 10px;
`;

const ContainerItems = styled('div')`
  padding-right: 15px;
`;

const BoxItems = styled('div')`
  display: flex;
  flex-flow: row wrap;
`;

const ImageItem = styled('img')`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 10px;
`;

const TitleItem = styled('h3')`
  margin: 0;
  padding: 0;
`;

const ContentItem = styled('h5')`
  color: gray;
  margin: 0;
  padding: 0;
`;

const DataContainer = styled('div')`
  margin-top: 15px;
`;

const ButtonsContainer = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  width: 100%;
  margin-top: 15px;
`;
