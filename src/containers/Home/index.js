import React, { memo } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

import Layout from 'components/Layout';
import Features from 'components/Features';
import SliderResponsive from 'components/Slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Newsletter from 'components/Newsletter';
import Fade from 'react-reveal/Fade';

import saga from './saga';
import reducer from './reducer';
import { getShowcases } from './actions';
import { selectShowcases } from './selectors';

const Banner = dynamic(() => import('components/Banner'), { ssr: false });

export function Home({ getShowcases, showcasesData }) {
  useInjectSaga({ key: 'showcases', saga });
  useInjectReducer({ key: 'showcases', reducer });

  return (
    <Layout>
      <Fade>
        <Banner />
      </Fade>
      <Fade>
        <SliderResponsive headline="Sport cars" apilink="http://185.157.81.192:8081/api/salesdata?page=1" />
      </Fade>
      <Fade>
        <SliderResponsive headline="Highest bid" apilink="http://185.157.81.192:8081/api/salesdata?page=2" />
      </Fade>
      <Fade>
        <SliderResponsive headline="Mercedes" apilink="http://185.157.81.192:8081/api/salesdata?page=3" />
      </Fade>
      <Fade>
        <SliderResponsive headline="Toyota" apilink="http://185.157.81.192:8081/api/salesdata?page=2" />
      </Fade>
      <Fade>
        <SliderResponsive headline="Lexus" apilink="http://185.157.81.192:8081/api/salesdata?page=3" />
      </Fade>
      <Fade>
        <SliderResponsive headline="BMW" apilink="http://185.157.81.192:8081/api/salesdata?page=1" />
      </Fade>
      <Fade>
        <SliderResponsive headline="Subaru" apilink="http://185.157.81.192:8081/api/salesdata?page=2" />
      </Fade>
      <Fade>
        <SliderResponsive headline="Nissan" apilink="http://185.157.81.192:8081/api/salesdata?page=3" />
      </Fade>
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
