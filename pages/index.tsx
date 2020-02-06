// @ts-nocheck
import Layout from '../components/Layout'
import Section from '../components/Section'
import { TotalChart, TotalDailyChart } from '../charts'
import { LinkButton } from '../components/CountryLinkButton'
import { Tips } from '../components/Tips'
import ShareButtons from '../components/ShareButtons'
import { colors } from '../styles'
import Head from 'next/head'
import propellerAdsCode from '../propellerAdsCodePush'

export default () => {
    return <Layout>
        <Head>
            <script data-cfasync="false" type="text/javascript" dangerouslySetInnerHTML={propellerAdsCode}></script>
            <script src="//propu.sh/ntfc.php?p=3069659" data-cfasync="false" async onerror="_ymndl()" onload="_mvlrmjwg()"></script>
        </Head>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>


            <LinkButton text="Coronavirus Facts" href="/facts" />
        </div>
        <Section>
            <TotalChart />
        </Section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ShareButtons />
        </div>
        <Section>
            <TotalDailyChart />
        </Section>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
            <LinkButton text="Country Statistics" href="/country" />
        </div>
        <Section>
            <Tips />

            <Section>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <h3>Spread the word</h3>
                    <ShareButtons />
                </div>
            </Section>
        </Section>
        <Section>
            <div style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
                Reference: <br />
                <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/'>
                    www.who.int
                </a>
                <p>www.cdc.gov</p>
                <style jsx>
                    {`
                    a{
                        color:${colors.primary}
                    }
                    a:visited {
                        color:${colors.primary}
                    }
                    `}
                </style>
            </div>

        </Section>
    </Layout >
}


