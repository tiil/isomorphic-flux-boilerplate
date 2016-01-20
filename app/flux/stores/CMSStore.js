class CMSStore {
    constructor() {
        this.bindActions(this.alt.getActions('CMSActions'));
        this.state = {
            title: null,
            html: null
        }
    }

    getContent(content) {
        this.setState({
            title: content.title,
            html: content.html
        });
    }
}

export default CMSStore;
