import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import { SeriesData } from './SeriesData'
import { colors } from '../styles';
const options = {
    stroke: {
        curve: 'straight',
    },
    dataLabels: {
        enabled: false
    },

    chart: {

        height: '100%',
        type: "area",
        toolbar: {
            // show: false
        }
    },

    xaxis: {
        // show: false,

        trim: true,
        type: 'category',
        categories: SeriesData.dates,
        labels: {
            // show: false,
            rotate: -65,
            rotateAlways: true,
            hideOverlappingLabels: true,
            style: {
                colors: SeriesData.dates.map(d => 'grey'),
                fontSize: 10
            },

        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },


    },
    yaxis: {
        // show: false,
        labels: {

            align: 'left',
            style: {
                colors: ['#fff', '#fff'],
                fontSize: 10,


            }
        }

    },
    grid: {
        // show: false,
        borderColor: '#757575',
    },
    tooltip: {
        theme: 'dark'
    },
    // colors: ['#FD1D1D'],
    markers: {
        // colors: ['#F44336',],
        size: 5
    },
    legend: {
        show: true,
        position: 'bottom',
        labels: {
            colors: ['#fff']
        },
        fontSize: 15
    },
    theme: {
        palette: 'palette7'
    },
    title: {
        text: 'Total Cases and Deaths Daily',
        // offsetY: -10,
        // floating: true,
        // align: 'right',
        style: {
            color: '#fff'
        }
    }
};

const series = [
    {
        name: "Total Deaths",
        data: SeriesData.deathsByDate
    },
    {
        name: "Total Cases",
        data: SeriesData.casesByDate
    },
]

export default () => {
    return <div style={{ height: '60vh' }}>
        <Chart type='area' options={options} series={series} height={'100%'} width={'100%'} />
    </div>
}






