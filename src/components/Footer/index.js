import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';

import Link from 'next/link';
import Image from 'next/image';

import Logo from '../Header/Logo';

function Footer({ t }) {
  return (
    <FooterRoot className="root">
      <FooterContainer className="container">
        <FooterRow className="row">
          <Logo href="/" src="/static/images/BIDSPACE-removebg-preview.png" alt="Logo" />
          <Link href="mailto:support@bidspace.info">
            <TextLink>support@bidspace.info</TextLink>
          </Link>
        </FooterRow>
      </FooterContainer>
    </FooterRoot>
  );
}

Footer.propTypes = {
  t: PropTypes.func,
};

const FooterRoot = styled('footer')`
  bottom: 0;
  position: relative;
  width: calc(100vw);
  margin-bottom: -15px;
  padding: 0 0;
  color: black;
  overflow: hidden;
`;

const FooterContainer = styled('div')`
  margin: 0 auto;
  max-width: 1024px;
  padding: 2rem 0 2rem;
  min-height: 100px;
`;

const FooterRow = styled('div')`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

const TextLink = styled('span')`
  color: black;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  &:hover {
    text-decoration: underline;
    transition: 0.25s ease;
  }
`;

const Space = styled('div')`
  flex: 1 1 auto;
`;

export default withTranslation('banner')(Footer);
