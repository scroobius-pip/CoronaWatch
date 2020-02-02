import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options = {
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Total Infected', 'Total Deaths'],
    }
}


const series = [{
    data: [400, 430]
}]

export default () => {


    return <div id="chart">
        <Chart options={options} series={series} type="bar" height={350} />
    </div>

}



