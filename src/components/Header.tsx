'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-custom sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="JackLibra Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold gradient-text">JackLibra</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="https://medium.com/@dafsf60804"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:opacity-80 transition-opacity"
              title="Medium"
            >
              <Image
                src="/images/Medium-Icon-Black.png"
                alt="Medium"
                width={24}
                height={24}
                className="filter invert"
              />
            </a>
            <a
              href="https://github.com/Jack-Libra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:opacity-80 transition-opacity"
              title="GitHub"
            >
              <Image
                src="/images/github-icon.png"
                alt="GitHub"
                width={60}
                height={60}
                className="filter invert"
              />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-accent transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-custom">
            <div className="flex flex-col space-y-4">
              <a
                href="https://medium.com/@dafsf60804"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors font-medium"
              >
                <Image
                  src="/images/Medium-Icon-Black.png"
                  alt="Medium"
                  width={20}
                  height={20}
                  className="filter invert"
                />
                <span>Medium</span>
              </a>
              <a
                href="https://github.com/Jack-Libra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors font-medium"
              >
                <Image
                  src="/images/github-icon.png"
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="filter invert"
                />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
