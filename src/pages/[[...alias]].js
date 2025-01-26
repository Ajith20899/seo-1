import { dispatch, wrapper } from "@/redux/store";
import Metadata from "@/SEO";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function page() {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "product.name",
    image: "product.image",
    description: "product.description",
  };

  return (
    <React.Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* other page content */}
      <OtherPage />
    </React.Fragment>
  );
}

function OtherPage() {
  useEffect(() => {
    console.log("OtherPage");
  }, []);

  // Other page content
  return <div>Home</div>;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    try {
      store.dispatch({
        type: "FETCH_USERS_REQUEST",
        payload: "Server side payload",
      });

      return {
        props: { users: [] }, // will be passed to the page component as props
      };
    } catch (error) {
      console.error("Failed to fetch users:", error);
      return {
        props: { users: [] },
      };
    }
  }
);

export default page;
