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
        buttonText={t('cookiesAccept')}
        cookieName="myAwesomeCookieName2"
        style={{ background: '#2B373B' }}
        buttonStyle={{
          backgroundColor: '#c62828',
          color: '#fff',
          fontFamily: 'Gilroy Bold',
          fontSize: '13px',
          border: '2px solid #c62828',
          borderRadius: 10,
          padding: 15,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        expires={150}>
        {t('cookiesInfo')} <span style={{ fontSize: '10px' }}>{t('cookiesAdditionalInfo')}</span>
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
`;

export default withTranslation('common')(Layout);
