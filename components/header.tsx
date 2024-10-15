import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { HeaderLogo } from "./header-logo";
import { Navigation } from "./navigation";
import { Loader2 } from "lucide-react";
import { WelcomeMsg } from "./welcome-msg";


export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 px-8 py-12 lg:px-10 pb-44 shadow-xl rounded-b-3xl relative">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center lg:gap-x-10">
            <div className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <HeaderLogo />
            </div>
            <div className="border-b-2 border-white pb-2">
              <Navigation />
            </div>
          </div>
          <ClerkLoaded>
            <div className="text-white bg-blue-600 px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all">
              <UserButton afterSignOutUrl="/" />
            </div>
          </ClerkLoaded>

          <ClerkLoading>
            <Loader2 className="w-10 h-10 animate-spin text-white opacity-80" />
          </ClerkLoading>
        </div>

        <div className="text-white text-3xl font-bold mb-10 bg-opacity-70 bg-blue-600 p-6 rounded-xl shadow-lg">
          <WelcomeMsg />
        </div>
      </div>
    </header>
  );
};
