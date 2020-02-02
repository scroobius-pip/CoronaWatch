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
            // columnWidth: '70%',
            // barHeight: '100%',
            dataLabels: {
                position: 'top',
            },
        }
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
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
            style: {
                colors: ['#fff', '#fff', '#fff'],
                fontSize: 15
            },

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
    // colors: ['#FD1D1D', '#5851DB'],
    markers: {
        colors: ['#F44336',]
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
        // show: false,
        labels: {

            style: {
                // colors: SeriesData.countries.map(_ => generate(_)),
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