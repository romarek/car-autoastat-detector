import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from '@emotion/styled';

export default class MenuMapExapnder extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ContentBlockMegaMenu>
        {this.state.persons.slice(0, 8).map(person => (
          // eslint-disable-next-line react/jsx-key
          <ContentElementMegaMenu>
            <ImageElement src="https://bidfax.info/uploads/posts/2021-08/14/tesla-model-s-85-2015-5yjsa1h26ffp74619-img4.jpg" />
            <DataElement>
              <Headline>{person.name}</Headline>
              <Content>{person.company.name}</Content>
            </DataElement>
          </ContentElementMegaMenu>
        ))}
      </ContentBlockMegaMenu>
    );
  }
}

const ContentBlockMegaMenu = styled('ul')`
  display: flex;
  flex-flow: row wrap;
  align-items: flex start;
  list-style-type: none;
`;
const ContentElementMegaMenu = styled('li')`
  display: flex;
  flex-flow: row nowrap;
  width: calc(100% / 3);
  padding-bottom: 15px;
`;
const ImageElement = styled('img')`
  width: 90px;
  height: 60px;
  background-color: #f5f5f5;
  object-fit: cover;
  border-radius: 5px;
  border: none;
`;
const DataElement = styled('div')`
  display: flex;
  flex-flow: column wrap;
`;
const Headline = styled('h3')`
  margin: 0;
  padding: 5px;
`;
const Content = styled('h5')`
  color: gray;
  font-weight: 500;
  margin: 0;
  padding: 5px;
`;