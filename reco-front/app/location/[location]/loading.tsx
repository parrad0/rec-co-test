import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  <div className="w-full h-96 bg-red-100">
    Hyyy
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
  </div>;
};

export default Loading;
