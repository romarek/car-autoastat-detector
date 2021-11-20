import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import Header from 'components/Header';
import Footer from 'components/Footer';

export function Layout({ children, t }) {
  return (
    <>
      <Header />

      <Main>{children}</Main>

      <Footer />
      <CookieConsent
        location="bottom"
        buttonText={t('phrases.cookiesAccept')}
        cookieName="myAwesomeCookieName2"
        style={{ background: '#fff', color: 'black', boxShadow: '0px 0px 15px rgba(0,0,0,0.1)', alignItems: 'center' }}
        buttonStyle={{
          backgroundColor: '#ff3030',
          color: '#fff',
          fontFamily: 'Gilroy Bold',
          fontSize: '13px',
          border: '2px solid #ff3030',
          borderRadius: 10,
          padding: '15px 25px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        expires={150}>
        <CookieBlock>
          <CookieIcon src={'/static/images/cookie.svg'} alt={t('phrases.cookies')} />
          <CookieText>
            {t('phrases.cookiesInfo')} <CookieExtraInfo>{t('phrases.cookiesAdditionalInfo')}</CookieExtraInfo>
          </CookieText>
        </CookieBlock>
      </CookieConsent>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  t: PropTypes.func,
};

const Main = styled('main')`
  width: 100%;
  position: relative;
  margin-top: 5rem;
  @media (max-width: 768px) {
    padding-left: 1rem;
  }
`;

const CookieIcon = styled('img')`
  height: 60px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
`;

const CookieExtraInfo = styled('span')`
  color: gray;
`;

const CookieText = styled('div')``;

const CookieBlock = styled('div')`
  display: flex;
  flex-flow: row;
  gap: 15px;
  align-items: center;
`;

export default withTranslation('common')(Layout);
