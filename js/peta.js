(async () => {
    Highcharts.setOptions({
        lang: {
            thousandsSep: '.'
        }
    })
    const mapData = await fetch(
        'https://code.highcharts.com/mapdata/countries/id/id-all.topo.json'
    ).then(response => response.json());

    const data = [
        ['Sumatera Utara', 407, 567, 643, 868], ['Jakarta Raya', 181, 231, 315, 401], ['Jawa Barat', 34, 4852, 5777, 7056], ['Jawa Tengah', 7.359, 10011, 12035, 14078],
        ['Jawa Timur', 8952, 12969, 15339, 17581], ['Sumatera Barat', 456, 729, 840, 1077], ['Kalimantan Selatan', 416, 616, 869, 1388], ['Sulawesi Selatan', 1014, 1569, 2932, 4441], ['Aceh', 620, 659, 829, 956], ['Bali', 75, 83, 0, 0], ['Nusa Tenggara Timur', 88, 101, 78, 92], ['Nusa Tenggara Barat', 570, 723, 828, 1256], ['Irian Jaya Barat', 6, 3, 0, 0], ['Riau', 521, 721, 1169, 1375], ['Kepulauan Riau', 190, 256, 0, 0], ['Sumatera Selatan', 862, 1063, 1343, 1626], ['Bengkulu', 733, 926, 979, 1098], ['Lampung', 508, 661, 714, 717], ['Jambi', 616, 774, 1012, 1021], ['Bangka-Belitung', 146, 175, 248, 261], ['Banten', 142, 199, 321, 357], ['Yogyakarta', 332, 519, 689, 757], ['Kalimantan Barat', 515, 690, 960, 1216], ['Kalimantan Tengah', 298, 454, 598, 839], ['Kalimantan Timur', 549, 663, 930, 1330], ['Kalimantan Utara', 67, 92], ['Sulawesi Barat', 140, 204], ['Sulawesi Tenggara', 144, 224, 288, 343], ['Sulawesi Tengah', 291, 354, 417, 462], ['Gorontalo', 559, 829, 962, 1090], ['Sulawesi Utara', 589, 667, 717, 909], ['Maluku Utara', 32, 32, 98, 120], ['Maluku', 15, 25, 6, 0], ['Papua', 123, 123, 157, 202], ['Papua', 123, 123, 157, 202]





    ];
    demColor = 'rgba(74,131,240,0.80)',
        repColor = 'rgba(220,71,71,0.80)',
        libColor = 'rgba(240,190,50,0.80)',
        grnColor = 'rgba(90,200,90,0.80)';


    // Compute max votes to find relative sizes of bubbles
    const maxVotes = data.reduce((max, row) => Math.max(max, row[5]), 0);

    // Build the chart
    const chart = Highcharts.mapChart('container-peta', {

        chart: {
            animation: false,
            backgroundColor: 'rgba(255,255,255,0)',
            borderRadius: 0,
            // enableMouseWheelZoom: false,
            // zoomType: 'xy',

        },
        mapNavigation: {
            enabled: true,
            enableMouseWheelZoom: false // This disables zooming with scroll
        },

        legend: {
            itemStyle: {
                font: 'normal .8rem jost',
                color: '#fafafa'
            },
        },
        tooltip: {
            style: {
                //fontWeight: 'bold',
                fontFamily: 'jost',
                fontSize: '1rem'
            }
        },

        accessibility: {
            description: 'Complex map demo showing voting results for US ' +
                'states, where each state has a pie chart overlaid showing ' +
                'the vote distribution.'
        },

        colorAxis: {
            dataClasses: [{
                from: 0,
                to: 1,
                color: 'rgba(124,181,236,0.5)',
                name: '2024'
            }, {
                from: -1,
                to: 0,
                color: 'rgba(244,91,91,0.5)',
                name: '2023'
            }, {
                from: 2,
                to: 3,
                name: '2022',
                color: libColor
            }, {
                from: 3,
                to: 4,
                name: '2021',
                color: grnColor
            }]
        },

        mapNavigation: {
            enabled: true
        },

        title: {
            text: null,
            align: 'left'
        },
        credits: {
            enabled: false //buat highcharts com
        },

        // Default options for the pies

        series: [{
            mapData,
            data: data,
            dataLabels: [{
                style: {
                    color: "#fafafa"
                }
            }],
            name: 'States',
            accessibility: {
                point: {
                    descriptionFormatter(point) {
                        const party = point.value > 0 ?
                            'democrat' : 'republican';
                        return point.name +
                            ', ' + party + '. Total votes: ' + point.sumVotes +
                            '. 2023: ' + point.demVotes +
                            '. 2024: ' + point.repVotes +
                            '. 2022: ' + point.libVotes +
                            '. 2021: ' + point.grnVotes + '.';
                    }
                }
            },
            borderColor: '#FFF',
            joinBy: ['name', 'id'],
            keys: [
                'id', 'demVotes', 'repVotes', 'libVotes', 'grnVotes',
                'sumVotes', 'value', 'pieOffset'
            ],
            tooltip: {
                headerFormat: '',
                style: {
                    //fontWeight: 'bold',
                    fontFamily: 'jost',
                    fontSize: '1rem'
                },
                pointFormatter() {
                    const hoverVotes = this.hoverVotes; // Used by pie only
                    return '<b>' + this.id + ' </b><br/>' +
                        [
                            ['2024', this.demVotes, demColor],
                            ['2023', this.repVotes, repColor],
                            ['2022', this.libVotes, libColor],
                            ['2021', this.grnVotes, grnColor]
                        ]
                            //.sort((a, b) => b[1] - a[1]) // Sort tooltip by
                            // most votes
                            .map(
                                line => '<span style="color:' + line[2] +
                                    // Colorized bullet
                                    '">\u25CF</span> ' +
                                    // Party and votes
                                    (line[0] === hoverVotes ? '<b>' : '') +
                                    line[0] + ': ' +
                                    Highcharts.numberFormat(line[1], 0) +
                                    (line[0] === hoverVotes ? '</b>' : '') +
                                    '<br/>'
                            )
                            .join('')
                    //     +
                    // '<hr/>Totalx: ' +
                    // Highcharts.numberFormat(this.sumVotes, 0);
                }
            }
        }, {
            name: 'Connectors',
            type: 'mapline',
            color: '#fff',
            zIndex: 5,
            showInLegend: false,
            enableMouseTracking: false,
            accessibility: {
                enabled: false
            }
        }]
    });


    chart.series[0].points.forEach(state => {
        // Add the pie for this state
        // chart.addSeries({
        //     type: 'pie',
        //     name: state.id,
        //     zIndex: 2, // Keep pies above connector lines
        //     minSize: 5,
        //     maxSize: 35,
        //     onPoint: {
        //         id: state.id,
        //         z: (() => {
        //             const mapView = chart.mapView,
        //                 zoomFactor = mapView.zoom / mapView.minZoom;

        //             return Math.max(
        //                 chart.chartWidth / 45 * zoomFactor, // Min size
        //                 chart.chartWidth /
        //                 11 * zoomFactor * state.sumVotes / maxVotes
        //             );
        //         })()
        //     },
        //     states: {
        //         inactive: {
        //             enabled: false
        //         }
        //     },
        //     accessibility: {
        //         enabled: false
        //     },
        //     tooltip: {
        //         // Use the state tooltip for the pies as well
        //         pointFormatter() {
        //             return state.series.tooltipOptions.pointFormatter.call({
        //                 id: state.id,
        //                 hoverVotes: this.name,
        //                 demVotes: state.demVotes,
        //                 repVotes: state.repVotes,
        //                 libVotes: state.libVotes,
        //                 grnVotes: state.grnVotes,
        //                 sumVotes: state.sumVotes
        //             });
        //         }
        //     },
        //     data: [{
        //         name: 'Democrats',
        //         y: state.demVotes,
        //         color: demColor
        //     }, {
        //         name: 'Republicans',
        //         y: state.repVotes,
        //         color: repColor
        //     }, {
        //         name: 'Libertarians',
        //         y: state.libVotes,
        //         color: libColor
        //     }, {
        //         name: 'Green',
        //         y: state.grnVotes,
        //         color: grnColor
        //     }]
        // }, false);
    });

    // Only redraw once all pies and connectors have been added
    chart.redraw();
})();
