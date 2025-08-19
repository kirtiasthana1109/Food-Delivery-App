import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">29.08.2025</td>
            <td className="py-6 px-1">890</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1 text-red-700 font-bold">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12378612387212</td>
            <td className="py-6 px-1">19.07.2025</td>
            <td className="py-6 px-1">6570</td>
            <td className="hidden md:block py-6 px-1">Margherita Magic (3), Veggie Delight(2)</td>
            <td className="py-6 px-1 text-green-700 font-bold">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12378612387213</td>
            <td className="py-6 px-1">9.06.2025   </td>
            <td className="py-6 px-1">987</td>
            <td className="hidden md:block py-6 px-1">Classic Cheeseburger (4), coco-cola (2), Veggie Delight Pizza </td>
            <td className="py-6 px-1  text-green-700 font-bold">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12378612387214</td>
            <td className="py-6 px-1">11.05.2025   </td>
            <td className="py-6 px-1">387</td>
            <td className="hidden md:block py-6 px-1"> coco-cola (2), Veggie Delight Pizza </td>
            <td className="py-6 px-1  text-green-700 font-bold">Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
