import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutate } from 'restful-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Fade from 'react-reveal/Fade';

import ActionButton from '../../components/Slider/ActionButton';
import GoogleLoginComponent from './GoogleLogin';
import GoogleLoginHooks from './GoogleLoginHooks';
import GoogleLogoutComponent from './GoogleLogout';
import GoogleLogoutHooks from './GoogleLogoutHooks';

const bigphoto =
  'https://images.pexels.com/photos/457418/pexels-photo-457418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1280';

const Login = ({ t }) => {
  const router = useRouter();
  const { mutate: login, loading, error } = useMutate({
    verb: 'POST',
    path: 'login',
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    login(data).then(_ => router.push('/'));
  };

  return (
    <LoginModuleContainer>
      <LoginPartial>
        <Fade>
          <LoginForm>
            <HeaderPage>{t('phrases.loginPageHeader')}</HeaderPage>
            <LeadPageContent>{t('phrases.loginPageLeadContent')}</LeadPageContent>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <GoogleLoginComponent />
              {/* <GoogleLogoutComponent />
              <GoogleLoginHooks />
              <GoogleLogoutHooks /> */}
              <FormGroup controlId="formBasicEmail">
                <FormLabel>{t('phrases.loginPageEmail')}</FormLabel>
                <FormControl ref={register} type="email" name="email" placeholder="Enter email" />
                <FormText>{t('phrases.loginPageSafetyDeclaration')}</FormText>
              </FormGroup>
              <FormGroup controlId="formBasicPassword">
                <FormLabel>{t('phrases.loginPagePassword')}</FormLabel>
                <FormControl ref={register} name="password" type="password" placeholder="Password" />
              </FormGroup>
              {error && <Alert variant="danger">{error?.data}</Alert>}
              <div>
                <Link href="reset-password" className="link-style">
                  <FormText style={{ cursor: 'pointer' }}>{t('phrases.loginPageResetPassword')}</FormText>
                </Link>
              </div>
              <ActionButton
                disabled={loading}
                type="submit"
                label={t('phrases.login')}
                case="login"
                buttonColor="#c62828"
              />
            </Form>
          </LoginForm>
        </Fade>
      </LoginPartial>
      <ContentPartial>
        <LazyLoadImage
          src={bigphoto}
          alt={t('phrases.loginPageHeader')}
          width={'100%'}
          height={'100%'}
          style={{ objectFit: 'cover' }}
          effect="blur"
        />
      </ContentPartial>
    </LoginModuleContainer>
  );
};

Login.propTypes = {
  t: PropTypes.func,
};

const LoginModuleContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

const LoginPartial = styled('div')`
  width: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LoginForm = styled('div')`
  width: 500px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

const ContentPartial = styled('div')`
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

export default withTranslation('common')(Login);
