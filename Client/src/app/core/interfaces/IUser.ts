

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

interface IRealestateRent{}
interface IRealestateForsale{}