import Layout from '../components/Layout'
import Section from '../components/Section'
import { TotalChart, TotalDailyChart } from '../charts'


const Tips = () => {
    return <div>
        <div style={{ display: 'flex' }}>
            <img src={require('../assets/info.svg')} style={{ marginRight: 5 }} />
            <h3>Tips</h3>
        </div>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos!</li>

        </ul>
    </div>
}

export default () => {
    return <Layout>
        <Section>
            <TotalChart />
        </Section>
        {/* <Section>
            <TotalDailyChart />
        </Section> */}
        <Section>
            <Tips />
        </Section>
    </Layout>
}