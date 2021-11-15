/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';
import Slider from 'react-slick';
import { css } from '@emotion/react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import ArrowLeftIcon from '../_Icons/ArrowLeft';
import ArrowRightIcon from '../_Icons/ArrowRight';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function SliderResponsive(props) {
  const router = useRouter();
  const [carResults, setCarResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const { vin } = router.query;
    axios
      // eslint-disable-next-line react/prop-types
      .get(`http://localhost:8081/api/salesdata/vin/WDDGF81X08F085363`)
      .then(res => {
        setCarResults(res.data);
        setLoading(false);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    draggable: true,
    touchMove: true,
    touchTreshold: 1,
    lazyLoad: 'progressive',
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    nextArrow: <ArrowRightIcon />,
    prevArrow: <ArrowLeftIcon />,
    appendDots: dots => {
      return (
        <DotsBlock>
          <DotsList> {dots} </DotsList>
        </DotsBlock>
      );
    },
    customPaging: i => <TouchableDot>{i + 1}</TouchableDot>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SliderContainer>
      <h2> {props.headline} </h2>
      {loading ? (
        <ScaleLoader loading={loading} css={override} size={150} />
      ) : (
        <Slider {...settings} style={{ maxWidth: '100%' }}>
          {carResults.map(car => (
            <BoilerplateImage key={car.VIN}>
              <ContainerItems>
                <Link href={`/car-model/${car.VIN}`} style={{ cursor: 'pointer' }}>
                  <ImageItem
                    src={`http://localhost/storage/${car.Make}-${car.ModelGroup}-${car.Year}-${car.Color}-${car.VIN}_0.jpg`}
                  />
                </Link>
                <DataContainer>
                  <Link href={`/car-model/${car.VIN}`} style={{ cursor: 'pointer' }}>
                    <TitleItem>{car.Title}</TitleItem>
                  </Link>
                  <ContentItem>VIN: {car.VIN}</ContentItem>
                  <ContentItem>Date: {car.SaleDateMDCY} </ContentItem>
                </DataContainer>
              </ContainerItems>
            </BoilerplateImage>
          ))}
        </Slider>
      )}
    </SliderContainer>
  );
}

SliderResponsive.propTypes = {
  headline: PropTypes.string,
  props: PropTypes.object,
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

const ImageItem = styled('img')`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;

const TitleItem = styled('h3')`
  margin: 0;
  padding: 0;
  cursor: pointer;
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

const DotsBlock = styled('div')``;

const DotsList = styled('ul')``;

const TouchableDot = styled('div')`
  background-color: rgba(198, 40, 40, 1);
  color: white;
  font-family: 'Gilroy Bold';
  font-size: 0px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  width: 5px;
  aspect-ratio: 1;
  border-radius: 50%;
  &:hover {
    background-color: rgba(198, 40, 40, 0.5);
    transition: 0.25s ease-out;
  }
`;
