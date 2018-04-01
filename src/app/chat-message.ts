export class ChatMessage {
  sender: string;
  msgcontent: string;
  sent_time: string;

  constructor(sender: string, msgcontent: string, sent_time: string) {
    this.sender = sender;
    this.msgcontent = msgcontent;
    this.sent_time = sent_time;
  }
}
