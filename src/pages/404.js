import React from 'react';
import PropTypes from 'prop-types';

import Content404 from 'containers/404';
import { withTranslation } from 'utils/with-i18next';

export class Page404 extends React.PureComponent {
  render() {
    const { t } = this.props;

    return <Content404 t={t} />;
  }
}

Page404.propTypes = {
  t: PropTypes.func,
};

Page404.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(Page404);
