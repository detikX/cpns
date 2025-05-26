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
    credits: {
        enabled: false //buat highcharts com
    },
    subtitle: {
        text: null,
    },
    xAxis: {
        categories: [/*'2016', '2018',*/ '2021', '2022', '2024'],
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
        valueSuffix: '',
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
    //legend: { enabled: false },
    legend: {
        itemStyle: {
            font: 'bold .8rem Quicksand',
            color: '#1b1b1b'
        },


    },

    series: [

        {
            name: 'Jumlah Pendaftar',
            color: "#fafafa",
            // {y: 34.4, color: 'red'}, 
            data: [/*460300, 520000,*/ { y: 226741, color: '#fafafa' }, { y: 1263181, color: '#fafafa' }, { y: 3963832, color: '#fafafa' }]
        },
        {
            name: 'Formasi yang Dibuka',
            // {y: 34.4, color: 'red'},
            color: "#ccc",
            data: [/*460300, 520000,*/ { y: 126741, color: '#ccc' }, { y: 28903, color: '#ccc' }, { y: 1289824, color: '#ccc' }]
        },
        // {
        //     name: 'Formasi yang Dibuka',
        //     // {y: 34.4, color: 'red'}, 
        //     data: [/*460300, 520000,*/ { y: 105, color: '#d3ae89' }, { y: 1921, color: '#d3ae89' }, { y: 1967, color: '#d3ae89' }]
        // }
    ]
});
