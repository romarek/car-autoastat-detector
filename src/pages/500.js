import React from 'react';
import PropTypes from 'prop-types';

import Content500 from 'containers/500';
import { withTranslation } from 'utils/with-i18next';

export class Page500 extends React.PureComponent {
  render() {
    const { t } = this.props;

    return <Content500 t={t} />;
  }
}

Page500.propTypes = {
  t: PropTypes.func,
};

Page500.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(Page500);
