import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import { SeriesData } from './SeriesData'
console.log(SeriesData)
const options = {
    stroke: {
        curve: 'stepline',
    },
    dataLabels: {
        enabled: false
    },
    chart: {


        // type: "area",
        toolbar: {
            show: false
        }
    },

    xaxis: {
        // trim: true,
        type: 'category',
        categories: SeriesData.dates,
        labels: {

            // hideOverlappingLabels: true,
            style: {
                colors: SeriesData.dates.map(d => '#fff'),
                fontSize: 15
            },

        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        tickAmount: 'dataPoints',

    },
    yaxis: {
        // show: false,
        labels: {

            style: {
                colors: ['#fff', '#fff'],
                fontSize: 15,


            }
        }

    },
    grid: {
        show: false,

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
    return <div id="chart-daily">
        <Chart type='area' options={options} series={series} height={350} />
    </div>
}






