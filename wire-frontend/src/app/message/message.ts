/**
 * New typescript file
 */
export class Message{
  messageId : number;
  senderName : string;
  receiverId : string;
  circleName : string;
  postedDate : any;
  streamType : string;
  message : string;
  tag : string;
    
    constructor() { }

  setSenderName(senderName) {
    this.senderName = senderName;
  }
  
  setReceiverName(receiverId) {
    this.receiverId = receiverId;
  }
  
  setCircleName(circleName) {
    this.circleName = circleName;
  }
  
  
}
