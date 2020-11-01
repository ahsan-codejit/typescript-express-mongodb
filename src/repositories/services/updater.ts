
export default class Updater {
    async update<T>(id: string, entity: T, model: any): Promise<Boolean> {
        const query = { id };
        const res = await model.findOneAndUpdate(query, entity);
        if (res) {
            return true;
        }
        return false;
    }
}