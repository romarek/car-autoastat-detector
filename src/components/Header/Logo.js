import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'utils/with-i18next';
import styled from '@emotion/styled';

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

const ItemLogo = styled.img`
  color: #ff3030;
  text-decoration: none;
  margin-left: -5px;
  margin-right: 1rem;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 5px;
  height: 60px;
  cursor: pointer;
`;

export default Logo;
