const tabgroup = $('.tabs');
const tabs = $('.tabs li');

const canvas = $('.chart_wrap canvas');

canvas.hide();
canvas.eq(0).show();

tabs.on('click', function () {
	tabs.removeClass('active');
	canvas.hide();
	$(this).addClass('active');
	let tabIdx = $(this).index();
	canvas.eq(tabIdx).show();
});

const sales = document.getElementById('chart_sales');
const order = document.getElementById('chart_order');

const dataSales = {
	labels: labels,
	datasets: [
		{
			label: '매출',
			type: 'bar',
			data: orderDataSales,
			backgroundColor: '#95a4ac',
			barThickness: 16,
			borderRadius: 4,
			borderSkipped: true,
		},
	],
};

const chartSales = new Chart(sales, {
	type: 'line',
	data: dataSales,
	/*plugins: [ChartDataLabels],*/
	options: {
		maintainAspectRatio: false,
		plugins: {
			title: {
				text: '매출현황',
				display: false,
			},
			legend: {
				position: 'top',
			},
		},
		/*        elements: {
            bar: {
                backgroundColor: '#fff',
                borderColor: '#fff',
                borderWidth: 5,
            }
        },*/
		scales: {
			x: {
				display: true,
				title: {
					display: false,
					text: 'Day',
					color: '#ddd',
					font: {
						size: 16,
					},
					padding: { top: 20, left: 0, right: 0, bottom: 0 },
				},
			},
			y: {
				display: true,
				axis: 'y',
				position: 'left',
				title: {
					display: true,
					//text: '매출',
					align: 'end',
					color: '#000',
					font: {
						size: 18,
					},
					padding: { top: 0, left: 0, right: 0, bottom: 0 },
				},
				beginAtZero: true,
				afterDataLimits: scale => {
					scale.max = scale.max * 1.2;
				},
			},
		},
	},
});

const dataOrder = {
	labels: labels,
	datasets: [
		{
			label: '주문',
			type: 'bar',
			data: orderDataCnt,
			backgroundColor: '#34444c',
			barThickness: 16,
			borderRadius: 4,
			borderSkipped: true,
		},
	],
};

const chartOrder = new Chart(order, {
	type: 'line',
	data: dataOrder,
	/*plugins: [ChartDataLabels],*/
	options: {
		maintainAspectRatio: false,
		plugins: {
			title: {
				text: 'dd',
				display: false,
			},
		},
		/*        elements: {
            bar: {
                backgroundColor: '#fff',
                borderColor: '#fff',
                borderWidth: 5
            }
        },*/
		scales: {
			x: {
				display: true,
				title: {
					display: false,
					text: 'Day',
					color: '#ddd',
					font: {
						size: 16,
					},
					padding: { top: 20, left: 0, right: 0, bottom: 0 },
				},
			},
			y: {
				display: true,
				title: {
					display: true,
					//text: '매출',
					color: '#000',
					font: {
						size: 18,
					},
					padding: { top: 0, left: 0, right: 0, bottom: 0 },
				},
				afterDataLimits: scale => {
					scale.max = scale.max * 2;
				},
				ticks: {
					beginAtZero: true,
					stepSize: 1,
				},
			},
		},
	},
});
