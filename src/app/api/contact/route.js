import dbConnect from "@/utils/dbConnect";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConnect(); //call for Database connection happen

    await Contact.create(body);

    // after successfully send the data, return a response is must
    // like-> res.status(200).send("Message sent successfully!")
    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: "Server Error, Plz try again!",
      },
      {
        status: 500,
      }
    );
  }
}
