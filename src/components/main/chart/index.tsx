import Chart from "react-apexcharts";

const chartConfig = {
    type: "bar" as "bar",
    height: '100%',
    series: [
        {
            name: "Sales",
            data: [50, 300, 420, 600, 250, 380,],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["gray"],
        plotOptions: {
            bar: {
                columnWidth: "96%",
                borderRadius: 2,
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
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Jun",
                "Jul",
                "Aug",
            ],
        },
        yaxis: {
            show: false,
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
        },
        grid: {
            show: false,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 0.8,
        },
        tooltip: {
            theme: "dark",
        },
    },
};

export default function ExpensesChart() {
    return (
        <Chart {...chartConfig} />
    );
}