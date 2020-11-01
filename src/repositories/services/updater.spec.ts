import { v4 as uuid } from 'uuid';
import Updater from './updater';
//venture
import VentureModel from '../models/venture'
import IVenture from '../../core/entities/venture';
import { Roles, Statuses } from '../../core/types/enums';
import { VentureUpdateOptions } from '../../core/types/datatypes';

//mongodb
import mongoose from 'mongoose';
import mongoConnector from '../db/connector';
describe(`#UpdaterService`, () => {
    let venture: IVenture;
    beforeAll(async () => {
        process.env.MONGO_URL = "mongodb://localhost:27017/projectmanager";
        mongoConnector.connect(process.env.MONGO_URL);
        venture = {
            id: uuid(),
            name: 'ventureupdateservice',
            owner: {
                id: uuid(),
                name: 'Test',
                role: Roles.Manager
            },
            status: Statuses.Planned,
            participants: []
        }
        await new VentureModel(venture).save();
    });

    let updater: Updater = new Updater();
    it(`should create a venture`, async () => {
        let updateVenture = { status: Statuses.Active }
        let res: any = await updater.update<VentureUpdateOptions>(venture.id, updateVenture, VentureModel);
        expect(res).toBe(true);
        let createdVenture: any = await VentureModel.findOne({ id: venture.id });
        expect(createdVenture.status).toBe(Statuses.Active);
    });

    afterAll(async () => {
        await VentureModel.deleteMany({ name: venture.name });
        mongoose.connection.close();
    });
});