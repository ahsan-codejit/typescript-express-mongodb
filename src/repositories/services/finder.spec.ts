import { v4 as uuid } from 'uuid';
import Finder from './finder';
//venture
import VentureModel from '../models/venture'
import IVenture from '../../core/entities/venture';
import { Roles, Statuses } from '../../core/types/enums';

//mongodb
import mongoose from 'mongoose';
import mongoConnector from '../db/connector';
describe(`#FinderService`, () => {
    let venture: IVenture;
    beforeAll(async () => {
        process.env.MONGO_URL = "mongodb://localhost:27017/projectmanager";
        mongoConnector.connect(process.env.MONGO_URL);

        venture = {
            id: uuid(),
            name: 'venturefinderservice',
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

    let finder: Finder = new Finder(VentureModel);
    it(`should create a venture`, async () => {
        let createdVenture: any = await finder.findOne({ id: venture.id });
        expect(createdVenture.name).toBe(venture.name);
        let createdVentures: any = await finder.find({ name: venture.name });
        expect(Array.isArray(createdVentures)).toBe(true);
    });

    afterAll(async () => {
        await VentureModel.deleteMany({ name: venture.name });
        mongoose.connection.close();
    });
});