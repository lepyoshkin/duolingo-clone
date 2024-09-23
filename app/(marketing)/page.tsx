import {Button} from '@/components/ui/button';
import {
  SignedIn,
  SignedOut,
  SignUpButton,
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
} from '@clerk/nextjs';
import {Loader} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-[998px] flex mx-auto flex-1 w-full flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-60 h-60 lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="Hero" />
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice, and master new languages with Duolingo Clone
        </h1>

        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" forceRedirectUrl="/learn">
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started!
                </Button>
              </SignUpButton>

              <SignInButton mode="modal" forceRedirectUrl="/learn">
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
