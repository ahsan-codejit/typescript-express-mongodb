

export default class Creator<T> {
    async create(entity: T, Model: any): Promise<Boolean> {
        const model = new Model(entity);
        const promise = await model.save();
        if (promise) {
            return true;
        }
        return false;
    }
}