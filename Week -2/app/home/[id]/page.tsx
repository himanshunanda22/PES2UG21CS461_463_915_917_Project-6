import BuyButton from "./buyButton"
import Search from "../search"
async function getProduct(id:string) {
    const data = await fetch(`http://localhost:3000/api/products/${id}`)
    const product = await data.json()
    console.log(product)
    return product
    
}
export default async function Product ({ params }: { params: { id: string } }){
   const  product = await getProduct(params.id)

  return (
    <div className="something">
      <Search/>
       <div className="max-w-7xl mt-20 mx-auto py-6 sm:px-6 lg:px-8">
     
     <div className="px-4 py-6 sm:px-0">
       <div className=" rounded-lg h-96">
         <div className="flex flex-col md:flex-row gap-6 items-start max-w-6xl px-4 mx-auto py-6">
           <div className="md:w-1/2">
             <div className="grid gap-6 items-start">
               <img
                 alt="Product Image"
                 className="aspect-square object-cover border border-zinc-200 w-full rounded-lg overflow-hidden dark:border-zinc-800"
                 height={500}
                 src={product.images}
                 width={500}
                 style={{
                   aspectRatio: "200/200",
                   objectFit: "contain",
                 }}
               />
             </div>
           </div>
           <div className="md:w-1/2">
             <div className="grid gap-4 items-start">
               <h1 className="font-bold text-3xl">{product.name}</h1>
               <p className="text-zinc-500">{product.howOld}</p>
               <div className="grid gap-4 text-sm leading-loose">
                 <p>
                  {product.description}
                 </p>
               </div>
               <div className="text-4xl font-bold">&#8377;{product.price}</div>
               <BuyButton product={product}/>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>

    </div>
   
  )
}

function IconStar(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
