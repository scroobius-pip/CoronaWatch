import Layout from '../components/Layout'
import Section from '../components/Section'
import { CountryChart } from '../charts'
import { Tips } from '../components/Tips'
import ShareButtons from '../components/ShareButtons'
import { GoBackButton } from '../components/GoBackButton'
import { colors } from '../styles'
import Head from 'next/head'
import propellerAdsCodeDirect from '../propellerAdsPopover'


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
                    <li>Coronavirus: Sixty-One People on Cruise Ship Off Japan Have Virus, <a href="https://www.nytimes.com/2020/02/07/world/asia/coronavirus-china.html">Live Updates</a></li>

                    <li>Wuhan coronavirus whistleblower doctor dies as confirmed cases top 30,000. <a href="https://edition.cnn.com/2020/02/06/asia/wuhan-coronavirus-update-intl-hnk/index.html">More on this</a></li>
                    <li>China Begins Testing an Antiviral Drug in Coronavirus <a href="https://www.nytimes.com/2020/02/06/health/coronavirus-treatments.html">Patients</a></li>
                    <li>WHO to accelerate research and innovation for new <a href="https://www.who.int/news-room/detail/06-02-2020-who-to-accelerate-research-and-innovation-for-new-coronavirus">coronavirus</a></li>

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