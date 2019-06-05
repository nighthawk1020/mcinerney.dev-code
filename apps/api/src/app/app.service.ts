import { Injectable } from '@nestjs/common';
import { Message } from '@website-code-angular/api-interface';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Teal' };
  }
}