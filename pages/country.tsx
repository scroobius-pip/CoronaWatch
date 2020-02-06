import Layout from '../components/Layout'
import Section from '../components/Section'
import { CountryChart } from '../charts'
import { Tips } from '../components/Tips'
import ShareButtons from '../components/ShareButtons'
import { GoBackButton } from '../components/GoBackButton'
import Head from 'next/head'
import propellerAdsCodeDirect from '../propellerAdsCodeDirect'

export default () => {
    return <Layout>
        {/* <Head>
            <script data-cfasync="false" type="text/javascript" dangerouslySetInnerHTML={propellerAdsCodeDirect}>

            </script>
        </Head> */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <GoBackButton />
        </div>
        <Section>
            <CountryChart />
        </Section>
        <Section>
            <Tips />

            <Section>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <h3>Spread the word</h3>
                    <ShareButtons />
                </div>
            </Section>
        </Section>
    </Layout>
}