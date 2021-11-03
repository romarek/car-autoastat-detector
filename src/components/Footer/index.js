import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';

import Link from 'next/link';

function Footer({ t }) {
  return (
    <FooterRoot className="root">
      <FooterContainer className="container">
        <FooterRow className="row">
          <Link
            className="link"
            href="https://nextjs.org/features/server-side-rendering"
            rel="noopener noreferrer"
            target="_blank">
            <TextLink>My Page</TextLink>
          </Link>

          <Link
            className="link"
            href="https://nextjs.org/features/static-exporting"
            rel="noopener noreferrer"
            target="_blank">
            <TextLink>My Page</TextLink>
          </Link>

          <Link className="link" href="https://nextjs.org/features/css-in-js" rel="noopener noreferrer" target="_blank">
            <TextLink>My Page</TextLink>
          </Link>

          <Link
            className="link"
            href="https://nextjs.org/features/progressive-web-apps"
            rel="noopener noreferrer"
            target="_blank">
            <TextLink>My Page</TextLink>
          </Link>
        </FooterRow>
      </FooterContainer>
    </FooterRoot>
  );
}

Footer.PropTypes = {
  t: PropTypes.func,
};

const FooterRoot = styled('footer')`
  bottom: 0;
  position: static;
  width: calc(100vw);
  margin-bottom: -15px;
  padding: 0 0;
  background: #121212;
  color: #f1f1f1;
  overflow: hidden;
`;

const FooterContainer = styled('div')`
  margin: 0 auto;
  max-width: 1024px;
  padding: 2rem 0 2rem;
  min-height: 200px;
`;

const FooterRow = styled('div')`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

const TextLink = styled('span')`
  color: #f1f1f1;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  &:hover {
    text-decoration: underline;
    transition: 0.25s ease;
  }
`;

export default withTranslation('banner')(Footer);
