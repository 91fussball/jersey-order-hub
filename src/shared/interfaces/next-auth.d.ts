import NextAuth, { DefaultSession } from 'next-auth';

import { User as UserInterface } from '@/shared/interfaces/account.interface';

declare module 'next-auth/jwt' {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT extends UserInterface {}
}

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: User;
        expires: string;
        token: string;
        refreshToken: string;
    }

    interface User extends UserInterface {}
}
