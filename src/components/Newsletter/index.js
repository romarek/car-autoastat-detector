import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';

import { Formik } from 'formik';
import * as Yup from 'yup';
import CardSwipe from '../Features/CardSwipe';

import DisplayState from './DisplayState';
import ActionButton from '../Slider/ActionButton';


function Newsletter() {
  return (
    <NewsletterContainer>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Required'),
        })}>
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <NewsletterBlock>
              <NewsletterImage>
                <CardSwipe />
                {/* <LazyLoadImage
                  src={bigphoto}
                  alt="Photo"
                  width={'100%'}
                  height={'100%'}
                  style={{ objectFit: 'cover' }}
                  effect="blur"
                /> */}
              </NewsletterImage>
              <NewsletterForm onSubmit={handleSubmit}>
                <FormGroup>
                  <NewsletterHeadline>Lorem ipsum</NewsletterHeadline>
                  <NewsletterText>Dolor in semet?</NewsletterText>
                  <NewsletterLabel htmlFor="email" style={{ display: 'block' }}>
                    Email
                  </NewsletterLabel>
                  <NewsletterInput
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                  />
                  {errors.email && touched.email && (
                    <AlertErrors className="input-feedback">{errors.email}</AlertErrors>
                  )}
                </FormGroup>
                <FormButtons>
                  <ActionButton
                    type="button"
                    className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                    label="Reset"
                    case="login"
                    buttonColor="#b1b1b1"
                  />
                  <ActionButton
                    type="submit"
                    disabled={isSubmitting}
                    label="Subscribe"
                    case="login"
                    buttonColor="#c62828"
                  />
                </FormButtons>
                {/* <DisplayState {...props} /> */}
              </NewsletterForm>
            </NewsletterBlock>
          );
        }}
      </Formik>
    </NewsletterContainer>
  );
}

Newsletter.PropTypes = {
  t: PropTypes.func,
};

const NewsletterContainer = styled('div')`
  display: flex;
  justify-content: center;
`;

const NewsletterBlock = styled('div')`
  max-width: 1024px;
  height: 480px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column wrap;
  }
  padding: 25px;
  display: flex;
  flex-flow: row nowrap;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

const NewsletterForm = styled('form')`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NewsletterImage = styled('div')`
  width: 60%;
  padding: 15px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const FormGroup = styled('div')`
  display: flex;
  flex-flow: column;
  margin: 15px 0px;
`;

const NewsletterLabel = styled('label')`
  color: gray;
`;

const NewsletterInput = styled('input')`
  background-color: #f5f5f5;
  color: gray;
  font-family: 'Gilroy Bold';
  border: 0;
  border-radius: 25px;
  padding: 20px 15px;
`;

const AlertErrors = styled('div')``;

const FormButtons = styled('div')`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  @media (max-width: 768px) {
    flex-flow: column wrap;
  }
`;

const NewsletterHeadline = styled('h1')``;

const NewsletterText = styled('p')``;

export default withTranslation('banner')(Newsletter);
