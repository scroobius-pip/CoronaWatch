import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
const options = {
    stroke: {
        curve: 'stepline',
    },
    dataLabels: {
        enabled: false
    },
    chart: {
        height: 380,
        width: "100%",
        // type: "area",
        toolbar: {
            show: false
        }
    },

    xaxis: {
        categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan"
        ],
        labels: {
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
    }
};

const series = [
    {
        name: "Total Deaths",
        data: [45, 52, 38, 45, 19, 33]
    },
    {
        name: "Total Cases",
        data: [5, 5, 3, 5, 9, 3]
    },
]

export default () => {
    return <div id="chart-daily">
        <Chart type='area' options={options} series={series} height={350} />
    </div>
}






