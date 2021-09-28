import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import { stack as Menu } from 'react-burger-menu';
import { withTranslation } from 'utils/with-i18next';

import SelectLanguages from './SelectLanguages';
import CustomButtonLight from './CustomButtonLight';
import CustomButtonFilled from './CustomButtonFilled';
import CustomLink from './CustomLink';
import Logo from './Logo';
import Tabs from './Tabs';
import MenuMapExpander from './MenuMapExpander';

export function Header({ t }) {
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const expandMenu1 = () => {
    setExpand2(false);
    setExpand1(!expand1);
  };
  const expandMenu2 = () => {
    setExpand1(false);
    setExpand2(!expand2);
  };
  return (
    <HeaderRoot>
      {/* <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu> */}
      <HeaderContainer>
        <NavRoot>
          <Logo
            href="/"
            src="https://autoastat.com/build/images/logo_temp_desktop.37bb5de7.svg"
            alt="react-next-boilerplate"
          />
          <ListItem>
            <div onClick={() => expandMenu1()}>
              <CustomLink name={t('phrases.allCars')} />
            </div>
            <div onClick={() => expandMenu2()}>
              <CustomLink name={t('phrases.searchByBrands')} />
            </div>
          </ListItem>
          <Space />

          <ListActions>
            <SelectLanguages t={t} style={{ paddingRight: 10 }} />
            <CustomButtonLight href={'/register'} name={t('phrases.register')} />
            <CustomButtonFilled href={'/login'} name={t('phrases.login')} />
          </ListActions>
        </NavRoot>
      </HeaderContainer>
      {expand1 && (
        <HeaderExpander>
          <HeadlineSection>{t('phrases.allCars')}</HeadlineSection>
          <Tabs>
            <TabItem label={t('phrases.category1')}>
              <MenuMapExpander />
            </TabItem>
            <TabItem label={t('phrases.category2')}>
              <MenuMapExpander />
            </TabItem>
            <TabItem label={t('phrases.category3')}>
              <MenuMapExpander />
            </TabItem>
          </Tabs>
        </HeaderExpander>
      )}
      {expand2 && (
        <HeaderExpander>
          <HeadlineSection>{t('phrases.searchByBrands')}</HeadlineSection>
          <Tabs>
            <TabItem label={t('phrases.category1')}>
              <MenuMapExpander />
            </TabItem>
            <TabItem label={t('phrases.category2')}>
              <MenuMapExpander />
            </TabItem>
            <TabItem label={t('phrases.category3')}>
              <MenuMapExpander />
            </TabItem>
          </Tabs>
        </HeaderExpander>
      )}
    </HeaderRoot>
  );
}

Header.propTypes = {
  t: PropTypes.func,
};

const HeaderRoot = styled('header')`
  left: 0;
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0px;
  z-index: 1000;
`;

const HeaderContainer = styled('div')`
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
`;

const NavRoot = styled('nav')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  height: 64px;
  max-width: 1024px;
`;

const ListItem = styled('div')`
  display: flex;
`;

const ListActions = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Space = styled('div')`
  flex: 1 1 auto;
`;

const HeaderExpander = styled('div')`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1024px;
  background-color: white;
  border-radius: 0px 0px 15px 15px;
  box-shadow: -5px 0px 15px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-flow: column;
`;

const HeadlineSection = styled('h2')``;

const TabItem = styled('div')``;

export default withTranslation('common')(Header);
