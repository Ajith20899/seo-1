import Head from "next/head";
import React from "react";

function page() {

    console.log("Entered");
    

  return (
    <React.Fragment>
      <Head>
        <title>SEO Next App</title>
        <meta name="description" content="SEO by create next app" />
        <meta
          property="og:image"
          content={
            "https://images.pexels.com/photos/7303342/pexels-photo-7303342.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&lazy=load"
          }
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
    </React.Fragment>
  );
}

export default page;
