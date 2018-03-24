/**
 * New typescript file
 */
export class User{
    username : string;
    name : string;
    password : string;
    
    users : object[];
    
    constructor() { }
  
    getUser(){
        return this.users;
        }
    }
