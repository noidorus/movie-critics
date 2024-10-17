import { User, Role } from '@prisma/client';

export class UserResponseDTO implements Omit<User, 'password'> {
  id: number;
  username: string;
  email: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: User) {
    this.username = user.username;
    this.email = user.email;
    this.role = user.role;
    this.id = user.id;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
