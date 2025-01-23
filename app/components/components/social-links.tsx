import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

import { Button } from "@career-canvas/components/ui/button";

export function SocialLinksComponent() {
  return (
    <div className="flex gap-8">
      <Button variant="ghost">
        <FaFacebook />
      </Button>
      <Button variant="ghost">
        <FaTwitter />
      </Button>
      <Button variant="ghost">
        <FaInstagram />
      </Button>
      <Button variant="ghost">
        <FaLinkedin />
      </Button>
      <Button variant="ghost">
        <FaYoutube />
      </Button>
    </div>
  );
}
