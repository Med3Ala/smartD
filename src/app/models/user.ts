export interface UserData {
    code: string;
    message: string;
    success: boolean;
    result: {
        currentUser: {
            _id: string;
            name: string;
            login: string;
            passwordHash: string;
            customer: string;
            customer_id: string;
            creating_date: string;
            __v: number;
            isAdmin: boolean;
            hasAccessToAllDevices: boolean;
            deviceArray: [];
        }
        accessToken: string;
    }
}
export interface User {
    _id: string;
    name: string;
    login: string;
    passwordHash: string;
    customer: string;
    customer_id: string;
    creating_date: string;
    __v: number;
    isAdmin: boolean;
    hasAccessToAllDevices: boolean;
    deviceArray: [];
}