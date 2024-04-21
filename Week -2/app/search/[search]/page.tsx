async function getProducts(search: any) {
    const res = await fetch("http://localhost:3000/api/products", { cache: 'no-store' });
  
    const products1 = await res.json();
    const filteredProducts = products1.filter((product: any) => {
      const productName = product.name.toLowerCase();
      const productDescription = product.description.toLowerCase();
      const searchTerm = search.toLowerCase();
      return productName.includes(searchTerm) || productDescription.includes(searchTerm);
    });
  
    return filteredProducts;
  }
import ProductCard from "@/app/home/productCard";
import Link from "next/link";
import Search from "@/app/home/search";
export default async function Product ({ params }: { params: { search: string } }){
    const products = await getProducts(params.search)
    return (
        <div>
            <Search isSearch={false} />
            <div className="p-6  flex flex-col  mt-20 min-h-screen  hell">
            <div>
                <h1 className="text-4xl font-bold">Search Results for: {params.search}</h1>
            </div>
          <div className="flex-1 mt-6 grid gap-6 p-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {products.length > 0 ? (
              products.map((product: any, index: number) => (
                <Link href={`/home/${product.id}`} key={index}>
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  howOld={product.howOld}
                  image={product.images}
                  isSold={product.buyerId !== null}
                />
                </Link>
              ))
            ) : (
              <p>No items found for the search result.</p>
            )}
          </div>

            </div>
           
        </div>
      );

}