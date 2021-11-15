import React from 'react';
import PropTypes from 'prop-types';

import Contact from 'containers/Contact';
import { withTranslation } from 'utils/with-i18next';

export class ContactPage extends React.PureComponent {
  render() {
    const { t } = this.props;

    return <Contact t={t} />;
  }
}

ContactPage.propTypes = {
  t: PropTypes.func,
};

ContactPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(ContactPage);
