import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

export default class MenuComponent extends React.Component {
    static displayName = 'MenuComponent';

    static propTypes = {
        children: React.PropTypes.any
    }

    render() {
        return (
            <ul>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
                <li>
                    <Link to='/checkout'>Checkout</Link>
                </li>
                <li>
                    <Link to='/account'>Account</Link>
                </li>
                <li>
                    <Link to='/cmslink'>CMS Link</Link>
                </li>
                <li>
                    <Link to='/othercmslink'>Another CMS link</Link>
                </li>
            </ul>
        );
    }
}
