import { Badge } from "@/components/ui/badge"
export default function ProductCard(
{
    id,image,name,howOld,price,isSold
}:any

) {
    return (
        <div className="bg-white shadow max-h-[350px] hover:shadow-lg transition-shadow duration-200 ease-in-out rounded-lg p-4">
            <img
              alt="Product image"
              className="mb-4 rounded-md mx-auto"
              height="200"
              src={image}
              style={{
                aspectRatio: "200/200",
                objectFit: "contain",
              }}
              width="200"
            />
            <h3 className="font-semibold mb-2">{name}</h3>
           
            <p className="text-zinc-500 mb-4">{howOld}</p>

            <div className="flex gap-4">
            <strong>&#8377; {price}</strong>
            {isSold && <Badge variant="secondary">Sold</Badge>}
            </div>
           

          </div>

    )
}