export default class Finder {
    private model: any;
    constructor(model: any) {
        this.model = model;
    }
    async findOne(query: any): Promise<any> {
        let agent = await this.model.findOne(query)
        return Promise.resolve(agent);
    }

    async find(query: any): Promise<any[]> {
        let agents = await this.model.find(query);
        return Promise.resolve(agents);
    }
}