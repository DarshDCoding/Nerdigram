import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = 
[
      {
        username: "aarav_shah",
        email: "aarav.shah@example.com",
        profileImage: "https://picsum.photos/seed/u1/400",
        name: "Aarav Shah",
        bio: "Loves photography and travel.",
        website: "https://aarav.dev",
        phone: "9000000001",
        gender: "male",
        isVerified: false,
      },
      {
        username: "meera_patel",
        email: "meera.patel@example.com",
        profileImage: "https://picsum.photos/seed/u2/400",
        name: "Meera Patel",
        bio: "Designer • Coffee lover",
        website: "https://meerapatel.com",
        phone: "9000000002",
        gender: "female",
        isVerified: true,
      },
      {
        username: "liam_west",
        email: "liam.west@example.com",
        profileImage: "https://picsum.photos/seed/u3/400",
        name: "Liam West",
        bio: "Tech nerd & gamer",
        website: "https://liamwest.io",
        phone: "9000000003",
        gender: "male",
        isVerified: false,
      },
      {
        username: "sofia_maris",
        email: "sofia.maris@example.com",
        profileImage: "https://picsum.photos/seed/u4/400",
        name: "Sofia Maris",
        bio: "Writer & bookworm",
        website: "https://sofiamaris.net",
        phone: "9000000004",
        gender: "female",
        isVerified: true,
      },
      {
        username: "ethan_hughes",
        email: "ethan.hughes@example.com",
        profileImage: "https://picsum.photos/seed/u5/400",
        name: "Ethan Hughes",
        bio: "Adventure seeker",
        website: "https://ethanhughes.com",
        phone: "9000000005",
        gender: "male",
        isVerified: false,
      },
      {
        username: "ruby_singh",
        email: "ruby.singh@example.com",
        profileImage: "https://picsum.photos/seed/u50/400",
        name: "Ruby Singh",
        bio: "Minimalist lifestyle enthusiast",
        website: "https://rubysingh.in",
        phone: "9000000050",
        gender: "female",
        isVerified: false,
      }
    ];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();