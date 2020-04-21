import config  from "./config";
import { IMessage as Message, IJob as Job, IService as Service, IPartner as Partner, ICustomer as Customer } from "./types";

export {
  config,
}
export type IService = Service;
export type ICustomer = Customer;
export type IPartner = Partner;
export type IJob = Job;
export type IMessage = Message;
