import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon clone</title>
      </Head>
      <Header />
      <main className="max-w-5xl mx-auto">
        <Banner />
        <ProductList products={products} />
      </main>
    </div>
  );
}
// Tells nextJS that it's no longer a static page
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
