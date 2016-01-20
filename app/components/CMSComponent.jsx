import React from 'react';
import Helmet from 'react-helmet';

class CMSComponent extends React.Component {
    static displayName = 'CMSComponent';

    static propTypes = {
        title: React.PropTypes.string,
        html: React.PropTypes.string
    }

    componentWillMount() {
        console.log("CMS COMPONENT MOUNTING");
    }

    render() {
        return (
            <div>
                <Helmet title={this.props.title} />
                <div dangerouslySetInnerHTML={{ __html: this.props.html }}/>
            </div>
        );
    }
}

export default CMSComponent;
