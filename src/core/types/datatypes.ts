import { Roles } from './enums';
export interface Employee {
    id: string,
    [propName: string]: any
}

export interface VentureOwner extends Employee {
    role: Roles.Manager
}

export interface VentureParticipant extends Employee {
    role: Roles
}