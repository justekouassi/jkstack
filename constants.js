export const prismaTs = `
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
`

export const schemaPrisma = `
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
`