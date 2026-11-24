import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, service, budget, description } = body;

    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "Name, email, and description are required" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const submission = {
      name,
      email,
      company: company || "",
      service: service || "",
      budget: budget || "",
      description,
      submittedAt: new Date().toISOString(),
    };

    console.log("Contact form submission:", submission);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 },
    );
  }
}
