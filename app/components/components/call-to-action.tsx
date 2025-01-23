import { FaApple, FaGooglePlay } from "react-icons/fa";

import { Button } from "@career-canvas/components/ui/button";

export function CallToActionComponent() {
  return (
    <div className="flex gap-8">
      <Button>
        <FaGooglePlay />
        <span>Google Play</span>
      </Button>
      <Button>
        <FaApple />
        <span>Apple Store</span>
      </Button>
    </div>
  );
}
