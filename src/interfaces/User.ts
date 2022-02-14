export interface User {
    name:       string;
    lastname:   string;
    address:    Address;
    hobbies:    string[];
    isActive:   boolean;
    age:        number;
    role:       string;
    university: string;
    courses:    Course[];
}

export interface Address {
    street: string;
    city:   string;
    state:  string;
}

export interface Course {
    name:  string;
    price: string;
}
