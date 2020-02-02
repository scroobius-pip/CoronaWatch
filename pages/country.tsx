import Layout from '../components/Layout'
import Section from '../components/Section'
import { CountryChart } from '../charts'

export default () => {
    return <Layout>
        <Section>
            <CountryChart />
        </Section>
    </Layout>
}