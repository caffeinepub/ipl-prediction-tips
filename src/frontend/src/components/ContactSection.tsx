import { Mail, Phone, MapPin } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram, SiLinkedin } from 'react-icons/si';

export default function ContactSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
          Get in <span className="text-ipl-primary">Touch</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions about our predictions? We'd love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-ipl-card via-ipl-card to-ipl-card/50 border-2 border-ipl-border hover:border-ipl-primary transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ipl-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-ipl-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Email Us</h3>
                <a
                  href="mailto:contact@iplpredictions.com"
                  className="text-muted-foreground hover:text-ipl-primary transition-colors"
                >
                  contact@iplpredictions.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-ipl-card via-ipl-card to-ipl-card/50 border-2 border-ipl-border hover:border-ipl-secondary transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ipl-secondary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-ipl-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Call Us</h3>
                <a
                  href="tel:+15551234567"
                  className="text-muted-foreground hover:text-ipl-secondary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-ipl-card via-ipl-card to-ipl-card/50 border-2 border-ipl-border hover:border-ipl-accent transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ipl-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-ipl-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  123 Cricket Stadium Road<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Additional Info */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-ipl-primary/5 via-ipl-secondary/5 to-ipl-accent/5 border-2 border-ipl-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Follow Us</h3>
            <p className="text-muted-foreground mb-6">
              Stay connected with us on social media for the latest updates, predictions, and cricket insights.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-ipl-primary/10 hover:bg-ipl-primary hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-ipl-primary/10 hover:bg-ipl-primary hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-ipl-secondary/10 hover:bg-ipl-secondary hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-ipl-primary/10 hover:bg-ipl-primary hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-ipl-card via-ipl-card to-ipl-card/50 border-2 border-ipl-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Business Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex justify-between">
                <span className="font-semibold">Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
