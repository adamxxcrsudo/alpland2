import { Mountain } from 'lucide-react';

export default function Footer() {
return ( <footer className="relative py-12 border-t border-white/5"> <div className="absolute inset-0 bg-alpine-950" />
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center">
        <img
          src="alplinelogo.png"
          alt="Alpline"
          className="h-10 w-auto"
        />
      </div>
      <div className="flex items-center gap-6 text-sm text-glacier-500">
        <a
          href="mailto:hello@alpline.co.uk"
          className="hover:text-glacier-300 transition-colors"
        >
          hello@alpline.co.uk
        </a>
      </div>
      <p className="text-xs text-glacier-600">
        &copy; 2026 Alpline. All rights reserved.
      </p>
    </div>
  </div>
</footer>
);
}
