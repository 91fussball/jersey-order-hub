import {
    GetServerSideProps,
    GetServerSidePropsContext,
    GetServerSidePropsResult,
} from 'next';
import { Session } from 'next-auth';

import { auth } from '@/shared/lib/auth-options';

type RecordType = Record<string, unknown>;

export function ssrWithAuth<T extends RecordType>(
    handler: (
        context: GetServerSidePropsContext,
        session: Session | null,
    ) => Promise<GetServerSidePropsResult<T>>,
): GetServerSideProps<T> {
    return async (context) => {
        const session = await auth(context);

        const currentPath = context.resolvedUrl;

        if (!session) {
            return {
                redirect: {
                    destination: '/auth/login?callbackUrl=' + currentPath,
                    permanent: false,
                },
            };
        }

        return handler(context, session);
    };
}
