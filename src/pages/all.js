import React from 'react';
import PropTypes from 'prop-types';

import AllProducts from 'containers/AllProducts';
import { withTranslation } from 'utils/with-i18next';

export class AllCarsPage extends React.PureComponent {
  render() {
    const { t } = this.props;

    return <AllProducts t={t} />;
  }
}

AllCarsPage.propTypes = {
  t: PropTypes.func,
};

AllCarsPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(AllCarsPage);
