export interface Employee {
    name: string;
    email: string;
    companyName: string;
    contact: string;
    designation: Desigination;
    avatar: string;
}

export enum Desigination {
    SD = 'Software Developer',
    SSD = 'Senior Software Developer',
    QA = 'Quality Assurance',
    TL = 'Technical Lead',
    TM = 'Manager',
}

export interface Response {
    status?: string;
    message?: string;
}
