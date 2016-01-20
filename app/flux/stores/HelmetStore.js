class HelmetStore {

    constructor() {
        this.bindActions(this.alt.getActions('helmet'));

        this.title = '';
        this.titleBase = 'Qvantel Omnichannel';
        this.description = 'Qvantel Omnichannel';
        this.statusCode = 200;
    }

    onUpdate(props) {
        Object.keys(props).forEach((key) => this[key] = props[key]);
    }
}

export default HelmetStore;
