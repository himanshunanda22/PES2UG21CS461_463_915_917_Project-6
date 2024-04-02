"use client";
import Search from "./search";
import Sidebar from "./sideBar";
import ProductCard from "./productCard";
import { useState } from "react";
import { useEffect } from "react";
import SkeletonCard from "./skeletonCard";
import Link from "next/link";

async function getProducts()  {
    const res = await fetch("http://localhost:3000/api/products",{ cache: 'no-store' });
    
    const products1 = await res.json();
    // console.log(products)
    return products1;

    
    }

export default  function Component() {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [productsJson, setProductsJson] = useState([]);
    const [p, setP] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setIsLoaded(true);
            setProducts(products);
            setProductsJson(products);
            setP(products);
            // Store products JSON in a constant
            // console.log(productsJson);
          };
        
          fetchProducts();
      }, []);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedPrice, setSelectedPrice] = useState(0);
    const handlePriceSelect = (price:any) => {
        setSelectedPrice(price);
        if(price == 1){
            setProducts(productsJson.filter((product:any) => product.price < 500))
        }
        else if(price == 2){
            setProducts(productsJson.filter((product:any) => product.price > 500 && product.price < 1000))
        }
        else if(price == 3){
            setProducts(productsJson.filter((product:any) => product.price > 1000 && product.price < 5000))
        }
        else{
            setProducts(p)
        }
      }
    const handleCategorySelect = (category:any) => {

      if (category === 0) {
        setSelectedCategory(category);
        setProductsJson(p);
        setProducts(p);
      }
      else {
        setSelectedCategory(category);
        console.log(category)
        setProducts(p.filter((product:any) => product.category == category))
        setProductsJson(p.filter((product:any) => product.category == category))
      }

      };
  return (
    <div className="flex flex-col min-h-screen">
    <div className="h-[73px]">
    <Search isSearch={true}/>
    </div>
    
     
      <main className="flex flex-1">
        <div className="w-64">
        <Sidebar
        onPriceSelect={handlePriceSelect}
      onCategorySelect={handleCategorySelect}
      />

        </div>
     
        <div className="flex-1 grid gap-6 p-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          
          {
            isLoaded?
            products.map((product:any, index:number) => {

                return (
                    <Link href={`/home/${product.id}`} key={index}>
                    <ProductCard key={index} id={product.id} name={product.name} price={product.price} howOld={product.howOld} image={product.images} />
                    </Link>
                );
            }
          )
          :
          [1,2,3,4,,5,6,7,8].map((n) => <SkeletonCard key={n} />)
}
        </div>
      </main>
    </div>
  )
}


