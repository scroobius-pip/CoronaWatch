import Layout from '../components/Layout'
import Section from '../components/Section'
import { TotalChart, TotalDailyChart } from '../charts'
import { CountryLinkButton } from '../components/CountryLinkButton'
import { Tips } from '../components/Tips'
import ShareButtons from '../components/ShareButtons'


export default () => {
    return <Layout>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CountryLinkButton />
        </div>
        <Section>
            <TotalChart />
        </Section>
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
            <div>
                Reference: <br />
                <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/'>
                    www.who.int
                </a>
            </div>

        </Section>
    </Layout >
}


