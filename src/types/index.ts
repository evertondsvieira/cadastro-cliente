import { ReactNode } from "react";


export interface ContactProps {
  fullName: string;
  email: string;
  phone: string;
  date: Date;
}

export interface ClientProps {
  client: {
    fullName: string;
    email: string;
    phone: string;
    date: Date;
    contacts: ContactProps[];
  };
}

export interface ISomeProviderProps {
  children: ReactNode;
}
