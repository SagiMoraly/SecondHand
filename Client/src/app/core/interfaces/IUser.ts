import { IRealestateForsale } from "./IRealestateForsale"
import { IRealestateRent } from "./IRealestateRent"

export interface IUser{
    id : string  
    firstName : string, 
    lastName : string,
    email : string,
    bday : Date ,
    city : string,
    street : string,
    streetNumber : string,
    profilePic : string,
    realestateRent : IRealestateRent[] ,
    realestateForsale : IRealestateForsale[] 
}
