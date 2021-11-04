import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'utils/with-i18next';
import styled from '@emotion/styled';

const ItemLogo = styled.img`
  color: #535353;
  text-decoration: none;
  margin-left: -5px;
  margin-right: 1rem;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 5px;
  height: 60px;

  &:hover {
    background-color: #fff;
    color: #535353;
    cursor: pointer;
    transition: 1.5s ease;
    filter: grayscale(100%);
  }
`;

const Logo = ({ href, src, alt }) => (
  <Link href={href} passHref>
    <ItemLogo src={src} alt={alt} />
  </Link>
);

Logo.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Logo;
