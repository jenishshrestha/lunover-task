"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

const AppLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;
  return (
    <html lang="en">
      <body className={`bg-background relative overflow-x-hidden`}>
        {/* image on top */}
        <Image
          src="/assets/kf_explosion.png"
          width={778}
          height={446}
          alt=""
          className="absolute top-0 right-0 z-[-1]"
        />
        {/* header */}
        <Header />
        {children}
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
};

export default AppLayout;
