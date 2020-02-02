import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const data = [
    {
        date: '21 Jan',
        deaths: 9,
        cases: 446
    },
    {
        date: '22 Jan',
        deaths: 17,
        cases: 579
    },
    {
        date: '23 Jan',
        deaths: 25,
        cases: 446
    },
    {
        date: '24 Jan',
        deaths: 41,
        cases: 0
    },
    {
        date: '25 Jan',
        deaths: 56,
        cases: 0
    },
    {
        date: '26 Jan',
        deaths: 80,
        cases: 0
    },
    {
        date: '27 Jan',
        deaths: 106,
        cases: 0
    },
    {
        date: '28 Jan',
        deaths: 132,
        cases: 0
    },
    {
        date: '29 Jan',
        deaths: 170,
        cases: 0
    },
    {
        date: '30 Jan',
        deaths: 213,
        cases: 0
    },
    {
        date: '31 Jan',
        deaths: 259,
        cases: 0
    },
    {
        date: '1 Feb',
        deaths: 304,
        cases: 0
    }
]

const options = {
    stroke: {
        // curve: 'stepline',
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
        categories: data.map(d => d.date),
        labels: {

            // hideOverlappingLabels: true,
            style: {
                colors: data.map(d => '#fff'),
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
        data: data.map(d => d.deaths)
    },
    {
        name: "Total Cases",
        data: data.map(d => d.cases)
    },
]

export default () => {
    return <div id="chart-daily">
        <Chart type='area' options={options} series={series} height={350} />
    </div>
}






