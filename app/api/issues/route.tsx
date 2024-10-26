import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client"; // Assuming your Prisma client is correctly configured at this path

// Define a Zod schema for validation
const createIssuesSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1)
});

export async function POST(request: NextRequest) {
  try {
    // Parse the request body as JSON
    const body = await request.json();

    // Validate the request body using Zod schema
    const validation = createIssuesSchema.safeParse(body);

    // If validation fails, return an error response with details
    if (!validation.success) {
      return NextResponse.json({ errors: validation.error.errors }, { status: 400 });
    }

    // If validation succeeds, create a new issue in the database
    const newIssue = await prisma.issue.create({
      data: {
        title: body.title,
        description: body.description,
      }
    });

    // Return the created issue as a response with a 201 status code
    return NextResponse.json(newIssue, { status: 201 });

  } catch (error) {
    // Handle potential runtime errors gracefully
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
