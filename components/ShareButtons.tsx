
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'


const IconProps = {
    round: true,
    size: 35
}

const ButtonProps = {
    url: 'https://coronawatch.now.sh',
    style: {
        marginLeft: 10
    },
    title: 'Protect yourself from the Corona Virus with these safety tips'
}

export default () => {
    return <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 10 }}>
        <FacebookShareButton quote='' hashtag='#Coronavirus' {...ButtonProps} >
            <FacebookIcon {...IconProps} />
        </FacebookShareButton>
        <TwitterShareButton {...ButtonProps} hashtags={['Coronavirus', 'Coronavirus', 'NoMeat_NoCoronaVirus']} >
            <TwitterIcon {...IconProps} />
        </TwitterShareButton>
        <WhatsappShareButton separator=' ' {...ButtonProps}>
            <WhatsappIcon   {...IconProps} />
        </WhatsappShareButton>
    </div>
}