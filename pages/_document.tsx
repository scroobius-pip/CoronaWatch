import Document, { Html, Head, Meta, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
</style>
                    {/* <script src="https://ssp-nj.webtradehub.com/?c=res&m=async"></script> */}
                    {/* <script data-ad-client="ca-pub-8884456778132522" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}

                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-157582919-1"></script>
                    <script dangerouslySetInnerHTML={googleAnalyticsCode}></script>

                    <script dangerouslySetInnerHTML={infolinksCode}></script>
                    <script type="text/javascript" src="http://resources.infolinks.com/js/infolinks_main.js"></script>
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