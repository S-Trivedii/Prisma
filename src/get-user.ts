import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // return multiple array of records.
  const users = await prisma.user.findMany({});
  console.log(users);

  // used to retrived single record that matches a unique identifier (like a primary key) otherwise null
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });
  console.log(user);
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
