import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <CategoryTab className={className} onClick={onClick}>
        {label}
      </CategoryTab>
    );
  }
}

const CategoryTab = styled('li')`
  padding: 0px 5px;
  margin-bottom: 5px;
`;

export default Tab;
