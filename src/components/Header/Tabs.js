import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Tab from './Tab';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <TabsContainer className="tabs">
        <TabsList className="tab-list">
          {children.map(child => {
            const { label } = child.props;

            return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />;
          })}
        </TabsList>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </TabsContainer>
    );
  }
}

const TabsContainer = styled('div')`
  display: flex;
  flex-flow: row nowrap;
`;
const TabsList = styled('ol')`
  list-style-type: none;
  cursor: pointer;
  min-width: 150px;
`;

export default Tabs;
