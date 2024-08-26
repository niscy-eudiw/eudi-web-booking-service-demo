import { BookingService } from "@/server";
import { NextResponse } from "next/server";
 
import Container from "typedi";

const bookingService = Container.get(BookingService);

export async function GET() { //TODO return data for specific ID 
  const bookings = await bookingService.findAll();
  console.log("bookings", bookings);

  return NextResponse.json(bookings);
}

export async function POST(request: Request) {
  try {
    //TODO Check if mobile
    const data = await request.json();
    const booking = await bookingService.create(data);
    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
