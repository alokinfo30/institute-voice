import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService {
  // Minimal stub of the Prisma 'user' client to satisfy imports and typing
  // This is intentionally lightweight so the project can compile. Replace
  // with the real Prisma client/service when available.
  user = {
    findUnique: async (_args: { where: { email?: string; id?: string } }) => {
      return null;
    },
  } as {
    findUnique: (args: { where: { email?: string; id?: string } }) => Promise<any>;
  };
}
