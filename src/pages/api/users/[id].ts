import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/prisma';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'GET') {
        const { id } = req.query;

        const response = await prisma.orders.findFirst({
            where: { id: id as string },
        });

        res.status(200).json({
            message: 'Success',
            data: response,
        });
    }

    if (req.method === 'PATCH') {
        const { id } = req.query;
        const body = req.body;

        const response = await prisma.orders.update({
            where: { id: id as string },
            data: body,
        });

        res.status(200).json({
            message: 'Success',
            data: response,
        });
    }
}
