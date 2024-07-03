import Header from "@/components/Header";
import React from "react";
import Inform from "@/components/profile/Inform";
import Footer from "@/components/Footer";
import MyActive from "@/components/profile/MyActive";
function Profile() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="flex justify-center pb-[50px]">
        <div className="h-[30%] w-full -z-10 bg-[#C9E2EA] absolute" />
        <div className="w-[60%] mobile:w-[95%] max-w-[750px] tablet:min-w-[570px]">
          <Inform />
          <MyActive />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
