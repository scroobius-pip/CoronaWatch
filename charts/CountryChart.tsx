import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import { SeriesData } from './SeriesData'



export default () => {
    return <div style={{ height: '100vh' }}>
        <Chart type='bar' options={options} series={series1} height={'100%'} />
    </div>
}


const series1 = [{
    data: SeriesData.totalDeaths,
    name: 'Total Deaths'
}, {
    data: SeriesData.totalCases,
    name: 'Total Cases'
}]






var options = {

    chart: {
        type: 'bar',

        stacked: true,
        // stackType: '100%'


    },
    plotOptions: {
        bar: {
            horizontal: true,
            columnWidth: '70%',
            // distributed: true,
            // barHeight: '100%',
            dataLabels: {
                // position: 'bottom',

            },
        }
    },
    dataLabels: {
        enabled: true,
        offsetX: 10,
        // offsetY: -20,
        textAnchor: 'middle',
        style: {
            fontSize: '12px',
            colors: ['#f31', 'rgba(27, 153, 139, 0.85)']
        }
    },
    stroke: {
        show: false,
        // width: 1,
        colors: ['#fff']
    },
    xaxis: {

        categories: SeriesData.countries,

        labels: {

            show: false,


        },

        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    tooltip: {
        theme: 'dark'
    },

    legend: {
        show: true,
        position: 'bottom',
        labels: {
            colors: ['#fff']
        }
    },
    grid: {
        show: false,

    },
    yaxis: {
        // logarithmic: true,
        // show: false,
        labels: {

            style: {
                colors: SeriesData.countries.map(_ => '#b5b5b5'),

                fontSize: 15,


            }
        }

    },
    theme: {
        palette: 'palette7'
    },
    title: {
        text: 'Corona Virus Activity Per Country',
        style: {
            color: '#fff'
        }
    }
};