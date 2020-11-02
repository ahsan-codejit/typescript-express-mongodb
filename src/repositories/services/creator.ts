export default class Creator<T> {
    async create(entity: T, Model: any): Promise<Boolean> {
        const model = new Model(entity);
        const res = await model.save();
        if (res) {
            return true;
        }
        return false;
    }
}