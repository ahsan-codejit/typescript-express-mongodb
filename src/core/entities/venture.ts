import { VentureOwner, VentureParticipant } from '../types/datatypes';
import { Statuses } from '../types/enums';

export default interface Venture {
    id: string,
    name: string,
    owner: VentureOwner,
    status: Statuses,
    participants?: Array<VentureParticipant>,
    [propName: string]: any
}