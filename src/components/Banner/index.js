import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import styled from '@emotion/styled';
import axios from 'axios';
import Link from 'next/link';

import { withTranslation } from 'utils/with-i18next';
import Collapsible from 'react-collapsible';
const animatedComponents = makeAnimated();

export function Banner({ t }) {
  const [numberVin, setNumberVin] = useState('');
  const [type, setType] = useState('');
  const [model, setModel] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Pokaż mi VIN: ${numberVin} i typ: ${type}`);
  }
  return (
    <BannerRoot>
      <Container>
        <Logo src="/static/images/jumbo_landing_graphics.svg" alt="Jumbo landing graphics" />

        <Title>{t('title')}</Title>

        <SubTitle>{t('subTitle')}</SubTitle>
        <SendRequestForm onSubmit={handleSubmit}>
          <SearchRow>
            <VinInput
              onChange={e => setNumberVin(e.target.value)}
              pattern="^(?=.*[0-9])(?=.*[A-z])[0-9A-z-]{17}$"
              placeholder="e.g. AB^DF31U100027743"
            />
            <SearchButton type="submit">
              {numberVin.length > 0 ? (
                <Link href={`/car-model/${numberVin}`}>{t('searchByVin')}</Link>
              ) : (
                <Link href="/">{t('searchByParams')}</Link>
              )}
            </SearchButton>
          </SearchRow>
          <Collapsible
            lazyRender
            open={true}
            trigger={t('expandParams')}
            triggerWhenOpen={t('compressParams')}
            triggerStyle={{ cursor: 'pointer', userSelect: 'none' }}
            easing="ease-in-out">
            <SearchRow>
              <SelectBlockCount4>
                <FormControl>
                  <Label>{t('typeLabel')}</Label>
                  <Select
                    inputId={'type'}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[typeOptions[4]]}
                    isMulti
                    options={typeOptions}
                    value={type}
                    onChange={type => setType(type)}
                    placeholder={t('typePlaceholderSelect').concat(t('typeSpace'), t('typeLabel'))}
                  />
                </FormControl>
                <FormControl>
                  <Label>{t('typeLabel')}</Label>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[makeOptions[5]]}
                    isMulti
                    options={makeOptions}
                  />
                </FormControl>
                <FormControl>
                  <Label>{t('typeLabel')}</Label>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[modelOptions[3]]}
                    isMulti
                    options={modelOptions}
                  />
                </FormControl>
                <DivideBlock>
                  <FormControl>
                    <Label>{t('typeLabel')}</Label>
                    <Select closeMenuOnSelect={false} components={animatedComponents} options={colourOptions} />
                  </FormControl>
                  <FormControl>
                    <Label>{t('typeLabel')}</Label>
                    <Select closeMenuOnSelect={false} components={animatedComponents} options={colourOptions} />
                  </FormControl>
                </DivideBlock>
              </SelectBlockCount4>
            </SearchRow>
            <SearchRow>
              <SelectBlockCount3>
                <FormControl>
                  <Label>{t('typeLabel')}</Label>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[colourOptions[5]]}
                    isMulti
                    options={colourOptions}
                  />
                </FormControl>
                <FormControl>
                  <Label>{t('typeLabel')}</Label>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[colourOptions[4]]}
                    isMulti
                    options={colourOptions}
                  />
                </FormControl>
                <FormControl>
                  <Label>{t('typeLabel')}</Label>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[colourOptions[5]]}
                    isMulti
                    options={colourOptions}
                  />
                </FormControl>
              </SelectBlockCount3>
            </SearchRow>
          </Collapsible>
        </SendRequestForm>
      </Container>
    </BannerRoot>
  );
}

Banner.propTypes = {
  t: PropTypes.func,
};

const colourOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Red', value: 'red' },
  { label: 'Red', value: 'red' },
  { label: 'Red', value: 'red' },
  { label: 'Red', value: 'red' },
];

const typeOptions = [
  { label: 'Automobile', value: 'automobile' },
  { label: 'Motorcycle', value: 'motorcycle' },
  { label: 'Trailer', value: 'trailer' },
  { label: 'Truck', value: 'truck' },
  { label: 'ATV', value: 'atv' },
  { label: 'Industrial equipment', value: 'industrial equipment' },
  { label: 'Recreational vehicle', value: 'recreational vehicle' },
  { label: 'Snowmobile', value: 'snowmobile' },
  { label: 'Boat', value: 'boat' },
  { label: 'Jet ski', value: 'jet ski' },
  { label: 'Bus, minibus', value: 'bus, minibus' },
  { label: 'Other', value: 'other ' },
];

const makeOptions = [
  { label: 'Aston Martin', value: 'aston martin' },
  { label: 'Audi', value: 'audi' },
  { label: 'BMW', value: 'bmw' },
  { label: 'Ford', value: 'ford' },
  { label: 'Toyota', value: 'toyota' },
];

const modelOptions = [
  { label: 'DB11', value: 'DB11' },
  { label: 'DB9', value: 'DB9' },
  { label: 'Rapide', value: 'rapide' },
  { label: 'V8 Vantage', value: 'V8 vantage' },
  { label: 'Vanquish', value: 'vanquish' },
  { label: 'Vantage', value: 'vantage' },
];

const BannerRoot = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 15px;
  }
`;

const Title = styled('h1')`
  font-size: 45px;
`;

const SubTitle = styled('h2')`
  font-size: 20px;
  margin: 0;
  font-weight: 300;
`;

const Logo = styled('img')`
  max-width: 440px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Container = styled('div')`
  max-width: 1280px;
  text-align: center;
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
  margin: 15px 5px;
  padding: 15px 5px;
  border: 0;
  border-radius: 10px;
  min-width: 35vw;
  &:focus {
    border: 2px solid #c62828;
    transition: 0.5s ease;
  }
`;

const SearchButton = styled('button')`
  background-color: #c62828;
  color: white;
  font-family: 'Gilroy Bold';
  cursor: pointer;
  margin: 15px 5px;
  padding: 15px 45px;
  border: 2px solid #c62828;
  border-radius: 10px;
  &:hover {
    background-color: transparent;
  }
  &:hover,
  &:hover a {
    color: #c62828;
    transition: 0.25s;
  }
  & > a {
    color: white;
    padding: 10px 15px;
    text-decoration: none;
    &:hover {
      color: #c62828;
      transition: 0.25s;
    }
  }
`;

const SelectBlock = styled('div')`
  display: flex;
  flex-flow: row nowrap;
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
    width: 25%;
    padding: 0px 5px;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

const SelectBlockCount3 = styled(SelectBlock)`
  & > div {
    width: calc(100% / 3);
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 10px;
    }
    padding: 0px 5px;
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
  color: gray;
  font-size: 13px;
  padding-bottom: 5px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
  width: 100%;
`;

export default withTranslation('banner')(Banner);
