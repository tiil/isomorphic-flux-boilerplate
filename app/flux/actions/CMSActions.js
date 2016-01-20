class CMSActions {
    getContent(url) {
        return (dispatch, alt) => alt.resolve(async () => {
            console.log("GETTING CONTENT", url);

            // let data = await this.alt.axios.get('nönnönnöö');
            const content = {
                title: 'CMS Page title',
                meta: 'Meta tag content',
                html: `<h1>CMS page content</h1><div>Content</div><div>URL is ${url}</div>`
            };
            this.dispatch(content);
        });
    }
}

export default CMSActions;
