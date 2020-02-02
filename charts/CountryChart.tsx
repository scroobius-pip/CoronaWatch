import dynamic from 'next/dynamic'
import { Props } from 'react-apexcharts'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })


export default () => {
    return <>
        <Chart1 />
    </>
}



const series1 = [{
    data: [44, 55,],
    name: 'Total Deaths'
}, {
    data: [53, 32,],
    name: 'Total Cases'
}]


const Chart1 = () => {
    return <Chart type='bar' options={options} series={series1} />
}





var options = {

    chart: {
        type: 'bar',
        height: 430
    },
    plotOptions: {
        bar: {
            horizontal: true,
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
        show: true,
        width: 1,
        colors: ['#fff']
    },
    xaxis: {
        categories: ['China', 'Japan'],
        labels: {
            style: {
                colors: ['#fff', '#fff'],
                fontSize: 20
            },

        },
        axisBorder: {
            // show: false
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
                colors: ['#fff', '#fff'],
                fontSize: 20,


            }
        }

    },
    theme: {
        palette: 'palette7'
    }
};