import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'


const isssueMap: Record<Status, { label: string, color: 'red' | 'violet' | 'green' }> = {
    OPEN: { label: 'Open', color: 'red' },
    IN_PROGRESS: { label: 'In Progress', color: 'violet' },
    CLOSED: { label: 'Closed', color: 'green' }
}
function IssueStatusBadge({ status }: { status: Status }) {
    return (
        <Badge color={isssueMap[status].color} >{isssueMap[status].label}</Badge>
    )
}

export default IssueStatusBadge