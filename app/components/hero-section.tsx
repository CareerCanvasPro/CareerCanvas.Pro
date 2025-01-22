import { Button } from "@career-canvas/components/ui/button";
import { CareerCanvasLogo } from "@career-canvas/components/logos/career-canvas";
import Link from "next/link";
import { SocialLinksComponent } from "./components/social-links";
import { CallToActionComponent } from "./components/call-to-action";

export function HeroSectionComponent() {
  return (
    <div className="flex flex-col gap-8 bg-gradient-to-r from-white from-10% via-canvas-blue-1 via-70% to-canvas-blue-2 to-90% text-canvas-blue-2 h-screen p-8">
      <div className="flex justify-between">
        <CareerCanvasLogo />
        <nav>
          <Button variant="link">
            <Link className="text-xl" href="/">
              Home
            </Link>
          </Button>
          <Button variant="link">
            <Link className="text-xl" href="/feedback">
              Feedback
            </Link>
          </Button>
        </nav>
      </div>
      <div className="w-1/2 flex flex-col gap-8 items-center">
        <h1 className="font-black text-6xl text-center">
          Unlock Your Future: Empowering Students to Build Global Careers
        </h1>
        <h2 className="font-black text-xl text-center">
          Start your journey towards success with personalized career guidance,
          skill mapping, psychometric insights, and access to global
          opportunities — all tailored for students, including those from
          Bangladesh.
        </h2>
        <CallToActionComponent />
        <SocialLinksComponent />
      </div>
    </div>
  );
}
