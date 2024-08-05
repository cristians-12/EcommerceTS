import { fetchProducts } from "@/utils/fetch";

export async function GET () {
    const data = await fetchProducts();
    return Response.json({data})
}