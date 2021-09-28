import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'utils/with-i18next';
import styled from '@emotion/styled';

const ItemLink = styled('button')`
  background-color: transparent;
  color: #757575;
  text-decoration: none;
  margin-left: -5px;
  margin-right: 2rem;
  padding: 5px;
  border: none;
  font-family: 'Gilroy Bold';
  font-size: 14px;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

const CustomLink = ({ name }) => (
  <ItemLink
    css={{
      backgroundColor: '#fff',
      '&:hover': {
        color: 'rbg(217, 217, 217)',
      },
    }}>
    {name}
  </ItemLink>
);

CustomLink.propTypes = {
  name: PropTypes.string,
};

export default CustomLink;
