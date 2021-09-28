import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import { i18n } from 'utils/with-i18next';

export function SelectLanguages({ t }) {
  const [select, setSelect] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(select);
  }, [select]);

  const handleSelect = ev => {
    ev.preventDefault();

    setSelect(ev.target.value);
  };

  return (
    <SelectRoot name="languages" id="languages" value={select} onChange={handleSelect}>
      <OptionRoot value="pl">{t('languages.pl')}</OptionRoot>
      <OptionRoot value="en">{t('languages.en')}</OptionRoot>
    </SelectRoot>
  );
}

SelectLanguages.propTypes = {
  t: PropTypes.func,
};

const SelectRoot = styled('select')`
  background-color: #f2f2f2;
  border-radius: 4px;
  width: 100px;
  height: 30px;
  border: 0;
  font-family: 'Gilroy Bold';
  margin-right: 1rem;
`;

const OptionRoot = styled('option')`
  font-family: 'Gilroy Bold';
`;

export default SelectLanguages;
