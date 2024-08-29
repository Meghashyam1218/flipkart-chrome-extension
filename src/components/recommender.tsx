import React, { useEffect, useState } from "react";
import Cards from "./cards";

interface Product {
  product_url: string;
  image_url: string;
  title: string;
}

const Recommender: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Send a POST request to fetch product data
    const fetchProducts = async () => {
      try {
        setProducts([]);
        let [tab] = await chrome.tabs.query({ active: true });
        setLoading(true);
        const response = await fetch(
          "https://7b66-117-250-71-121.ngrok-free.app/recommend",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // url: "https://www.flipkart.com/acer-predator-helios-16-intel-core-i9-14th-gen-14900hx-32-gb-1-tb-ssd-windows-11-home-12-gb-graphics-nvidia-geforce-rtx-4080-ph16-72-gaming-laptop/p/itm2aa2aa5c3717e?pid=COMGYSFGUBASFDY6&lid=LSTCOMGYSFGUBASFDY6RATW51&marketplace=FLIPKART&store=4rr%2Ftz1&srno=b_1_1&otracker=browse&fm=organic&iid=en_g_teokUtqGFd4sl-kkGacX4YEnSChpF2uZ_08_weFxAjKU3wFU-1YkV9cJMzU5Dpi3_LS3IH-junE-707tuROfUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=hp&ppn=homepage&ssid=enrj27pxn40000001724910872288",

              url: tab.url,
            }),
          },
        );
        setLoading(false);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        setProducts(data); // Assuming data is an array of product objects
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);
  return (
    <div
      className={`product-box flex grow flex-col overflow-x-hidden rounded-lg p-2 dark:bg-zinc-700 ${products.length === 0 ? "" : ""} items-center gap-6`}
    >
      {products.map((product, index) => (
        <Cards
          key={index}
          url={product.product_url}
          img={product.image_url}
          title={product.title}
        />
      ))}
      {loading == true ? (
        <p className="text-center text-xl text-zinc-500">Loading ...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-xl text-zinc-500">
          No Similar Products Found
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Recommender;
