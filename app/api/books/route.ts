import books from "@/app/api/db";

export async function GET(){
    return Response.json({books});
}
