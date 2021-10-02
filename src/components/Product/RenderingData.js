import React from 'React';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const generateElement = (key, value) => {
  if (key !== '' && value !== '') {
    return (
      <DataItem key={key}>
        <ElementName>{key}</ElementName>
        <ElementValue>{value}</ElementValue>
      </DataItem>
    );
  }
};

function generateData(data) {
  const newData = Object.keys(data).reduce((result, currentKey) => {
    if (typeof data[currentKey] === 'string' || data[currentKey] instanceof String) {
      const elementToPush = generateElement(currentKey, data[currentKey]);
      result.push(elementToPush);
    } else {
      const nested = generateData(data[currentKey]);
      result.push(...nested);
    }
    return result;
  }, []);
  return newData;
}

export default class RenderList extends React.Component {
  render() {
    const { data } = this.props;
    return <>{generateData(data)}</>;
  }
}

const DataItem = styled('div')`
  display: flex;
  flex-flow: row nowrap;
`;

const ElementName = styled('div')`
  width: 50%;
`;

const ElementValue = styled('div')`
  width: 50%;
`;
