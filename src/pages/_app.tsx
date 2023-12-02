import '@/styles/globals.css';
import '@mantine/core/styles.css';
import 'mantine-datatable/styles.layer.css';
import '@mantine/dates/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';

import { theme } from '@/shared/constants/theme';

interface PageProps {
    session?: Session;
}

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps<PageProps>) {
    const queryClient = new QueryClient();

    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
                <MantineProvider theme={theme}>
                    <Component {...pageProps} />

                    <ToastContainer
                        position="top-center"
                        draggable
                        pauseOnHover
                    />
                </MantineProvider>
                <ReactQueryDevtools
                    initialIsOpen={false}
                    position="bottom-right"
                />
            </QueryClientProvider>
        </SessionProvider>
    );
}
