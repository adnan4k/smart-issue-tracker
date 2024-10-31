import prisma from '@/prisma/client'
import { Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import IssueStatusBadge from '../components/IssueStatusBadge'
import IssueActions from './IssueActions'

async function IssuesPage() {
  const issues = await prisma.issue.findMany()
  return (
    <div>
      <IssueActions />
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>

        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}> {issue.title}</Link>
              </Table.Cell>
              <Table.Cell> <IssueStatusBadge status={issue.status} ></IssueStatusBadge> </Table.Cell>

              <Table.Cell>{issue.createdAt.toDateString()}</Table.Cell>

            </Table.Row>

          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default IssuesPage