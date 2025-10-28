// import { NextResponse } from "next/server";
// import { getConnection } from "@/lib/db";
// import type { RowDataPacket, ResultSetHeader } from "mysql2";

// // ✅ GET all schools
// export async function GET() {
//   try {
//     const db = await getConnection();
//     const [rows] = await db.execute<RowDataPacket[]>("SELECT * FROM schools ORDER BY id DESC");
//     await db.end();
//     return NextResponse.json(rows);
//   } catch (error) {
//     console.error("Database Error:", error);
//     return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
//   }
// }

// // ✅ POST - Add new school
// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { name, address, city, state, contact, image, email_id } = body as {
//       name: string;
//       address: string;
//       city: string;
//       state: string;
//       contact: string;
//       image?: string | null;
//       email_id: string;
//     };

//     // validation
//     if (!name || !address || !city || !state || !contact || !email_id) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const db = await getConnection();
//     const [result] = await db.execute<ResultSetHeader>(
//       `INSERT INTO schools (name, address, city, state, contact, image, email_id)
//        VALUES (?, ?, ?, ?, ?, ?, ?)`,
//       [name, address, city, state, contact, image || null, email_id]
//     );

//     await db.end();

//     return NextResponse.json({
//       message: "School added successfully",
//       id: result.insertId,
//     });
//   } catch (error: any) {
//     console.error("Database Error (POST):", error.message);
//     return NextResponse.json(
//       { error: error.message || "Database insertion failed" },
//       { status: 500 }
//     );
//   }
// }


export async function GET() {
  return new Response(JSON.stringify({ message: "API disabled for demo" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST() {
  return new Response(
    JSON.stringify({ message: "API disabled for demo" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
