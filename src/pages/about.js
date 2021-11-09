import React from 'react';
import PropTypes from 'prop-types';

import PageInBuild from 'containers/PageBuild';
import { withTranslation } from 'utils/with-i18next';

export class AboutPage extends React.PureComponent {
  render() {
    const { t } = this.props;

    return <PageInBuild t={t} />;
  }
}

AboutPage.propTypes = {
  t: PropTypes.func,
};

AboutPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(AboutPage);
