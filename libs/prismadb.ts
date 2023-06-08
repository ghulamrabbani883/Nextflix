import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();

if(process.env.NODE_ENV === 'production'){
    global.prismadb = client;
}

export default client; 

//nextjs hot preloading every code change and reruns bunch of prisma client isntances so too much prisma 
// so i created a global file not affected by hot reloading