import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

import Layout from 'components/Layout';
import Features from 'components/Features';
import Banner from 'components/Banner';
import SliderResponsive from 'components/Slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Newsletter from 'components/Newsletter';
import Fade from 'react-reveal/Fade';

import saga from './saga';
import reducer from './reducer';
import { getShowcases } from './actions';
import { selectShowcases } from './selectors';

export function Home({ getShowcases, showcasesData }) {
  useInjectSaga({ key: 'showcases', saga });
  useInjectReducer({ key: 'showcases', reducer });

  return (
    <Layout>
      <Fade>
        <Banner />
      </Fade>
      <Fade>
        <SliderResponsive headline="Ostatnio oglądane" />
      </Fade>
      <Fade>
        <SliderResponsive headline="Przeglądaj najnowsze" />
      </Fade>
      <Fade>
        <Features />
      </Fade>
      <Fade>
        <Newsletter />
      </Fade>
      {/* <Showcases onGetShowcases={getShowcases} data={showcasesData} /> */}
    </Layout>
  );
}

const mapStateToProps = createStructuredSelector({
  showcasesData: selectShowcases(),
});

export function mapDispatchToProps(dispatch) {
  return { getShowcases: () => dispatch(getShowcases()) };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Home.propTypes = {
  showcasesData: PropTypes.object,
  getShowcases: PropTypes.func,
};

export default compose(withConnect, memo)(Home);
