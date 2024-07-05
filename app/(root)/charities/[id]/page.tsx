"use client";

import Description from "@/components/charities/description";
import StickyCard from "@/components/charities/sticky-card";
import ImageWrapper from "@/components/shared/img-wrapper";
import { donationsList } from "@/constants";

const CharityDetails = () => {
  return (
    <section className="wrapper flex flex-col gap-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] text-black sm:text:6xl">
        Let's support Janessa
      </h1>
      <div className="w-full flex flex-row gap-6">
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <ImageWrapper src="/assets/img-2.jpeg" />
          <Description
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
        adipisci! Voluptas quidem mollitia iste iusto molestias aliquam
        voluptatum alias incidunt nobis magni assumenda repellendus, eius
        asperiores dolor dolores vel et! Unde voluptate reprehenderit velit
        aliquid error, distinctio exercitationem hic doloribus harum. Vero sed
        assumenda cupiditate odio natus culpa minima soluta nisi, excepturi
        libero dolor omnis accusantium, maiores ipsam id commodi! Maiores,
        consequatur et iure, dolorum saepe necessitatibus cumque dolor ex
        blanditiis possimus ducimus id quidem veniam doloremque! Similique, quia
        voluptas, sed, consectetur iure accusamus placeat mollitia harum
        repellat labore ex? Dolores quod iure suscipit necessitatibus corporis
        accusamus soluta! Eius excepturi, alias officiis ipsa, fugiat quia
        eligendi porro nobis et eos assumenda reiciendis omnis sit perferendis
        quibusdam aliquam obcaecati, asperiores non. Eveniet dicta iure nemo
        placeat voluptates tenetur dolor molestiae ad vel veritatis nihil cumque
        laudantium dolores inventore deserunt culpa quo beatae iste voluptatum
        commodi sed eos, exercitationem sit? Architecto, cumque!"
          />
        </div>
        <StickyCard
          donationsList={donationsList}
          goal="150,000"
          donations="77"
          raised="7, 777"
        />
      </div>
    </section>
  );
};

export default CharityDetails;
