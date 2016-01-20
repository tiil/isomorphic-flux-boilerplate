import React from 'react';
// import {intlShape} from 'react-intl';
import Immutable from 'seamless-immutable';
import shallowEqual from 'shallowequal';

export default class ImmutableClass extends React.Component {
	displayName = 'ImmutablePureComponent'

	state = {data: Immutable({})}

	static propTypes = {
		params: React.PropTypes.object,
		children: React.PropTypes.any
	}

	static contextTypes = {
    	history: React.PropTypes.object.isRequired,
    	location: React.PropTypes.object.isRequired,
		// intl: intlShape.isRequired,
		flux: React.PropTypes.object.isRequired
	}

	setImmState(state, cb) {
		const newstate = {
			data: Immutable(this.state.data).merge(state, {deep: true})
		};

		this.setState(newstate, () => {
			if (cb) cb();
		});
	}

    shouldComponentUpdate(nextProps, nextState, nextContext) {
		if (
			!shallowEqual(nextProps,   this.props) ||
			!shallowEqual(nextState,   this.state) ||
			!shallowEqual(nextContext, this.context)
		) {
			return true;
		} else {
			return false;
		}
    }
}
