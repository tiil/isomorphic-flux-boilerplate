import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import MenuComponent from './MenuComponent';

const {BROWSER} = process.env;

if (BROWSER) require ('../less/app.less');

export default class IndexComponent extends React.Component {
    static displayName = 'IndexComponent';

    static propTypes = {
        children: React.PropTypes.any
    }

    render() {
        return (
            <div>
                <MenuComponent />

                <div>
                    {this.props.children}
                </div>
          </div>
        );
    }
}
