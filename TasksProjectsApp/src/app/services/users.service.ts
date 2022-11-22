import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _users: User[] = [
    { uid: 1, name: 'john', email: 'j@j.com', position: 'manager' },
    { uid: 2, name: 'anna', email: 'a@a.com', position: 'PO' },
    { uid: 3, name: 'jimmy', email: 'jim@j.com', position: 'Developer' },
  ];

  constructor() {}

  getUsers(): User[] {
    return this._users;
  }

  getAnUser(uid: number): User | undefined {
    return this._users.find((aU) => aU.uid == uid);
  }

  deleteAuser(uid: number): boolean {
    this._users = this._users.filter((aU) => aU.uid != uid);
    return true;
  }

  getUsersByIds(uids: number[] | undefined) {
    if(uids) return this._users.filter((aU) => uids.includes(aU.uid));
    else return [];
  }
}
