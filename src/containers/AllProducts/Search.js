import React, { Fragment, Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import Collapsible from 'react-collapsible';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  NumericMenu,
  Breadcrumb,
  ClearRefinements,
  RefinementList,
  RangeInput,
  RatingMenu,
  HitsPerPage,
  MenuSelect,
  Panel,
} from 'react-instantsearch-dom';
import { GoogleMapsLoader, GeoSearch, Marker, CustomMarker, Redo, Control } from 'react-instantsearch-dom-maps';
import PropTypes from 'prop-types';
import { withTranslation } from 'utils/with-i18next';
import styled from '@emotion/styled';
// import Places from './places';

const searchClient = algoliasearch('B1G2GM9NG0', 'aadef574be1f9252bb48d4ea09b5cfe5');
const Container = ({ children }) => <div style={{ height: 500 }}>{children}</div>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

const apiKey = 'AIzaSyBQswRuNghSgGNUeAiocov37xGJqoe8HVw';
const endpoint = 'https://maps.googleapis.com/maps/api/js?v=weekly';
const initialZoom = 12;
const initialPosition = {
  lat: 40.71,
  lng: -74.01,
};

function Search({ t }) {
  return (
    <SearchMachineFullWidth className="ais-InstantSearch">
      <SectionHeadline>{t('allProductsHeadline')}</SectionHeadline>
      <InstantSearch indexName="demo_ecommerce" searchClient={searchClient}>
        <Container>
          <GoogleMapsLoader apiKey={apiKey} endpoint={endpoint}>
            {google => (
              <GeoSearch google={google} initialZoom={initialZoom} initialPosition={initialPosition}>
                {({ hits }) => (
                  <Fragment>
                    <Control />

                    {hits.map(hit => (
                      <Marker key={hit.objectID} hit={hit} />
                    ))}
                  </Fragment>
                )}
              </GeoSearch>
            )}
          </GoogleMapsLoader>
        </Container>
        <SearchMachineContainer>
          <LeftPanel className="left-panel">
            <ClearRefinements />
            <HitsPerPage
              defaultRefinement={4}
              items={[
                { value: 3, label: '3 results per page' },
                { value: 6, label: '6 results per page' },
                { value: 9, label: '9 results per page' },
                { value: 12, label: '12 results per page' },
              ]}
            />
            <PanelHeadline>{t('allProductsBrands')}</PanelHeadline>
            <RefinementList attribute="brand" />
            <Panel header="Numeric Menu" footer="Footer">
              <RangeInput attribute="price" />
            </Panel>
            <RatingMenu attribute="rating" />
            <Panel header="Numeric Menu" footer="Footer">
              <NumericMenu
                attribute="price"
                items={[
                  { start: 0, end: 10, label: '<$10' },
                  { start: 10, end: 100, label: '$10-$100' },
                  { start: 100, end: 500, label: '$100-$500' },
                  { start: 500, label: '>$500' },
                ]}
              />
            </Panel>
          </LeftPanel>
          <RightPanel className="right-panel">
            <SearchBox
              translations={{
                submitTitle: <span>{t('submitTitle')}</span>,
                resetTitle: <span>{t('submitTitle')}</span>,
                placeholder: <span>{t('submitTitle')}</span>,
              }}
            />
            <Collapsible
              lazyRender
              open
              trigger="Advanced searching parameters"
              triggerClassName="CustomTriggerCSS"
              triggerOpenedClassName="CustomTriggerCSS--open"
              transitionTime={1400}
              easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
              style={{ cursor: 'pointer' }}>
              <SearchRow>
                <MenuSelect attribute="brand" />
                <MenuSelect attribute="brand" />
                <MenuSelect attribute="brand" />
                <RangeInput attribute="price" />
              </SearchRow>
              <SearchRow>
                <MenuSelect attribute="brand" />
                <MenuSelect attribute="brand" />
                <MenuSelect attribute="brand" />
              </SearchRow>
            </Collapsible>
            <Breadcrumb attributes={['categories.lvl0', 'categories.lvl1', 'categories.lvl2', 'categories.lvl3']} />
            <Hits hitComponent={Hit} id="hits" />
            <Pagination />
          </RightPanel>
        </SearchMachineContainer>
      </InstantSearch>
    </SearchMachineFullWidth>
  );
}

function Hit(props) {
  return (
    <ProductElement>
      <img src={props.hit.image} align="left" alt={props.hit.name} />
      <ProductInfoContent className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </ProductInfoContent>
      <ProductInfoContent className="hit-price">${props.hit.price}</ProductInfoContent>
    </ProductElement>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
  props: PropTypes.string,
  insights: PropTypes.string,
  t: PropTypes.func,
};

Search.propTypes = {
  t: PropTypes.func,
};

const SearchMachineFullWidth = styled('div')`
  max-width: 100%;
`;

const SearchMachineContainer = styled('div')`
  max-width: 1280px;
  margin: 0 auto;
`;

const LeftPanel = styled('div')`
  & > .ais-ClearRefinements > button {
    background-color: #f5f5f5;
    color: gray;
    width: 100%;
    font-family: 'Gilroy Bold';
    cursor: pointer;
    padding: 10px 15px;
    border: 2px solid #f5f5f5;
    border-radius: 5px;
    margin-bottom: 10px;
    &:hover {
      background-color: transparent;
      transition: 0.25s ease;
    }
  }
  & > .ais-RefinementList > ul,
  .ais-Panel-body > div > ul {
    list-style-type: none;
    padding-left: 0px;
  }
  & > .ais-HitsPerPage > select,
  .ais-Panel-body .ais-RangeInput form input {
    background-color: #f5f5f5;
    color: gray;
  }
  button.ais-RangeInput-submit[type='submit'] {
    background-color: #ff3030;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
  }
  & > .ais-HitsPerPage > select,
  .ais-Panel-body .ais-RangeInput form input,
  button.ais-RangeInput-submit[type='submit'] {
    font-family: 'Gilroy Bold';
    width: 100%;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
  }
  .ais-Panel-body .ais-RangeInput form span {
    padding-top: 6px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .ais-Panel-body .ais-RangeInput {
    width: 100%;
  }
  .ais-Panel-body .ais-RangeInput form {
    display: flex;
  }
`;

const RightPanel = styled('div')`
  & form {
    display: flex;
    flex-flow: row;
  }
  & form .ais-SearchBox-input {
    background-color: #f5f5f5;
    color: gray;
    font-family: 'Gilroy Bold';
    width: 100%;
    padding: 10px 15px;
    border: none;
  }
  & form .ais-SearchBox-input,
  & form button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
  }
  & form button {
    cursor: pointer;
  }
  & form button[type='submit'] {
    background-color: #ff3030;
  }
  & form button[type='reset'] {
    background-color: #f2f2f2;
    display: flex;
    margin-right: 0px;
  }
  & form button[type='submit'] svg path {
    fill: white;
    stroke: white;
    stroke-width: 2px;
  }
  & form button[type='reset'] svg {
    margin-top: 3px;
  }
  & > .ais-Hits > ul,
  & > .ais-Pagination > ul {
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;
  }
  & > .ais-Hits > ul {
    justify-content: start;
  }
  & > .ais-Pagination > ul {
    justify-content: center;
  }
  & > .ais-Pagination > ul > li {
    border-radius: 10px;
  }
  & > .ais-Pagination > ul > li.ais-Pagination-item--selected,
  & > .ais-Pagination > ul > li:hover {
    background-color: rgba(198, 40, 40, 0.15);
    transition: 0.25s ease;
  }
  & > .ais-Pagination > ul > li > a {
    color: gray;
    line-height: 48px;
    padding: 20px;
    text-decoration: none;
  }
  & > .ais-Pagination > ul > li > span {
    cursor: pointer;
    line-height: 48px;
    padding: 20px 10px;
  }
  & > .ais-Pagination > ul > li > a.ais-Pagination-link--selected {
    color: rgb(198, 40, 40);
  }
  & > .ais-Hits > ul > li,
  .ais-Hits-item {
    min-width: 33.3333%;
    width: 33.3333%;
  }
  .ais-Hits-item img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
  & > .Collapsible > .Collapsible__trigger {
    width: 100%;
    cursor: pointer;
    user-select: none;
  }
  & > .Collapsible > .Collapsible__trigger:hover {
    color: rgb(198, 40, 40);
    transition: 0.25s ease;
  }
  button.ais-RangeInput-submit {
    margin-left: 10px;
    margin-right: 0px;
  }
`;

const SectionHeadline = styled('h1')`
  text-align: center;
`;

const PanelHeadline = styled('h2')``;

const ProductElement = styled('div')``;

const SearchRow = styled('div')`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  & div {
    margin-top: 15px;
    padding-right: 10px;
  }
  & div:last-of-type {
    padding-right: 0px;
  }
  &:nth-of-type(1) div {
    width: 22.0222%;
  }
  &:nth-of-type(2) div {
    width: 33.3333%;
  }
  &:nth-of-type(1) div:last-of-type {
    width: 33.3333%;
  }
  & div::before {
    color: gray;
    font-size: 11px;
    line-height: 18px;
  }
  &:nth-of-type(1) div:nth-of-type(1)::before {
    content: 'Label';
  }
  &:nth-of-type(1) div:nth-of-type(2)::before {
    content: 'Label';
  }
  &:nth-of-type(1) div:nth-of-type(3)::before {
    content: 'Label';
  }
  &:nth-of-type(1) div:nth-of-type(4)::before {
    content: 'Label';
  }
  &:nth-of-type(2) div:nth-of-type(1)::before {
    content: 'Label';
  }
  &:nth-of-type(2) div:nth-of-type(2)::before {
    content: 'Label';
  }
  &:nth-of-type(2) div:nth-of-type(3)::before {
    content: 'Label';
  }
  & div form {
    display: flex;
    justify-content: center;
  }
  & div form span {
    padding-top: 6px;
  }
  & div form button {
    color: white;
    font-family: 'Gilroy Bold';
    text-transform: uppercase;
  }
  & div select,
  & div form input {
    background-color: #f5f5f5;
    color: gray;
    font-family: 'Gilroy Bold';
    width: 100%;
    padding: 10px 15px;
    border: none;
  }
`;

const ProductInfoContent = styled('div')``;

// const AddToFavouriteButton = styled('button')``;

export default withTranslation('common')(Search);
