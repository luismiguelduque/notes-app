import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as Sentry from "@sentry/node";

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    const transaction = Sentry.startTransaction({
      op: "test",
      name: "My First Test Transaction",
    });

    setTimeout(() => {
      console.log('test');
      try {
        // @ts-ignore
        foo();
      } catch (e) {
        console.log(e);
        Sentry.captureException(e);
      } finally {
        transaction.finish();
      }
    }, 99);
    return `This action returns all users 2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
