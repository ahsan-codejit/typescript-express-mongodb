import { VentureOwner, VentureParticipant } from '../types/datatypes';
import { Statuses } from '../types/enums';

export default interface Venture {
    name: string,
    owner: VentureOwner,
    state: Statuses,
    participants: Array<VentureParticipant>
}