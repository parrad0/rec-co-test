import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mt-10 px-4">
      <Skeleton className="w-[100px] py-4 rounded-full " />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Skeleton
          className="
          w-full 
          h-32
          rounded-md
          bg-red-600 
          p-2
          bg-gradient-to-r
          from-blue-500
          via-gray-500
          to-blue-500
          background-animate"
        />
        <Skeleton
          className="
          w-full 
          h-32
          rounded-md
          bg-red-600 
          p-2
          bg-gradient-to-r
          from-blue-500
          via-gray-500
          to-blue-500
          background-animate"
        />
      </div>
    </div>
  );
}
