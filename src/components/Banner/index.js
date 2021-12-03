/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import styled from '@emotion/styled';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

import { withTranslation } from 'utils/with-i18next';
import Collapsible from 'react-collapsible';
const animatedComponents = makeAnimated();
import { css } from '@emotion/react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import ArrowLeftIcon from '../_Icons/ArrowLeft';
import ArrowRightIcon from '../_Icons/ArrowRight';

export function Banner({ t }) {
  const [numberVin, setNumberVin] = useState('');
  const [type, setType] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [yearBegin, setYearBegin] = useState('');
  const [yearEnd, setYearEnd] = useState('');
  const [modelOptions, setModelOptions] = useState([]);
  const [makeOptions, setMakeOptions] = useState([]);
  const [yearOptions, setYearOptions] = useState([]);
  const [modelOptionsSelected, setModelOptionsSelected] = useState([]);
  const [makeOptionsSelected, setMakeOptionsSelected] = useState([]);
  const [yearOptionsSelected, setYearOptionsSelected] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    // alert(`Pokaż mi VIN: ${numberVin} i typ: ${type}`);
  }
  const [carSearchResults, setCarSearchResults] = useState([]);
  const [carResultsCount, setCarResultsCount] = useState('PENDING');
  const [loading, setLoading] = useState(false);
  const getResultsFromDb = e => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(
        `https://panel.bidspace.info/api/salesdata/params?type=${type}&make=${make}&model=${model}&yearBegin=${yearBegin}&yearEnd=${yearEnd}`
      )
      .then(res => {
        setCarSearchResults(res.data.salesdata);
        setCarResultsCount(res.data.totalItems);
        setLoading(false);
      });
  };
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const customStyles = {
    menuPortal: provided => ({ ...provided, zIndex: 9999 }),
    menu: provided => ({ ...provided, zIndex: 9999 }),
  };
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
  useEffect(() => {
    axios.get('https://panel.bidspace.info/api/salesdata/queries').then(res => {
      const data = res.data.totalItems;
      setMakeOptions(
        data.map(d => ({
          value: d.Make,
          label: d.Make,
        }))
      );
      setModelOptions(
        data.map(d => ({
          value: d.ModelGroup,
          label: d.ModelGroup,
        }))
      );
      setYearOptions(
        data.map(d => ({
          value: d.Year,
          label: d.Year,
        }))
      );
      const uniqueValuesMakeOptions = new Set();
      const uniqueValuesModelOptions = new Set();
      const uniqueValuesYearOptions = new Set();
      console.log(`Show me plis: ${JSON.stringify(makeOptions)}`);
      const filteredMake = makeOptions.filter(obj => {
        const isPresentInSetMake = uniqueValuesMakeOptions.has(obj.value);
        uniqueValuesMakeOptions.add(obj.value);
        return !isPresentInSetMake;
      });
      const filteredModel = modelOptions.filter(obj => {
        const isPresentInSetModel = uniqueValuesModelOptions.has(obj.value);
        uniqueValuesModelOptions.add(obj.value);
        return !isPresentInSetModel;
      });
      const filteredYear = yearOptions.filter(obj => {
        const isPresentInSetYear = uniqueValuesYearOptions.has(obj.value);
        uniqueValuesYearOptions.add(obj.value);
        return !isPresentInSetYear;
      });
      console.log(`Show me: ${JSON.stringify(filteredMake)}`);
      setMakeOptionsSelected(filteredMake);
      setModelOptionsSelected(filteredModel);
      setYearOptionsSelected(filteredYear);
      setMake('');
      setModel('');
      setYearBegin('');
      setYearEnd('');
    });
  }, []);
  function handleChangeMake(e) {
    setMake(e.value);
  }
  function handleChangeModel(e) {
    setModel(e.value);
  }
  function handleChangeYearBegin(e) {
    setYearBegin(e.value);
  }
  function handleChangeYearEnd(e) {
    setYearEnd(e.value);
  }
  return (
    <BannerRoot>
      <BackgroundLandscape />
      <Container>
        <Title>{t('title')}</Title>
        <SubTitle>{t('subTitle')}</SubTitle>
        <SendRequestForm onSubmit={handleSubmit}>
          <SearchRow>
            <VinInput
              onChange={e => setNumberVin(e.target.value)}
              pattern="^(?=.*[0-9])(?=.*[A-z])[0-9A-z-]{17}$"
              placeholder="VIN number"
            />
            <SearchButton type="submit">
              {numberVin.length > 0 ? (
                <Link href={`/car-model/${numberVin}`}>{t('searchByVin')}</Link>
              ) : (
                <button type="button" onClick={getResultsFromDb}>
                  {t('searchByParams')}
                </button>
              )}
            </SearchButton>
          </SearchRow>
          <Collapsible
            lazyRender
            open={true}
            trigger={<Image src="/static/images/chevron-down.svg" width="20" height="20" alt={t('expandParams')} />}
            triggerWhenOpen={
              <Image src="/static/images/chevron-up.svg" width="20" height="20" alt={t('compressParams')} />
            }
            triggerStyle={{ cursor: 'pointer', userSelect: 'none' }}
            easing="ease-in-out">
            <SearchRow>
              <SelectBlockCount4>
                <FormControl>
                  <Label>{t('typeLabel2')}</Label>
                  <Select
                    inputId={'make'}
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={makeOptionsSelected}
                    onChange={handleChangeMake.bind(this)}
                    placeholder={t('typeLabel2')}
                    menuPortalTarget={document.body}
                    menuPosition={'fixed'}
                    styles={customStyles}
                  />
                </FormControl>
                <FormControl>
                  <Label>{t('typeLabel3')}</Label>
                  <Select
                    inputId={'model'}
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={modelOptionsSelected}
                    onChange={handleChangeModel.bind(this)}
                    placeholder={t('typeLabel3')}
                    menuPortalTarget={document.body}
                    menuPosition={'fixed'}
                    styles={customStyles}
                  />
                </FormControl>
                <DivideBlock>
                  <FormControl>
                    <Label>{t('typeLabel4')}</Label>
                    <Select
                      inputId={'year_begin'}
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      options={yearOptionsSelected}
                      onChange={handleChangeYearBegin.bind(this)}
                      placeholder={t('typeLabel4')}
                      menuPortalTarget={document.body}
                      menuPosition={'fixed'}
                      styles={customStyles}
                    />
                  </FormControl>
                  <FormControl>
                    <Label>{t('typeLabel5')}</Label>
                    <Select
                      inputId={'year_end'}
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      options={yearOptionsSelected}
                      onChange={handleChangeYearEnd.bind(this)}
                      placeholder={t('typeLabel5')}
                      menuPortalTarget={document.body}
                      menuPosition={'fixed'}
                      styles={customStyles}
                    />
                  </FormControl>
                </DivideBlock>
              </SelectBlockCount4>
            </SearchRow>
          </Collapsible>
        </SendRequestForm>
      </Container>
      {loading ? (
        <ScaleLoader loading={loading} css={override} size={150} />
      ) : (
        <SliderContainer>
          {carResultsCount !== 'PENDING' && (
            <div>
              {carResultsCount === 0 ? (
                <BoxResultFailed>No one items in database!</BoxResultFailed>
              ) : (
                <BoxResultSuccessed>Found {carResultsCount} records in database.</BoxResultSuccessed>
              )}
              <SearchResultsContainer>
                {carSearchResults.map(car => (
                  <SearchResultsItem key={car.VIN}>
                    <BoilerplateImage>
                      <ContainerItems>
                        <Link href={`/car-model/${car.VIN}`} style={{ cursor: 'pointer' }}>
                          <ImageItem
                            src={`https://storage.bidspace.info/${car.YardName.trim().toLowerCase()}/${car.Make.toLowerCase()}/${car.Make.toLowerCase()}-${car.ModelGroup.toLowerCase()}-${car.Color.toLowerCase()}-${car.Year.toLowerCase()}-${car.VIN.toLowerCase()}_0.jpg`}
                          />
                        </Link>
                        <DataContainer>
                          <Link href={`/car-model/${car.VIN}`} style={{ cursor: 'pointer' }}>
                            <TitleItem>{car.Title}</TitleItem>
                          </Link>
                          <ContentItem>VIN: {car.VIN}</ContentItem>
                          <ContentItem>Date: {car.LastUpdatedTime} </ContentItem>
                        </DataContainer>
                      </ContainerItems>
                    </BoilerplateImage>
                  </SearchResultsItem>
                ))}
              </SearchResultsContainer>
            </div>
          )}
        </SliderContainer>
      )}
    </BannerRoot>
  );
}

Banner.propTypes = {
  t: PropTypes.func,
};

const BannerRoot = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -15px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 15px;
  }
`;

const Title = styled('h1')`
  font-size: 36px;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const SubTitle = styled('h2')`
  font-size: 20px;
  margin: 0;
  font-weight: 300;
  max-width: 1024px;
  padding: 15px;
`;

const BackgroundLandscape = styled('div')`
  width: 100%;
  height: 0vh;
  position: relative;
  z-index: 1;
  @media (min-width: 768px) {
    background-image: url('/static/images/frame-g1b8de030c_1920.jpg');
    height: 50vh;
    margin-bottom: -20vh;
  }
`;

const Container = styled('div')`
  max-width: 1280px;
  text-align: center;
  position: relative;
  z-index: 10;
  background-color: white;
  @media (min-width: 768px) {
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
`;

const SendRequestForm = styled('form')`
  position: relative;
  z-index: 100;
`;

const SearchRow = styled('div')`
  display: flex;
  flex-flow: row wrap;
  max-width: 1280px;
  justify-content: center;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    width: 100%;
  }
`;

const VinInput = styled('input')`
  background-color: #f2f2f2;
  color: black;
  font-family: 'Gilroy Bold';
  font-size: 18px;
  margin: 15px 5px;
  padding: 15px 5px;
  border: 2px solid black;
  border-radius: 10px;
  min-width: calc(100% - 310px);
  &:focus {
    border-color: #ff3030;
    transition: 0.5s ease;
  }
  ::placeholder,
  ::webkit-placeholder,
  ::moz-placeholder {
    color: black;
  }
`;

const SearchButton = styled('button')`
  background-color: #ff3030;
  color: white;
  font-family: 'Gilroy Bold';
  font-size: 18px;
  cursor: pointer;
  width: 275px;
  margin: 15px 5px;
  padding: 15px 45px;
  border: 2px solid #ff3030;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
  &:hover {
    background-color: transparent;
  }
  &:hover,
  &:hover a {
    color: #ff3030;
    transition: 0.25s;
  }
  & > a {
    color: white;
    font-size: 18px;
    padding: 10px 15px;
    text-decoration: none;
    &:hover {
      color: #ff3030;
      transition: 0.25s;
    }
  }
  & > button {
    background: unset;
    color: white;
    font-family: 'Gilroy Bold';
    font-size: 18px;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  &:hover > button {
    color: #ff3030;
    transition: 0.25s;
  }
`;

const SelectBlock = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  gap: 15px;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
  width: 100%;
  margin: 10px 0px;
  & > div div {
    background-color: #f2f2f2;
    border: 0;
  }
`;

const SelectBlockCount4 = styled(SelectBlock)`
  & > div {
    width: 33.333%;
    padding: 0px 5px;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

const DivideBlock = styled('div')`
  display: flex;
  flex-flow: row nowrap;

  & > div {
    width: calc(50% - 0px);
  }
  & > div:nth-of-type(1) {
    margin-right: 5px;
  }
  & > div:nth-of-type(2) {
    margin-left: 5px;
  }
`;

const FormControl = styled('div')`
  display: flex;
  flex-flow: column nowrap;
`;

const Label = styled('label')`
  background-color: white;
  color: gray;
  font-size: 13px;
  padding-bottom: 5px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
  width: 100%;
`;

const SliderContainer = styled('div')`
  max-width: 1024px;
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BoilerplateImage = styled('div')`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
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
  background-image: url('/static/images/blank.png');
  background-size: 100%;
  background-position: center;
  background-origin: content-box;
  border: 1px solid #f5f5f5;
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
  padding: 5px;
  width: 5px;
  aspect-ratio: 1;
  border-radius: 50%;
  &:hover {
    background-color: rgba(198, 40, 40, 0.5);
    transition: 0.25s ease-out;
  }
`;

const BoxResult = styled('div')`
  color: white;
  border-radius: 10px;
  text-align: center;
  max-width: 580px;
  margin: 15px auto;
  padding: 15px;
`;

const BoxResultFailed = styled(BoxResult)`
  background-color: rgba(198, 40, 40, 1);
`;

const BoxResultSuccessed = styled(BoxResult)`
  background-color: green;
`;

const SearchResultsContainer = styled('div')`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
  }
  gap: 15px;
`;

const SearchResultsItem = styled('div')`
  max-width: 322px;
  @media (min-width: 322px) {
    width: 322px;
  }
`;

export default withTranslation('banner')(Banner);
