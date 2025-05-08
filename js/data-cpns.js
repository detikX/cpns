Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})

Highcharts.chart('container', {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(170,129,67,1)',
        // borderRadius: '16px'
    },
    title: {
        text: "Data Penerimaan CPNS",
        style: {
            color: "#1b1b1b",
            font: 'bold 18px "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    exporting: {
        enabled: true
    },
    credits: {
        enabled: false //buat highcharts com
    },
    subtitle: {
        text: null,
    },
    xAxis: {
        categories: [/*'2016', '2018',*/ '2020', '2022', '2024'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        },
        labels: {
            // text: null,
            // formatter: function () {
            //     // var a = this.y.toString().replace('.', ',');
            //     // return a + '%';
            // },
            style: {
                // color: "#fafafa",
                font: 'bold 14px "Source Code Pro", sans-serif',
                // lineHeight: '2rem'
                color: "#1b1b1b",
                // fontWeight: 'bold',
                textOutline: false
            }
        },
    },
    yAxis: {
        min: 0,
        title: {
            text: null
        },
        labels: {
            // text: null,
            // formatter: function () {
            //     // var a = this.y.toString().replace('.', ',');
            //     // return a + '%';
            // },
            style: {
                // color: "#fafafa",
                color: '#1b1b1b',
                font: 'bold 14px "Source Code Pro", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    },
    tooltip: {
        valueSuffix: ' (Unit)',
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Source Code Pro',
            fontSize: '1rem'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                style: {
                    // color: "#fafafa",
                    font: 'bold 1.2rem "Source Code Pro", sans-serif',
                    // lineHeight: '2rem'
                    fontWeight: 'bold',
                    textOutline: false
                },
            }
        }
    },
    legend: { enabled: false },

    series: [

        {
            name: 'Bus Listrik',
            // {y: 34.4, color: 'red'}, 
            data: [/*460300, 520000,*/ { y: 485000, color: '#d3ae89' }, { y: 500200, color: '#d3ae89' }, { y: 200340, color: '#d3ae89' }]
        }
    ]
});
