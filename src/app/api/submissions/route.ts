import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

type SubmissionType = "contact" | "newsletter";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const type = body.type as SubmissionType;

    if (type === "contact") {
      const payload = {
        type,
        name: String(body.name || "").trim(),
        company: String(body.company || "").trim(),
        email: String(body.email || "").trim(),
        message: String(body.message || "").trim(),
        createdAt: new Date(),
      };

      if (!payload.name || !payload.email || !payload.message) {
        return NextResponse.json({ ok: false, message: "Name, email, and message are required." }, { status: 400 });
      }

      const db = await getDb();
      const result = await db.collection("contact_submissions").insertOne(payload);

      return NextResponse.json({ ok: true, id: result.insertedId.toString() });
    }

    if (type === "newsletter") {
      const payload = {
        type,
        email: String(body.email || "").trim(),
        createdAt: new Date(),
      };

      if (!payload.email) {
        return NextResponse.json({ ok: false, message: "Email is required." }, { status: 400 });
      }

      const db = await getDb();
      const result = await db.collection("newsletter_signups").insertOne(payload);

      return NextResponse.json({ ok: true, id: result.insertedId.toString() });
    }

    return NextResponse.json({ ok: false, message: "Invalid submission type." }, { status: 400 });
  } catch (error) {
    console.error("Submission API error", error);

    const errorMessage = error instanceof Error ? error.message : "";
    if (errorMessage.includes("querySrv") || errorMessage.includes("ENOTFOUND") || errorMessage.includes("ECONNREFUSED")) {
      return NextResponse.json(
        {
          ok: false,
          message: "MongoDB connection failed. Check the Atlas hostname in MONGODB_URI, DNS/SRV resolution, and network access.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ ok: false, message: "Unable to save submission." }, { status: 500 });
  }
}