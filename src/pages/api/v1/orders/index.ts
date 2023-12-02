import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/prisma';
import { nanoid } from 'nanoid';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'GET') {
        const { page, limit } = req.query;
        if (!page) res.status(400).json({ message: 'page is required' });
        if (!limit) res.status(400).json({ message: 'limit is required' });

        const intLimit = parseInt(limit as string);
        const intPage = parseInt(page as string);
        const skip = (intPage - 1) * intLimit;

        const [response, total] = await Promise.all([
            prisma.orders.findMany({
                take: intLimit,
                skip,
            }),
            prisma.orders.count(),
        ]);

        res.status(200).json({
            message: 'Success',
            data: {
                data: response,
                meta: {
                    limit: intLimit,
                    page: intPage,
                    total,
                },
            },
        });
    }

    if (req.method === 'POST') {
        const data = { ...req.body, id: nanoid(5) };
        const response = await prisma.orders.create({ data });

        res.status(200).json({
            message: 'Success',
            data: response,
        });
    }
}
