import Document, { Html, Head, Main, NextScript } from 'next/document'

const MetaTags = ()=>{
    return (
        <>                
<title>CoronaWatch - Corona virus live updates</title>
<meta name="title" content="CoronaWatch - Corona virus live updates"/>
<meta name="description" content="Learn more about the corona virus.
Protect yourself from corona virus with these safety tips."/>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://metatags.io/"/>
<meta property="og:title" content="CoronaWatch - Corona virus live updates"/>
<meta property="og:description" content="Learn more about the corona virus.
Protect yourself from corona virus with these safety tips."/>
<meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://metatags.io/"/>
<meta property="twitter:title" content="CoronaWatch - Corona virus live updates"/>
<meta property="twitter:description" content={`Learn more about the corona virus.
Protect yourself from corona virus with these safety tips.`}/>
<meta property="twitter:image" content="https://Metatags.io/assets/Meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
        </>
    )
}

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <style dangerouslySetInnerHTML={{__html:"@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');"}}></style>
                    {/* <script src="https://ssp-nj.webtradehub.com/?c=res&m=async"></script> */}
                    {/* <script data-ad-client="ca-pub-8884456778132522" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}

                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-157582919-1"></script>
                    <script dangerouslySetInnerHTML={googleAnalyticsCode}></script>

                    <script dangerouslySetInnerHTML={infolinksCode}></script>
                    <script type="text/javascript" src="http://resources.infolinks.com/js/infolinks_main.js"></script>
            <MetaTags/>
                </Head>
                <body>
                    <Main />
                    <NextScript />

                </body>
            </Html>
        )
    }
}

const infolinksCode = {
    __html: `
    var infolinks_pid = 3234010;
var infolinks_wsid = 0;
    `
}

const googleAnalyticsCode = {
    __html: `

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-157582919-1');

    `
}

export default MyDocument