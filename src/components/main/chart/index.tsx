import { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function ExpensesChart() {

    const [selectedBar, setSelectedBar] = useState<number | null>(3);

    const getMonths = () => {

        const months: Record<string, number> = {
            "Jan": 1, "Feb": 2, "Mar": 3, "Abr": 4, "May": 5, "Jun": 6, "Jul": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12,
        };

        const actualDate: Date = new Date();
        const actualMonth: number = actualDate.getMonth() + 1;

        const sixMonths: Array<number> = [actualMonth];

        for (let i = 1; i <= 3; i++) {
            let prevMonth: number = actualMonth - i;
            if (prevMonth <= 0) {
                prevMonth += 12;
            }
            sixMonths.unshift(prevMonth);
        }

        for (let i2 = 1; i2 <= 2; i2++) {
            let nextMonth: number = actualMonth + i2;
            if (nextMonth > 12) {
                nextMonth -= 12;
            }
            sixMonths.push(nextMonth);
        }

        const sixMonthsName = sixMonths.map(value => Object.keys(months).find(key => months[key] === value)).filter(item => item !== undefined);

        return sixMonthsName;
    }

    const series: { name: string, data: Array<number> }[] = [
        {
            name: "Sales",
            data: [50, 300, 420, 600, 250, 380],
        },
    ];

    const options: ApexOptions = {
        chart: {
            type: "bar",
            toolbar: {
                show: false,
            },
            events: {
                dataPointSelection: (_event, _chartContext, config) => {
                    setSelectedBar(config.dataPointIndex);
                },
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["#333333"],
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        fill: {
            opacity: 1,
        },
        states: {
            hover: {
                filter: {
                    type: "none",
                },
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: "none",
                },
            },
        },
        colors: series[0].data.map((_, index) =>
            index === selectedBar ? "#66BB6A" : "#1b1b1b"
        ),
        plotOptions: {
            bar: {
                columnWidth: "100%",
                borderRadius: 2,
                distributed: true,
            },
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: getMonths(),
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
        },
        tooltip: {
            theme: "dark",
            x: { show: false },
        },
    };

    return <Chart options={options} series={series} type="bar" height="100%" />;
}