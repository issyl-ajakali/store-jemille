import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary/10 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-primary mb-2">MIILEBITES</h3>
            <p className="text-foreground/80 text-sm mb-4 italic">
              SAVOR THE FLAVOR, BITE BY BITE!
            </p>
            <div className="flex space-x-4 mt-2">
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Menu
              </Link>
              <Link
                href="/feedback"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Feedbacks
              </Link>
              <Link
                href="/contact"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-foreground mb-4">Contact Us</h3>
            <address className="not-italic text-foreground/70 flex flex-col space-y-2">
              <p>123 Filipino Street</p>
              <p>Manila, Philippines</p>
              <p>Phone: +63 123 456 7890</p>
              <p>Email: info@miilebites.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-8 pt-6 text-center">
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} MIILEBITES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
