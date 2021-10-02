/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Slider from 'react-slick';

import ActionButton from './ActionButton';
import ArrowLeftIcon from '../_Icons/ArrowLeft';
import ArrowRightIcon from '../_Icons/ArrowRight';

export default function SliderResponsive(props) {
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
      <Slider {...settings} style={{ maxWidth: '100%' }}>
        {[...Array(8)].map(index => (
          <BoilerplateImage key={index}>
            <ContainerItems>
              <ImageItem src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <DataContainer>
                <TitleItem>Tesla Model 3 Long Range/Performance 2019 Gray DUAL</TitleItem>
                <ContentItem>VIN: 5YJ3E1EB6KF209908</ContentItem>
              </DataContainer>
              <ButtonsContainer>
                <ActionButton label="Add to favourite" case="favourite" buttonColor="#c62828" />
                <ActionButton label="Read more" case="more" buttonColor="#000" />
              </ButtonsContainer>
            </ContainerItems>
          </BoilerplateImage>
        ))}
      </Slider>
    </SliderContainer>
  );
}

SliderResponsive.propTypes = {
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

const DotsBlock = styled('div')``;

const DotsList = styled('ul')``;

const TouchableDot = styled('div')`
  background-color: rgba(198, 40, 40, 1);
  color: white;
  font-family: 'Gilroy Bold';
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 20px;
  aspect-ratio: 1;
  border-radius: 10px;
  &:hover {
    background-color: rgba(198, 40, 40, 0.5);
    transition: 0.25s ease-out;
  }
`;
