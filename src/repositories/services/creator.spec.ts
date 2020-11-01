import { v4 as uuid } from 'uuid';
import Creator from './creator';
//venture
import VentureModel from '../models/venture'
import IVenture from '../../core/entities/venture';
import { Roles, Statuses } from '../../core/types/enums';

//mongodb
import mongoose from 'mongoose';
import mongoConnector from '../db/connector';
describe(`#CreatorService`, () => {
    beforeAll(async () => {
        process.env.MONGO_URL = "mongodb://localhost:27017/projectmanager";
        mongoConnector.connect(process.env.MONGO_URL);
    });
    let venture: IVenture = {
        id: uuid(),
        name: 'createserviceventure',
        owner: {
            id: uuid(),
            name: 'Test',
            role: Roles.Manager
        },
        status: Statuses.Planned,
        participants: []
    }
    let creator: Creator<IVenture> = new Creator();
    it(`should create a venture`, async () => {
        let res: any = await creator.create(venture, VentureModel);
        expect(res).toBe(true);
        let createdVenture: any = await VentureModel.findOne({ id: venture.id });
        expect(createdVenture.name).toBe(venture.name);
    });

    afterAll(async () => {
        await VentureModel.deleteMany({ name: venture.name });
        mongoose.connection.close();
    });
});