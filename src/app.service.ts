import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Mundo!';
  }
  nuevoEndPoint(): string {
    return '2 Pala';
  }
}
