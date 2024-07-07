"use client";

import Header from "@/components/shared/header";
import ImageWrapper from "@/components/shared/img-wrapper";

const AboutUs = () => {
  return (
    <section className="wrapper">
      <Header
        heading="Learn more about us"
        description="Engage in community fundraisers aiding individuals with disabilities,
      empowering you to provide vital support."
      />
      <ImageWrapper
        className="w-full px-4 py-2 mt-16"
        src="/assets/img-2.jpeg"
      />
    </section>
  );
};

export default AboutUs;
