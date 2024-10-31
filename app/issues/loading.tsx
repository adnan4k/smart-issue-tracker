import { Table } from '@radix-ui/themes'
import React from 'react'
import IssueStatusBadge from '../components/IssueStatusBadge'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import IssueActions from './IssueActions'

function loadingIssuePage() {
    const issues = [1, 2, 3, 4]
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
                        <Table.Row key={issue}>
                            <Table.Cell>
                                <Skeleton />
                            </Table.Cell>
                            <Table.Cell>
                                <Skeleton />
                            </Table.Cell>

                            <Table.Cell>
                                <Skeleton />
                            </Table.Cell>

                        </Table.Row>

                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    )
}

export default loadingIssuePage