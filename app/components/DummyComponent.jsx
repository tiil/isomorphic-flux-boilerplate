import React from 'react';
import Helmet from 'react-helmet';

export default class DummyComponent extends React.Component {
    static displayName = 'DummyComponent';

    static propTypes = {
    }

    render() {
        return (
            <div>
                <span>Dummy</span>
            </div>
        );
    }
}
