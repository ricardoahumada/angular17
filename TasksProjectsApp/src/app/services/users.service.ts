import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _users: User[] = [
    { id: 1, name: 'john', email: 'j@j.com', position: 'manager' },
    { id: 2, name: 'anna', email: 'a@a.com', position: 'PO' },
    { id: 3, name: 'jimmy', email: 'jim@j.com', position: 'Developer' },
    { id: 4, name: 'luis', email: 'luim@j.com', position: 'Developer' },
  ];

  constructor() {}

  getUsers(): User[] {
    return this._users;
  }

  getAnUser(uid: number): User | undefined {
    return this._users.find((aU) => aU.id == uid);
  }

  deleteAuser(uid: number): boolean {
    this._users = this._users.filter((aU) => aU.id != uid);
    return true;
  }

  getUsersByIds(uids: number[] | undefined) {
    if(uids) return this._users.filter((aU) => uids.includes(aU.id));
    else return [];
  }
}
