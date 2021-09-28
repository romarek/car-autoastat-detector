/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'utils/with-i18next';
import styled from '@emotion/styled';

function Header(props) {
  return (
    <HeaderBlock>
      <HeaderIcon src={props.icon} alt={props.title} />
      <HeaderContent>{props.title}</HeaderContent>
    </HeaderBlock>
  );
}

const HeaderBlock = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;
const HeaderIcon = styled('img')`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;
const HeaderContent = styled('h3')``;

Header.propTypes = {
  props: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default withTranslation('common')(Header);
