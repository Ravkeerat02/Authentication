// importing shad
import { Button } from "@/components/ui/button";
// utils
import { cn } from "@/lib/utils";
// font
import { Poppins } from "next/font/google";
const font = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});
export default function Home() {
  return (
    <main className="flex items-center justify-center bg-slate-900 min-h-screen">
      <div className="space-y-6">
        <h1
          className={cn(
            "text-6xl font-bold text-white drop-shaow-md",
            font.className
          )}
        >
          Auth💾
        </h1>
        <p className="text-white text-lg justify-center items-center">
          Authentication app
        </p>
        <div>
          <Button
            variant="secondary"
            size="lg"
            className="justify-center items-center"
          >
            Sign in
          </Button>
        </div>
      </div>
    </main>
  );
}
