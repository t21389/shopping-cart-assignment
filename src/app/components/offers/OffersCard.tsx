import React from "react";
import Image from "next/image";

const OffersCard = () => {
  return (
    <div className="container">
      <div className="border-2 flex flex-nowrap">
        <div className="">
          <h1> Bakery Cakes and Dairy </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad
            laboriosam recusandae exercitationem, saepe rerum earum debitis
            quaerat consequatur. Sed neque excepturi eos velit iusto
            consequuntur blanditiis illum quisquam quidem!
          </p>
          <button className="block bg-red-600 text-white h-8">
            Explore Bakery-cakes Dairy
          </button>
        </div>
        <div>
          <Image
            src="/static/images/products/bakery-cakes-dairy/bread.jpg"
            alt=""
            width="200"
            height="200"
          />
        </div>
      </div>
    </div>
  );
};

export default OffersCard;
