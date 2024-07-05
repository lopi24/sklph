"use client";

import Collection from "@/components/charities/collection";
import Header from "@/components/shared/header";

const Charities = () => {
  return (
    <section className="wrapper">
      <Header
        heading="The best nation is donation"
        description="Make a positive impact on someone's life with a simple gesture of
        kindness"
      />
      <Collection />
    </section>
  );
};

export default Charities;
