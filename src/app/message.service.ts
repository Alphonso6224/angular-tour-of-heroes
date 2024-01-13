import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  /**
   * Fonction d'ajout d'un message
   * @param message
   */
  add(message: string) {
    this.messages.push(message);
  }

  /**
   * Fonction faire un nettoyage de
   * les messages
   */
  clear() {
    this.messages = [];
  }
}
