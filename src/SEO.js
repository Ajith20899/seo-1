import Head from "next/head";
import { useSelector } from "react-redux";

const Metadata = () => {
  const users = useSelector((state) => state.users);

  console.log("useSelector ==== ", users);

  const user = users?.[0];

  return (
    <Head>
      <title data-next-head="">{user?.name}</title>
      <meta
        name="description"
        content={user?.email}
        data-next-head=""
      />
            <meta
        property="og:title"
        content={user?.website}
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

export default Metadata;
