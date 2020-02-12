// @ts-nocheck
import Document, { Html, Head, Main, NextScript } from 'next/document'

import propellerAdsPopover from '../propellerAdsPopover'

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
                    {/* Google Font roboto */}
                    <style dangerouslySetInnerHTML={{__html:"@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');"}}></style>
                   
                  {/* Hotjar Code */}
                    <script dangerouslySetInnerHTML={hotJarCode}></script>

{/* Analytics Code */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-157582919-1"></script>
                    <script dangerouslySetInnerHTML={googleAnalyticsCode}></script>

<script dangerouslySetInnerHTML={webPushrCode}></script>
<script data-cfasync="false" type="text/javascript" dangerouslySetInnerHTML={propellerAdsPopover}></script>
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

const hotJarCode = {
    __html:`
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1677368,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `
}

export default MyDocument