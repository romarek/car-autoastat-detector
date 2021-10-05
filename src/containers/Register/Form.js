import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutate } from 'restful-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLayer, useHover, Arrow } from 'react-laag';
import Fade from 'react-reveal/Fade';

import ActionButton from '../../components/Slider/ActionButton';
import GoogleLoginComponent from '../Login/GoogleLogin';
import GoogleLoginHooks from '../Login/GoogleLoginHooks';
import GoogleLogoutComponent from '../Login/GoogleLogout';
import GoogleLogoutHooks from '../Login/GoogleLogoutHooks';

const bigphoto =
  'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1280';

const FormRegister = ({ t }) => {
  const router = useRouter();
  const [info, setInfo] = useState();
  const { mutate: registerUser, loading, error } = useMutate({
    verb: 'POST',
    path: 'register',
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    setInfo();
    registerUser(data).then(_ => setInfo('Please visit your email address and active your account'));
  };

  const [value, setValue] = React.useState('');
  const [hasFocus, setFocus] = React.useState(false);

  const { renderLayer, triggerProps, layerProps, arrowProps, triggerBounds } = useLayer({
    isOpen: hasFocus,
    overflowContainer: false,
    auto: true,
    snap: true,
    placement: 'top-start',
    possiblePlacements: ['top-start', 'bottom-start', 'right-center', 'left-center'],
    triggerOffset: 12,
    containerOffset: 16,
    arrowOffset: 8,
  });

  const validationMap = {
    lowercase: value => /[a-z]/.test(value),
    uppercase: value => /[A-Z]/.test(value),
    special: value => /[\!\@\#\$\%\^\&\*\+\_\-\~]/.test(value),
    numeric: value => /[0-9]/.test(value),
    length: value => value.length >= 8,
  };

  function Requirement({ children, type, value }) {
    const predicate = validationMap[type];
    const isValid = predicate(value);

    return (
      <li className="requirement">
        <span>{isValid ? '✔︎' : ''}</span>
        {children}
      </li>
    );
  }

  return (
    <RegistrationContainer>
      <RegisterBlock>
        <Fade>
          <RegisterForm>
            <HeaderPage>{t('phrases.registerPageHeader')}</HeaderPage>
            <LeadPageContent>{t('phrases.registerPageLeadContent')}</LeadPageContent>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup controlId="formUsername">
                <FormLabel>{t('phrases.registerPageUsername')}</FormLabel>
                <FormControl ref={register} name="username" type="text" placeholder="Enter username" />
              </FormGroup>
              <FormGroup controlId="formEmail">
                <FormLabel>{t('phrases.registerPageEmail')}</FormLabel>
                <FormControl ref={register} name="email" type="email" placeholder="Enter email" />
                <FormText className="text-muted">Well never share your email with anyone else.</FormText>
              </FormGroup>
              <FormGroup controlId="formPassword">
                <FormLabel>Password</FormLabel>
                <FormControl
                  {...triggerProps}
                  ref={register}
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={value}
                  onChange={evt => setValue(evt.target.value)}
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                />
                {hasFocus &&
                  renderLayer(
                    <ul
                      {...layerProps}
                      style={{
                        ...layerProps.style,
                      }}
                      className="requirements">
                      <div>Choose a secure password</div>
                      <Requirement value={value} type="length">
                        8 characters
                      </Requirement>
                      <Requirement value={value} type="uppercase">
                        1 uppercase letter
                      </Requirement>
                      <Requirement value={value} type="lowercase">
                        1 lowercase letter
                      </Requirement>
                      <Requirement value={value} type="special">
                        1 special character
                      </Requirement>
                      <Requirement value={value} type="numeric">
                        1 number
                      </Requirement>
                      <Arrow {...arrowProps} />
                    </ul>
                  )}
              </FormGroup>
              {info && <Alert variant="success">{info}</Alert>}
              {error && <Alert variant="danger">{error?.data}</Alert>}
              <ActionButton
                disabled={loading}
                type="submit"
                label={t('phrases.register')}
                case="login"
                buttonColor="#c62828"
              />
            </Form>
          </RegisterForm>
        </Fade>
      </RegisterBlock>
      <RegisterExplainer>
        <LazyLoadImage
          src={bigphoto}
          alt={t('phrases.registerPageHeader')}
          width={'100%'}
          height={'100%'}
          style={{ objectFit: 'cover' }}
          effect="blur"
        />
      </RegisterExplainer>
    </RegistrationContainer>
  );
};

FormRegister.propTypes = {
  t: PropTypes.func,
};

const RegistrationContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

const RegisterBlock = styled('div')`
  width: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

const RegisterForm = styled('div')`
  width: 500px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RegisterExplainer = styled('div')`
  width: 50%;
  height: 80vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderPage = styled('h1')``;

const LeadPageContent = styled('h3')``;

const Form = styled('form')`
  display: flex;
  flex-flow: column;
`;

const FormGroup = styled('div')`
  display: flex;
  flex-flow: column;
  margin: 15px 0px;
`;

const FormLabel = styled('label')`
  color: gray;
`;

const FormControl = styled('input')`
  background-color: #f5f5f5;
  color: gray;
  font-family: 'Gilroy Bold';
  border: 0;
  border-radius: 25px;
  padding: 20px 15px;
`;

const FormText = styled('div')`
  font-size: 12px;
  padding: 15px;
`;

const Alert = styled('div')``;

export default withTranslation('common')(FormRegister);
