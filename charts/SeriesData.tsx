import data from './data.json'


interface SeriesData {
    totalDeaths: number[]
    totalCases: number[]
    cummulativeDeaths: number
    cummulativeCases: number
    countries: string[]
    dates: string[]
    deathsByDate: number[]
    casesByDate: number[]
}

export const SeriesData = ((): SeriesData => {
    const latestData = data.dates[data.dates.length - 1]
    const totalDeaths: number[] = [];
    const totalCases: number[] = [];
    const countries: string[] = [];
    for (const country in latestData.countries) {
        const countryDeaths = latestData.countries[country].deaths ?? 0;
        const countryCases = latestData.countries[country].cases ?? 0;
        totalDeaths.push(countryDeaths);
        totalCases.push(countryCases);
        countries.push(country);
    }
    const cummulativeDeaths = totalDeaths.reduce((p, c) => p + c, 0);
    const cummulativeCases = totalCases.reduce((p, c) => p + c, 0);

    const dates = data.dates.map(date => date.date)


    const { deathsByDate, casesByDate } = (() => {
        const deathsByDate = []
        const casesByDate = []
        for (const date of data.dates) {
            let deaths = 0
            let cases = 0

            for (const country in date.countries) {
                const countryDeaths = date.countries[country].deaths ?? 0
                const countryCases = date.countries[country].cases ?? 0
                deaths += countryDeaths
                cases += countryCases
            }
            deathsByDate.push(deaths)
            casesByDate.push(cases)
        }
        return { deathsByDate, casesByDate }
    })()

    return {
        totalCases,
        totalDeaths,
        countries,
        cummulativeCases,
        cummulativeDeaths,
        dates,
        deathsByDate,
        casesByDate
    }
})()
