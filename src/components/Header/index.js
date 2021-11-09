import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';
import Link from 'next/link';

import SelectLanguages from './SelectLanguages';
import CustomButtonLight from './CustomButtonLight';
import CustomButtonFilled from './CustomButtonFilled';
import Logo from './Logo';
import Tabs from './Tabs';
import MenuMapExpander from './MenuMapExpander';
import Fade from 'react-reveal';
import Popup from 'reactjs-popup';
import MobileMenu from './MobileMenu';
import BurgerIcon from '../_Icons/BurgerIcon';

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
      <HeaderContainer>
        <NavRoot>
          <Logo href="/" src="/static/images/BIDSPACE-removebg-preview.png" alt="Logo" />
          <ListItem>
            {/* <div onClick={() => expandMenu1()}>
              <CustomLink name={t('phrases.allCars')} />
            </div>
            <div onClick={() => expandMenu2()}>
              <CustomLink name={t('phrases.searchByBrands')} />
            </div> */}
            <Link href="/about">
              <CustomLink>{t('phrases.about')}</CustomLink>
            </Link>
            <Link href="/contact">
              <CustomLink>{t('phrases.contact')}</CustomLink>
            </Link>
          </ListItem>
          <Space />
          <ListActions>
            <SelectLanguages t={t} style={{ paddingRight: 10 }} />
          </ListActions>
          <MobileActions>
            <Popup
              modal
              overlayStyle={{ background: 'rgba(255,255,255,0.98)' }}
              contentStyle={contentStyle}
              closeOnDocumentClick={false}
              trigger={open => <BurgerIcon open={open} />}>
              {close => <MobileMenu close={close} />}
            </Popup>
          </MobileActions>
        </NavRoot>
      </HeaderContainer>
      {expand1 && (
        <Fade>
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
        </Fade>
      )}
      {expand2 && (
        <Fade>
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
        </Fade>
      )}
    </HeaderRoot>
  );
}

Header.propTypes = {
  t: PropTypes.func,
};

const contentStyle = {
  background: 'rgba(255,255,255,0)',
  width: '80%',
  border: 'none',
};

const HeaderRoot = styled('header')`
  left: 0;
  width: 100%;
  height: 64px;
  position: fixed;
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

const MobileActions = styled('div')`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 15px;
    padding-right: 15px;
  }
`;

const ListItem = styled('div')`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
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

const CustomLink = styled('span')`
  background-color: transparent;
  color: #757575;
  text-decoration: none;
  margin-left: -5px;
  margin-right: 2rem;
  padding: 5px;
  border: none;
  font-family: 'Gilroy Bold';
  font-size: 14px;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

export default withTranslation('common')(Header);
