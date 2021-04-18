import {Line} from 'vue-chartjs'

export default {
    extends: Line,
    data: function() {
        return {
            datacollection: {
                labels: [2007, 2008, 2009, 2010, 2011, 2012, 2013],
                datasets: [{ 
                    data: [39905, 38524, 39465, 43122, 45281, 41540, 43201],
                    borderColor: "red",
                    fill: false
                }]
            }, 
            options: {
                title: {
                    display: true,
                    text: 'Carbon Dioxide Emissions from Combustion of Fossil Fuels in Singapore',
                },
                elements: {
                    line: {
                        tension: 0,
                        color: 'red'
                    }
                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                        labelString: 'Year'
                      }
                    }],
                    yAxes: [{
                        scaleLabel: {
                          display: true,
                          labelString: 'Amount of Carbon Dioxide Emitted (Kilotons)'
                        }
                      }]
                },
                responsive: false,
                maintainAspectRatio: false
            }
        }
    },
    
    mounted () {
        this.renderChart(this.datacollection, this.options)
    }
}
