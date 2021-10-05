import React from 'react';
import PropTypes from 'prop-types';

import Brands from 'containers/Brands';
import { withTranslation } from 'utils/with-i18next';

export class BrandsPage extends React.PureComponent {
  render() {
    const { t } = this.props;

    return <Brands t={t} />;
  }
}

BrandsPage.propTypes = {
  t: PropTypes.func,
};

BrandsPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(BrandsPage);
