export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'ipl-prediction-tips';

  return (
    <footer className="border-t border-ipl-border bg-ipl-footer mt-auto">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} IPL Prediction Tips. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            Built with{' '}
            <span className="text-ipl-accent inline-block animate-pulse">❤️</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ipl-primary hover:underline font-semibold"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
