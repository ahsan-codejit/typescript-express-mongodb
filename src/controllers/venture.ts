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
// we will improve these responses later
import {
    InternalErrorResponse, CreateSuccessResponse,
    UpdateSuccessResponse, SuccessResponse,
    ErrorResponse, STATUS_ENUM
} from '../lib/responses';
export default class VentureController {
    public async create(req: Request, res: Response): Promise<any> {

        try {
            let venture: IVenture = new VentureFormater().format(req.body);
            //call repo to create
            let creatorService = new CreatorService();
            let serviceResponse = await creatorService.create(venture, VentureModel);
            if (!serviceResponse) {
                CreateSuccessResponse.status = STATUS_ENUM.ERROR;
            }
            return res.status(CreateSuccessResponse.statusCode).json(CreateSuccessResponse);
        } catch (error) {
            return res.status(InternalErrorResponse.statusCode).json(InternalErrorResponse);
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
            if (!serviceResponse) {
                UpdateSuccessResponse.status = STATUS_ENUM.ERROR;
            }
            return res.status(UpdateSuccessResponse.statusCode).json(UpdateSuccessResponse);
        } catch (error) {
            return res.status(InternalErrorResponse.statusCode).json(InternalErrorResponse);
        }
    }

    public async get(req: Request, res: Response) {
        try {
            let query = { id: req.params.id }
            let finder = new FinderService(VentureModel);
            let venture = await finder.findOne(query);
            let response = { ...SuccessResponse, data: venture };
            res.status(SuccessResponse.statusCode).json(response);
        } catch (error) {
            return res.status(ErrorResponse.statusCode).json(ErrorResponse);
        }
    }

    public async getAll(req: Request, res: Response) {
        try {
            let query = {}
            let finder = new FinderService(VentureModel);
            let ventures = await finder.find(query);
            let response = { ...SuccessResponse };
            response.data = ventures;
            return res.status(SuccessResponse.statusCode).json(response);
        } catch (err) {
            return res.status(ErrorResponse.statusCode).json(ErrorResponse);
        }
    }
}