import { getAllNews } from "@/lib/news";

export function GET(request) {
  return Response.json(getAllNews());
}
