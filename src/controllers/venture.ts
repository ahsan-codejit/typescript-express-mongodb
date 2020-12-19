import { Request, Response } from "express";
import IVenture from '../core/entities/venture';
import VentureFormater from '../core/services/ventureFormatter';
import { VentureUpdateOptions } from '../core/types/datatypes';
//services
import CreatorService from '../repositories/services/creator';
import UpdaterService from '../repositories/services/updater';
import FinderService from '../repositories/services/finder';
//models
import VentureModel from '../repositories/models/venture';

import BaseController from "./base";
export default class VentureController extends BaseController {
    public async create(req: Request, res: Response): Promise<any> {

        try {
            let venture: IVenture = new VentureFormater().format(req.body);
            //call repo to create
            let creatorService = new CreatorService();
            let serviceResponse = await creatorService.create(venture, VentureModel);

            return this.createSuccess(res, serviceResponse);
        } catch (error) {
            this.fail500(res, error);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            let venture: VentureUpdateOptions = new VentureFormater().formatUpdateData(req.body);
            console.log(venture);
            //call repo to create
            let updaterService = new UpdaterService();
            //will add id validation checking later
            let serviceResponse = await updaterService.update(req.params.id, venture, VentureModel);
            return this.success(res, serviceResponse);
        } catch (error) {
            return this.fail500(res, error);
        }
    }

    public async get(req: Request, res: Response) {
        try {
            let query = { id: req.params.id }
            let finder = new FinderService(VentureModel);
            let venture = await finder.findOne(query);
            let response = { data: venture };
            return this.success(res, response);
        } catch (error) {
            return this.fail500(res, error);
        }
    }

    public async getAll(req: Request, res: Response) {
        try {
            let query = {}
            let finder = new FinderService(VentureModel);
            let ventures = await finder.find(query);
            let response = { data: ventures };
            return this.success(res, response);
        } catch (error) {
            return this.fail500(res, error);
        }
    }
}