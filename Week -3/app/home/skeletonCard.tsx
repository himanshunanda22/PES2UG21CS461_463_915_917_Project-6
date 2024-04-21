import { Skeleton } from "@/components/ui/skeleton"
export default function SkeletonCard() {
    return (
        <div className="flex flex-col border space-y-4 shadow max-h-[350px] hover:shadow-lg transition-shadow duration-200 ease-in-out rounded-lg p-4">
            <div className="flex justify-center space-x-4">
                <Skeleton className="w-[200px] h-[200px] rounded-lg" />
                
            </div>
            <div className="flex  ml-6 flex-col space-y-2">
                <Skeleton className="w-44 h-4" />
                <Skeleton className="w-44 h-4" />
                <Skeleton className="w-20 h-4" />
            </div>
        </div>
    )
}