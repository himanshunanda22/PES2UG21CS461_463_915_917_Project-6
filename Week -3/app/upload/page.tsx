"use client";
import Search from "../home/search";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {useRouter} from "next/navigation";
export default function Component() {
    const router = useRouter()
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productAge, setProductAge] = useState("");
  const [productImageLink, setProductImageLink] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState(0);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("user");
    const user = storedUser && JSON.parse(storedUser);
    const userId = user[0].id;

    // Create a new product object using the form data
    const newProduct = {
      name: productName,
      description: productDescription,
      howOld: productAge,
      price: parseInt(productPrice),
      images: productImageLink,
      category: productCategory + 1,
      sellerId: userId,

    };
    console.log(newProduct);

    // Send a POST request to the endpoint
    fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        router.push(`/home`);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div className="sal">
      <Search isSearch={false} />
       <div className="flex mt-20 justify-center items-center min-h-[90vh]">
        
        <div className="shadow-lg rounded-lg w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className=" text-2xl font-semibold text-gray-900">
            Upload Product
          </h1>
          <form className="mt-5 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md  p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product-name">Product Name</Label>
                <Input
                  className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  id="product-name"
                  placeholder="Product Name"
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-description">Product Description</Label>
                <Input
                  className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  id="product-description"
                  placeholder="Product Description"
                  type="text"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-age">Age of the Product</Label>
                <Input
                  className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  id="product-age"
                  placeholder="Age of the Product"
                  type="text"
                  value={productAge}
                  onChange={(e) => setProductAge(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-image-link">Image Link</Label>
                <Input
                  className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  id="product-image-link"
                  placeholder="Image Link"
                  type="text"
                  value={productImageLink}
                  onChange={(e) => setProductImageLink(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-category">Category</Label>
                <select
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border h-10 pl-2 pr-4 border-gray-300 rounded-md"
                  id="product-category"
                  value={productCategory}
                  onChange={(e) => setProductCategory(parseInt(e.target.value))}
                >
                  <option value={0}>SoCs</option>
                  <option value={1}>Processors</option>
                  <option value={2}>Sensors</option>
                  <option value={3}>Displays</option>
                  <option value={4}>Memory</option>
                  <option value={5}>Connectivity</option>
                  <option value={6}>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-price">Price</Label>
                <Input
                  className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  id="product-price"
                  placeholder="Price"
                  type="text"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Button className="w-full" type="submit">
                Upload Product
              </Button>
            </div>
          </form>
        </div>
      </div>

    </div>
   
  );
}
