import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  activeCount = 0;
  inactiveCount = 0;
  constructor(private counter: CounterService) {}
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.inactiveCount++;
    this.counter.countersActiveInactive('for Inactive : ' + this.inactiveCount);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.activeCount++;
    this.counter.countersActiveInactive('for active : ' + this.activeCount);
  }
}
