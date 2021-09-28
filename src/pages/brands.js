import React from 'react';
import PropTypes from 'prop-types';

import Home from 'containers/Home';
import { withTranslation } from 'utils/with-i18next';

export class BrandsPage extends React.PureComponent {
  render() {
    const { t } = this.props;

    return <Home t={t} />;
  }
}

BrandsPage.propTypes = {
  t: PropTypes.func,
};

BrandsPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(BrandsPage);
