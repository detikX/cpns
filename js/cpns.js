Highcharts.chart('container-cpnsx', {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(170,129,67,1)',
        // borderRadius: '16px'
    },
    title: {
        text: "Data CPNS",
        style: {
            color: "#1b1b1b",
            font: 'bold 18px "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    exporting: {
        enabled: true
    },
    xAxis: {
        categories: [/*'2016', '2018',*/ '2021', '2022', '2024'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
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
        valueSuffix: ' orang',
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
        // {
        //     name: 'Formasi yang dibuka',
        //     // {y: 34.4, color: 'red'}, 
        //     data: [/*460300, 520000,*/ { y: 126741, color: '#a67e55' }, { y: 8941, color: '#a67e55' }, { y: 3963832, color: '#a67e55' }]
        // },
        {
            name: 'Mengundurkan Diri',
            // {y: 34.4, color: 'red'}, 
            data: [/*460300, 520000,*/ { y: 126741, color: '#d3ae89' }, { y: 1921, color: '#d3ae89' }, { y: 1967, color: '#d3ae89' }]
        },
        {
            name: 'Mengundurkan Diri',
            // {y: 34.4, color: 'red'}, 
            data: [/*460300, 520000,*/ { y: 105, color: '#d3ae89' }, { y: 1921, color: '#d3ae89' }, { y: 1967, color: '#d3ae89' }]
        },

    ]
});
