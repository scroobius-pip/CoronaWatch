
import { SeriesData } from './SeriesData'

function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default () => {


    return <div >
        <div style={{ textAlign: 'center', color: 'white', padding: 10, backgroundColor: 'rgba(253,29,29,0.2)', margin: -6, }}>
            <p style={{
                fontSize: 25, fontWeight: 500,

            }} >Death Count</p>
            <p style={{ color: '#FD1D1D', fontSize: 50, fontWeight: 600 }}>{numberWithCommas(SeriesData.cummulativeDeaths)}</p>
        </div>
        <div style={{ textAlign: 'center', color: 'white', padding: 10, }}>
            <p style={{
                fontSize: 25, fontWeight: 500
            }} >Current Cases</p>
            <p style={{ fontSize: 50, fontWeight: 600 }}>{numberWithCommas(SeriesData.cummulativeCases)}</p>
        </div>
    </div>

}



