import React, { memo } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

import Layout from 'components/Layout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fade from 'react-reveal/Fade';

import saga from './saga';
import reducer from './reducer';
import { getShowcases } from './actions';
import { selectShowcases } from './selectors';

export function ContactPage({ getShowcases, showcasesData }) {
  useInjectSaga({ key: 'showcases', saga });
  useInjectReducer({ key: 'showcases', reducer });

  return <Layout>Contact</Layout>;
}

const mapStateToProps = createStructuredSelector({
  showcasesData: selectShowcases(),
});

export function mapDispatchToProps(dispatch) {
  return { getShowcases: () => dispatch(getShowcases()) };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

ContactPage.propTypes = {
  showcasesData: PropTypes.object,
  getShowcases: PropTypes.func,
};

export default compose(withConnect, memo)(ContactPage);
