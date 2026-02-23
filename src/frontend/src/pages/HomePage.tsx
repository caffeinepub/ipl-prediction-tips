import { Link } from '@tanstack/react-router';
import { TrendingUp, Target, Zap } from 'lucide-react';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-ipl-primary/10 via-ipl-secondary/5 to-ipl-accent/10">
        <div className="container py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight tracking-tight">
                Get Expert{' '}
                <span className="text-ipl-primary">IPL Match</span>{' '}
                Predictions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Stay ahead of the game with data-driven predictions, expert analysis, 
                and winning insights for every IPL match.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/predictions"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-ipl-primary hover:bg-ipl-primary/90 rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View Predictions
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/hero-banner.dim_1200x400.png"
                alt="IPL Cricket Action"
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-ipl-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Why Choose Our Predictions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expert analysis with data-driven insights to give you the edge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-ipl-card via-ipl-card to-ipl-card/50 border-2 border-ipl-border hover:border-ipl-primary transition-all hover:shadow-xl">
            <div className="w-14 h-14 rounded-xl bg-ipl-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="h-7 w-7 text-ipl-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Accurate Predictions
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our predictions are based on comprehensive match analysis, team form, 
              and historical performance data.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-gradient-to-br from-ipl-card via-ipl-card to-ipl-card/50 border-2 border-ipl-border hover:border-ipl-secondary transition-all hover:shadow-xl">
            <div className="w-14 h-14 rounded-xl bg-ipl-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="h-7 w-7 text-ipl-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Real-Time Updates
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Get the latest predictions and updates for upcoming IPL matches 
              as soon as they're available.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-gradient-to-br from-ipl-card via-ipl-card to-ipl-card/50 border-2 border-ipl-border hover:border-ipl-accent transition-all hover:shadow-xl">
            <div className="w-14 h-14 rounded-xl bg-ipl-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="h-7 w-7 text-ipl-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Confidence Levels
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every prediction comes with a confidence rating so you know 
              exactly how strong our analysis is.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="rounded-3xl bg-gradient-to-r from-ipl-primary via-ipl-secondary to-ipl-accent p-1">
          <div className="rounded-3xl bg-background p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Ready to Win Big?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check out our latest match predictions and make informed decisions
            </p>
            <Link
              to="/predictions"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-ipl-primary hover:bg-ipl-primary/90 rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Predictions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
