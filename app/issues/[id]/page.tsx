import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import React from 'react'



interface Props {
    params: { id: string }
}
async function DetailIssuePage({ params }: Props) {

    const issue = await prisma.issue.findUnique({
        where: { id: parseInt(params.id) }

    }
    )
    if(!issue)
        return notFound();
    return (
        <div>
            <p>{issue?.title}</p>
            <p>{issue?.description}</p>
            <p>{issue?.status}</p>

        </div>
    )
}

export default DetailIssuePage