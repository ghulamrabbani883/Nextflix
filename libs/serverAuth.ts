import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prismadb from '@/libs/prismadb';

const serverAuth = async (req: NextApiRequest) =>{
    //fetching our login user session
    const session = await getSession({ req })
}


