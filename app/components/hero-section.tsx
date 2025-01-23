import Link from "next/link";

import { CareerCanvasLogo } from "@career-canvas/components/logos/career-canvas";
import { Button } from "@career-canvas/components/ui/button";

import { CallToActionComponent } from "./components/call-to-action";
import { SocialLinksComponent } from "./components/social-links";

export function HeroSectionComponent() {
  return (
    <div className="flex h-screen flex-col gap-8 bg-gradient-to-r from-white from-10% via-canvas-blue-1 via-70% to-canvas-blue-2 to-90% p-8 text-canvas-blue-2">
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
      <div className="flex w-1/2 flex-col items-center gap-8">
        <h1 className="text-center text-6xl font-black">
          Unlock Your Future: Empowering Students to Build Global Careers
        </h1>
        <h2 className="text-center text-xl font-black">
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
