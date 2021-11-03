/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Link from 'next/link';

import HeartIcon from '../_Icons/Heart';
import AddButtonIcon from '../_Icons/AddButton';

function ActionButton(props) {
  const link = props.link;
  const icon = props.case;
  const buttonStyle = {
    backgroundColor: props.buttonColor,
    borderColor: props.buttonColor,
    '&:hover': {
      color: props.buttonColor,
    },
    '&:hover > svg > path': {
      fill: props.buttonColor,
    },
    borderRadius: props.isBigRadius ? '5px' : '25px',
  };
  return (
    <Link href={props.link}>
      <ButtonLove type="button" style={buttonStyle}>
        {(icon === 'favourite' && <HeartIcon />) ||
          (icon === 'more' && <HeartIcon />) ||
          (icon === 'login' && <HeartIcon />)}
        {props.label}
      </ButtonLove>
    </Link>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string,
  case: PropTypes.string,
  link: PropTypes.string,
  buttonColor: PropTypes.string,
  isBigRadius: PropTypes.bool,
};

const ButtonLove = styled('button')`
  color: white;
  font-family: 'Gilroy Bold';
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px 15px;
  border: 1px solid;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & > svg {
    height: 30px;
    transform: scale(0.95);
  }
  & > svg > path {
    fill: white;
    stroke-width: 4px;
  }
  &:hover {
    background-color: transparent;
  }
  &:hover,
  &:hover > svg > path {
    transition: 0.25s ease-out;
  }
`;

export default ActionButton;
