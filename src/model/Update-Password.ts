export interface UpdatePassword {
    password: string;
    confirmPassword: string
}


export interface ChangePasswordModel {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string
}