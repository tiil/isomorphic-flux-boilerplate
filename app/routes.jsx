import React from 'react';
import { Route } from 'react-router';

// import { generateRoute } from 'utils/localized-routes';
// import { isConnected } from 'utils/routes-hooks';
import DummyComponent from './components/DummyComponent'; // eslint-disable-line
import AltContainer from 'alt-container';
import CMSComponent from './components/CMSComponent'; // eslint-disable-line
import IndexComponent from './components/IndexComponent'; // eslint-disable-line

export default function (flux) { /* eslint react/display-name: 0 */
    return (
        <Route path='/' component={IndexComponent}>
            <Route path='/shop' component={DummyComponent} />
            <Route path='/cart' component={DummyComponent} />
            <Route path='/checkout' component={DummyComponent} />
            <Route path='/account' component={DummyComponent} />
            <Route path='*'
                onEnter={(props) => flux.actions.CMSActions.getContent(props.location.pathname)}
                component={(props) => {
                    return (
                        <AltContainer store={
                            flux.stores.CMSStore
                        }>
                            <CMSComponent {...props} />
                        </AltContainer>
                    )
                }}
            />
        </Route>
    );
}
//
//
//     <Route component={ require('./components/app') }>
//       { generateRoute({
//         paths: [ '/', '/users', '/utilisateurs' ],
//         component: require('./components/users')
//       }) }
//       { generateRoute({
//         paths: [ '/account', '/mon-compte' ],
//         component: require('./pages/account'),
//         onEnter: isConnected(flux)
//       }) }
//       { generateRoute({
//         paths: [ '/guides' ],
//         component: require('./components/guides')
//       }) }
//       { generateRoute({
//         paths: [ '/profile/:seed', '/profil/:seed' ],
//         component: require('./components/profile')
//       }) }
//       { generateRoute({
//         paths: [ '/login', '/connexion' ],
//         component: require('./pages/login')
//       }) }
//       <Route path='*' component={ require('./pages/not-found') } />
//     </Route>
//   );
// }
