import Layout from '../components/Layout'
import Section from '../components/Section'
import { CountryChart } from '../charts'
import { Tips } from '../components/Tips'
import ShareButtons from '../components/ShareButtons'

export default () => {
    return <Layout>
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