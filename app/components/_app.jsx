// import React, { Component, PropTypes } from 'react';
//
// import Header from 'components/header';
// import Footer from 'components/footer';
//
// if (process.env.BROWSER) require('styles/app.css');
// import ImmutableClass from './ImmComponent';
//
// export default class App extends ImmutableClass {
//
//     static propTypes = { children: PropTypes.element }
//     static contextTypes = { flux: PropTypes.object.isRequired }
//
//     state = { data: {i18n: this.context.flux.getStore('locale').getState() }}
//
//     componentDidMount() {
//         const { flux } = this.context;
//         flux.getStore('helmet').listen(this.handleTitleChange);
//     }
//
//     componentWillUnmount() {
//         const { flux } = this.context;
//         flux.getStore('helmet').unlisten(this.handleTitleChange);
//     }
//
//     handleTitleChange({ titleBase, title }) {
//         document.title = titleBase + title;
//     }
//
//     render() {
//         const { children } = this.props;
//
//         return (
//             <div>
//                 <Header />
//                 <hr />
//                 {children}
//                 <hr />
//                 <Footer />
//             </div>
//         );
//     }
// }
