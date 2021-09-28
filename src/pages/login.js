import React from 'react';
import PropTypes from 'prop-types';

import LoginContent from 'containers/Login';
import { withTranslation } from 'utils/with-i18next';

export class LoginPage extends React.PureComponent {
  render() {
    const { t } = this.props;

    return <LoginContent t={t} />;
  }
}

LoginPage.propTypes = {
  t: PropTypes.func,
};

LoginPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(LoginPage);
