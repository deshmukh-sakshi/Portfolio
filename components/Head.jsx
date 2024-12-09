import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Sakshi Deshmukh's Portfolio."
      />
      <meta
        name="keywords"
        content="sakshi deshmukh, sakshi, deshmukh, data scientist portfolio, machine learning engineer, sakshi deshmukh portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Sakshi Deshmukh's Portfolio" />
      <meta
        property="og:description"
        content="Sakshi Deshmukh's Portfolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://gkos.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Sakshi Deshmukh',
};
