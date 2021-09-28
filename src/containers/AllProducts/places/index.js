import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from './connector';

class Places extends Component {
  static propTypes = {
    refine: PropTypes.func.isRequired,
    defaultRefinement: PropTypes.object.isRequired,
  };

  createRef = c => (this.element = c);

  componentDidMount() {
    const places = require('places.js');
    const { refine, defaultRefinement } = this.props;

    const autocomplete = places({
      container: this.element,
    });

    autocomplete.on('change', event => {
      refine(event.suggestion.latlng);
    });

    autocomplete.on('clear', () => {
      refine(defaultRefinement);
    });
  }

  render() {
    return (
      <div style={{ marginBottom: 20 }}>
        <input ref={this.createRef} type="search" id="address-input" placeholder="Where do you want to find a car?" />
      </div>
    );
  }
}

export default connect(Places);
