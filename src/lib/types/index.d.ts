import { IconDefinition } from "@fortawesome/react-fontawesome";

export interface IService {
  icon: IconDefinition;
  name: string;
  description?: string;
}

export interface ICustomer {
  logo: string;
  name: string;
}

export interface IPartner {
  logo: string;
  name: string;
}

export interface IJob {
  id: string;
  title: string;
  preface?: string;
  requirements: string[];
}

export interface IMessage {
  name: string;
  email: string;
  message: string;
}
