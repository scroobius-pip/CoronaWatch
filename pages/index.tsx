import Layout from '../components/Layout'
import Section from '../components/Section'
import { TotalChart, TotalDailyChart } from '../charts'
import { CountryLinkButton } from '../components/CountryLinkButton'
import { Tips } from '../components/Tips'


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
        </Section>
    </Layout>
}


