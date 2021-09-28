import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import styled from '@emotion/styled';

export default function SliderResponsive(props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
    <div style={{ maxWidth: 1024, padding: 15, margin: '0 auto' }}>
      <h2> {props.headline} </h2>
      <Slider {...settings}>
        <BoilerplateImage>
          <ImageItem src="https://google.com" />
          <TitleItem />
          <ContentItem />
          <ButtonsContainer>
            <AddToFavourite />
            <ReadMore />
          </ButtonsContainer>
        </BoilerplateImage>
        <BoilerplateImage>
          <h3>2</h3>
        </BoilerplateImage>
        <BoilerplateImage>
          <h3>3</h3>
        </BoilerplateImage>
        <BoilerplateImage>
          <h3>4</h3>
        </BoilerplateImage>
        <BoilerplateImage>
          <h3>5</h3>
        </BoilerplateImage>
        <BoilerplateImage>
          <h3>6</h3>
        </BoilerplateImage>
        <BoilerplateImage>
          <h3>7</h3>
        </BoilerplateImage>
        <BoilerplateImage>
          <h3>8</h3>
        </BoilerplateImage>
      </Slider>
    </div>
  );
}

const BoilerplateImage = styled('div')`
  background-color: #f2f2f2;
  width: 100%;
  aspect-ratio: 16 / 12;
  margin-right: 15px;
  border-radius: 10px;
`;

const SampleNextArrow = styled('img')`
  background-image: url('/static/images/arrow-right.svg');
  border: 0;
`;

const SamplePrevArrow = styled('img')`
  background-image: url('/static/images/arrow-left.svg');
  border: 0;
`;

const ImageItem = styled('img')``;

const TitleItem = styled('h3')`
  margin: 0;
  padding: 0;
`;

const ContentItem = styled('h5')`
  margin: 0;
  padding: 0;
`;

const ButtonsContainer = styled('div')`
  display: flex;
  flex-flow: row nowrap;
`;

const AddToFavourite = styled('button')``;

const ReadMore = styled('button')``;
