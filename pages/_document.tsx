import Document, { Html, Head, Main, NextScript } from 'next/document'
import propellerAdsCode from '../propellerAdsCode'

const MetaTags = ()=>{
    return (
        <>                
<title>CoronaWatch - Corona virus live updates</title>
<meta name="title" content="CoronaWatch - Corona virus live updates"/>
<meta name="description" content="Learn more about the corona virus.
Protect yourself from corona virus with these safety tips."/>
<meta name="keywords" content="wuhan corona virus updates symptoms"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://coronawatch.now.sh/"/>
<meta property="og:title" content="CoronaWatch - Corona virus live updates"/>
<meta property="og:description" content="Learn more about the corona virus.
Protect yourself from corona virus with these safety tips."/>
<meta property="og:image" content="https://i.imgur.com/v3v5wna.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://coronawatch.now.sh/"/>
<meta property="twitter:title" content="CoronaWatch - Corona virus live updates"/>
<meta property="twitter:description" content={`Learn more about the corona virus.
Protect yourself from corona virus with these safety tips.`}/>
<meta name="propeller" content="715731f6af97250ac66f2c8363ff8b4b"></meta>
<meta property="twitter:image" content="https://i.imgur.com/v3v5wna.png"/>
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
                    <script data-ad-client="ca-pub-8884456778132522" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <script dangerouslySetInnerHTML={webPushrCode} />

                    {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-157582919-1"></script> */}
                    {/* <script dangerouslySetInnerHTML={googleAnalyticsCode}></script> */}

                    <script dangerouslySetInnerHTML={infolinksCode}></script>
                    {/* <script data-cfasync="false" type="text/javascript" dangerouslySetInnerHTML={propellerAdsCode}></script> */}
                    {/* <script type="text/javascript" src="http://resources.infolinks.com/js/infolinks_main.js"></script> */}
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

const webPushrCode = {
    __html: `
    (function(w,d, s, id) {w.webpushr=w.webpushr||function(){(w.webpushr.q=w.webpushr.q||[]).push(arguments)};var js, fjs = d.getElementsByTagName(s)[0];js = d.createElement(s); js.id = id;js.src = "https://cdn.webpushr.com/app.min.js";fjs.parentNode.appendChild(js);}(window,document, 'script', 'webpushr-jssdk'));webpushr('init','BNFaaJO13dePO46s2UWxbWkva1XHEeWOPD4SbpwRWS8UKFl2yjosTZJE4hMWE0miDsypbzKljC4ybjEgGYLCirU');
    `
}
export default MyDocument