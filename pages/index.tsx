import Layout from '../components/Layout'
import Section from '../components/Section'
import { TotalChart, TotalDailyChart } from '../charts'
import { CountryLinkButton } from '../components/CountryLinkButton'
import { Tips } from '../components/Tips'
import ShareButtons from '../components/ShareButtons'
import { colors } from '../styles'

export default () => {
    return <Layout>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

            <CountryLinkButton />
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


