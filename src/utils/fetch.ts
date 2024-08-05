export const headers = new Headers({
    "Content-Type": "application/json",
})
export const fetchProducts = async ()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
}