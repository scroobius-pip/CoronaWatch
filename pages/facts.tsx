import Layout from '../components/Layout'
import Section from '../components/Section'
import { CountryChart } from '../charts'
import { Tips } from '../components/Tips'
import ShareButtons from '../components/ShareButtons'
import { GoBackButton } from '../components/GoBackButton'
import { colors } from '../styles'
import Head from 'next/head'
import propellerAdsCodeDirect from '../propellerAdsCodeDirect'


const FactSection = ({ heading = '', children }) => {
    return <Section>
        <div style={{ textAlign: 'center' }}>
            <h3 style={{ opacity: 0.6 }} >{heading}</h3>
            <p>
                {children}
            </p>
            <style jsx>
                {`
    p {
        opacity:0.4;
        transition:0.3s;
    }

    p:hover {
        opacity:1;
    }

    @media screen and (min-width: 601px) {
        p {
          font-size: 20px;
        }
      }
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
}

export default () => {
    return <Layout>
        <Head>
            <script data-cfasync="false" type="text/javascript" dangerouslySetInnerHTML={propellerAdsCodeDirect}>

            </script>
        </Head>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <GoBackButton />
        </div>
        <FactSection heading='Fatality Rate'>
            2% (Could increase with mutations)
        </FactSection>
        <FactSection heading='Incubation Period'>
            Symptoms can appear between a range of 2 - 14 days
        </FactSection>

        <Section>
            <div style={{ textAlign: 'center' }}>

                <h3 style={{ opacity: 0.6 }} >Latest countries affected by coronavirus</h3>
                <div style={{ marginBottom: 10, }}>
                    <div>
                        <span>Belgium</span>
                        <span>Spain</span>
                        <span>India</span>
                        <span>Philippines</span>
                    </div>
                    <style jsx>
                        {`
                    span{
                        font-size:12px;
                        margin-right:10px;
                        font-weight:600;
                        transition:all 0.2s;
                        opacity:0.8;
                        padding:.5em;
                        border-radius:1em;
                        background-color: rgba(255,255,255,0.1);
                    }
                    span:hover {
                      opacity:1;
                    }
                    `}
                    </style>
                </div>
            </div>
        </Section>
        <Section>
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ opacity: 0.8 }}>Latest News</h3>
                </div>
                <ul style={{ lineHeight: '2em', fontWeight: 400, }}>
                    <li> Passengers aboard infected japanese cruise ship <a href="https://www.japantimes.co.jp/news/2020/02/05/national/science-health/quarantined-japanese-cruise-ship-infected-coronavirus/#.XjoKyeSSniA">quarantined</a></li>

                    <li>As Death Toll Rises, More Calls to Evacuate <a href="https://www.nytimes.com/2020/02/04/world/asia/coronavirus-china.html">China</a></li>
                    <li>Hong Kong hospital staff strike to demand closure of China  <a href="https://www.bbc.com/news/world-asia-51349154">border</a></li>
                    <li>China admits "shortcomings" as global efforts to stop deadly coronavirus ramp <a href="https://www.cbsnews.com/live-updates/coronavirus-usa-confirmed-cases-news-death-toll-latest-2020-02-04/">up</a></li>

                </ul>
                <style jsx>
                    {`
            li {
                opacity:0.4;
                transition:0.3s;
            }

            li:hover {
                opacity:1;
            }

            @media screen and (min-width: 601px) {
                ul {
                  font-size: 20px;
                }
              }
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
        <Section>
            <Tips />

            <Section>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <h3>Spread the word</h3>
                    <ShareButtons />
                </div>
            </Section>
        </Section>
    </Layout >
}