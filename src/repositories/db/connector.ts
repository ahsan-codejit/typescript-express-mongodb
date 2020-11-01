import mongoose from 'mongoose';
class Connector {
    public connect(mongoUrl: string) {
        mongoose.connect(
            mongoUrl,
            {
                useNewUrlParser: true,
                useUnifiedTopology: false,
                useCreateIndex: true,
                useFindAndModify: false
            }
        );
    }
}

export default new Connector();