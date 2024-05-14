import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = await getLoggedInUser()

  return (
   <main className="flex h-screen w-full font-inter">

        <Sidebar user={loggedInUser}/>

        <div className="flex size-full flex-col">
            <div className="root-layout">
                <Image
                  src="/icons/logo.svg" 
                  alt="menu icon"
                  width={30}
                  height={30}
                />
                <div>
                  <MobileNav user={loggedInUser}/>
                </div>
            </div>
            {children}
        </div>
   </main>
  );
}
