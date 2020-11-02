
import { v4 as uuid } from 'uuid';
import IVenture from '../entities/venture';
import { Statuses } from '../types/enums';
import { VentureUpdateOptions } from '../types/datatypes';
export default class IssueFormatter {

    public format(params: any): IVenture {

        let venture: IVenture = {
            id: uuid(),
            name: params.name,
            owner: params.owner,
            status: Statuses.Planned,
            participants: params.participants
        }
        return venture;
    }

    public formatUpdateData(params: any): VentureUpdateOptions {
        let venture: VentureUpdateOptions = {};
        if (params.name) venture.name = params.name;
        if (params.status) venture.status = params.status;
        if (params.participants) venture.participants = params.participants;
        return venture;
    }
} 