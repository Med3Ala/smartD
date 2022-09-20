export interface Device {
    _id: string;
    name: string;
    customer: string;
    customer_id: string;
    creator: string;
    creator_id: string;
    type: string;
    communication_type: string;
    hasMaster: boolean;
    slaveNbr: number;
    creating_date: string;
    updating_date: string;
    __v: number;
}