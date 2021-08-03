import { User } from './user';

export class Person {

  id?: number;
  name!: string;
  email!: string;
  telefone?: string;
  cpf?: string;
  user: User = new User;

}
