import Head from "next/head";

const Header = ({ title, desc }) => {
  return (
    <Head>
      <title>
        {title
          ? `${title} | Alpha Social Group`
          : "Alpha Social Group | Social Pioneers of Finance"}
      </title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        link
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      {/* favicon goodies */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/fav/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/fav/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/fav/favicon-16x16.png"
      />
      <link rel="manifest" href="/img/fav/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/img/fav/safari-pinned-tab.svg"
        color="#1083e1"
      />
      <link rel="shortcut icon" href="/img/fav/favicon.ico" />
      <meta name="msapplication-TileColor" content="#0e2443" />
      <meta name="msapplication-config" content="/img/fav/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default Header;
