type ROLE = "ADMIN" | "STAFF" | "CUSTOMER"
type STATUSES = "INACTIVE" | "ACTIVE"

export interface updateStaff {
    status:STATUSES
    id: number;
}

export interface createStaff {
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    contact: string;
    role: ROLE
}