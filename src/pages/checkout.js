import React from "react";
import { useSelector } from "react-redux";
import CheckoutProductList from "../components/CheckoutProductList";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";

const checkout = () => {
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="ml-2 mt-2 lg:flex max-w-screen-5xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <p>
            Pay faster for all your shopping needs with
            <span className="text-red-700"> Digital payments</span>
            <br />
            Get instant refund on cancellations | Zero payment failures
          </p>

          <div className="flex flex-col  p-5 space-y-10 bg-white">
            <h1 className="text-xl font-bold border-b pb-4 ">
              {items.length === 0
                ? `Shopping cart is empty`
                : `Your shopping basket`}
            </h1>

            {items.map((item, i) => {
              <CheckoutProductList
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default checkout;
