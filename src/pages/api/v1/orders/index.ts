import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/prisma';
import { nanoid } from 'nanoid';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'GET') {
        const { page, limit, id, name, phone_number, jersey_type, size } =
            req.query;

        if (!page) res.status(400).json({ message: 'page is required' });
        if (!limit) res.status(400).json({ message: 'limit is required' });

        const intLimit = parseInt(limit as string);
        const intPage = parseInt(page as string);
        const skip = (intPage - 1) * intLimit;
        const where: Record<string, any> = {};

        if (id) where.id = { contains: id };
        if (name) where.name = { contains: name };
        if (phone_number) where.phone_number = { contains: phone_number };

        if (jersey_type) where.jersey_type = jersey_type;
        if (size) where.size = size;

        const [response, total] = await Promise.all([
            prisma.orders.findMany({
                skip,
                take: intLimit,
                where,
                orderBy: {
                    created_at: 'desc',
                },
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
        try {
            const data = { ...req.body, id: nanoid(5) };
            const response = await prisma.orders.create({ data });

            res.status(200).json({
                message: 'Success',
                data: response,
            });
        } catch (error) {
            console.log(error);

            res.status(500).json({
                message: 'Error',
                data: error,
            });
        }
    }
}
