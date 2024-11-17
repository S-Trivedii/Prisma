// first import prisma client
import { PrismaClient } from "@prisma/client";
import { create } from "domain";

const prisma = new PrismaClient();

async function main() {
  const createdUser = await prisma.user.create({
    data: {
      email: "harkirat@gmail.com",
      name: "harkriat",
    },
  });

  // all the properties email and name is directly accessible instead of createdUser.data.email or createdUser.data.name
  console.log("Created user: ", createdUser);
  console.log("Email: ", createdUser.email);
  console.log("Name ", createdUser.name);
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
