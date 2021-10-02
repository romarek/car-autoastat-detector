import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';
import Fade from 'react-reveal';

function MobileMenu({ close, t }) {
  return (
    <Fade>
      <MenuContainer className="menu">
        <MenuList>
          <MenuItem onClick={close}>{t('phrases.menuStart')}</MenuItem>
          <MenuItem onClick={close}>Getting Started</MenuItem>
          <MenuItem onClick={close}>Component API</MenuItem>
          <MenuItem onClick={close}>Use Case - Tooltip</MenuItem>
          <MenuItem onClick={close}>Use Case - Modal</MenuItem>
          <MenuItem onClick={close}>Use Case - Menu</MenuItem>
          <MenuItem onClick={close}>Contributing</MenuItem>
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

export default withTranslation('common')(MobileMenu);