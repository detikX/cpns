// Data retrieved from https://netmarketshare.com/
// Make monochrome colors
// const colors = Highcharts.getOptions().colors.map((c, i) =>
//     // Start out with a darkened base color (negative brighten), and end
//     // up with a much brighter color
//     Highcharts.color(Highcharts.getOptions().colors[0])
//         .brighten((i - 3) / 7)
//         .get()
// );
Highcharts.setOptions({
    colors: ['#fcfcfc', '#aa8143', '#d7a14d', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
});
// Build the chart
Highcharts.chart('container-undur', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: 'rgba(255,255,255,0)',
        borderRadius: 16,
        type: 'pie'
    },
    title: {
        text: 'Data CPNS 2024 yang Mengundurkan Diri',
        style: {
            color: "#fcfcfc",
            font: 'bold 2rem "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    credits: {
        enabled: false //buat highcharts com
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b> Orang',
        style: {
            //fontWeight: 'bold',
            fontFamily: 'Zain',
            fontSize: '1.2rem'
        }
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            // colors,
            borderRadius: 0,
            borderColor: 'transparent',
            dataLabels: {
                enabled: false,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: 20,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                },
                style: {
                    color: "white",//color nama
                    borderColor: '#fafafa',
                    font: 'normal 1rem "Source Code Pro", sans-serif',
                    fontWeight: 'normal',
                    textOutline: false
                    // lineHeight: '2rem'
                },
            }
        },
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 0,
            dataLabels: [{
                enabled: true,
                distance: -40,
                format: '{point.name}'
            }, {
                enabled: true,
                distance: -10,
                format: '{point.y:,.0f}',
                style: {
                    fontSize: '0.9em',
                    color: "#fafafa"
                }
            }],
            showInLegend: false
        }
    },
    series: [{
        name: 'Mengundrukan Diri',
        data: [{
            name: 'Jumlah 2021',
            y: 105
        }, {
            name: 'Jumlah 2023',
            y: 1921
        }, {
            name: 'Jumlah 2024',
            y: 1967
        }]
    }]
});
