import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';
import Link from 'next/link';
import CustomLink from './CustomLink';
import Fade from 'react-reveal';

function MobileMenu({ close, t }) {
  return (
    <Fade>
      <MenuContainer className="menu">
        <MenuList>
          <MenuItem onClick={close}>{t('phrases.menuStart')}</MenuItem>
          <MenuItem onClick={close}>
            <Link href="/about">
              <TextLink>{t('phrases.about')}</TextLink>
            </Link>
          </MenuItem>
          <MenuItem onClick={close}>
            <Link href="/contact">
              <TextLink>{t('phrases.contact')}</TextLink>
            </Link>
          </MenuItem>
        </MenuList>
      </MenuContainer>
    </Fade>
  );
}

MobileMenu.propTypes = {
  close: PropTypes.bool,
  t: PropTypes.func,
};

const MenuContainer = styled('div')``;

const MenuList = styled('ul')``;

const MenuItem = styled('li')``;

const TextLink = styled('div')`
  color: black;
  text-decoration: none;
`;

export default withTranslation('common')(MobileMenu);
