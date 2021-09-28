import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'utils/with-i18next';
import styled from '@emotion/styled';

const ItemLink = styled.a`
  color: #c62828;
  text-decoration: none;
  margin-left: -5px;
  margin-right: 1rem;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 5px;

  &:hover {
    background-color: #fff;
    color: #c62828;
    cursor: pointer;
    transition: 0.25s ease;
    border: 1px solid #c62828;
  }
`;

const CustomButton = ({ href, name }) => (
  <Link href={href} passHref>
    <ItemLink href={href}>{name}</ItemLink>
  </Link>
);

CustomButton.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
};

export default CustomButton;
