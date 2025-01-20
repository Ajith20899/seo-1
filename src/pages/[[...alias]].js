import Head from "next/head";
import React from "react";

function page() {
  const [alias, setAlias] = React.useState("ascas");

  return <React.Fragment>{alias && <Metadata />}</React.Fragment>;
}

const Metadata = () => {
  return (
    <Head>
      <title data-next-head="">SEO Next App 1</title>
      <meta
        name="description"
        content="SEO by create next app"
        data-next-head=""
      />
      <meta
        property="og:image"
        content="https://images.pexels.com/photos/7303342/pexels-photo-7303342.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800&amp;h=600&amp;lazy=load"
        data-next-head=""
      />
      <meta property="og:image:width" content="1200" data-next-head="" />
      <meta property="og:image:height" content="630" data-next-head="" />
    </Head>
  );
};

export default page;
