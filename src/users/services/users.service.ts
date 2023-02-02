import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(@Inject('MONGO') private readonly mongo: Db) {}

  getTasks() {
    const proves = this.mongo.collection('prove');
    return proves.find().toArray();
  }
}
