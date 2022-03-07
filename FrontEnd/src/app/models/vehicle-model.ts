export interface ChassisId {

    chassisSeries: string;
    chassisNumber: number;

}

export interface VehicleModel {

    chassisId: ChassisId;
    type: string;
    numberOfPassengers: number;
    color: string;

}

