import React from 'react';
import PropTypes from 'prop-types';

import CarModelComponent from 'containers/CarModel';
import { withTranslation } from 'utils/with-i18next';

export class CarModel extends React.PureComponent {
  render() {
    const { t } = this.props;

    return <CarModelComponent t={t} />;
  }
}

CarModel.propTypes = {
  t: PropTypes.func,
};

CarModel.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(CarModel);
