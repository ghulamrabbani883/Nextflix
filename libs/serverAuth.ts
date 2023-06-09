import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prismadb from '@/libs/prismadb';

const serverAuth = async (req: NextApiRequest) =>{
    //fetching our login user session
    const session = await getSession({ req })

    if(!session?.user?.email){
        throw Error('not signed in')
    }

    const currentUser = await prismadb.user.findUnique({
        where:{
            email: session.user.email,
        }
    });

    if(!currentUser){
        throw new Error('not signed in');
    }

    return {currentUser};
}

export default serverAuth;


