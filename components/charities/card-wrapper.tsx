import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

interface CardWrapperProps {
  children: React.ReactNode;
  description: string;
  charityId: number;
}

const CardWrapper = ({
  children,
  description,
  charityId,
}: CardWrapperProps) => {
  return (
    <Card className="img-box shadow-none border-none">
      <Link
        href={`/charities/${charityId}`}
        className="h-full bg-zinc-50 hover:bg-white flex flex-col gap-4 p-2 rounded-md"
      >
        <div className="h-full rounded-sm overflow-hidden">{children}</div>
        <CardContent className="min-h-24 h-24 px-2 py-0 overflow-hidden flex flex-col justify-between">
          <CardDescription className="text-black text-base font-semibold">
            {description}
          </CardDescription>
          <CardDescription className="font-semibold">₱ 10, 000</CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CardWrapper;
