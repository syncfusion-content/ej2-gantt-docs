var ganttChart = new ej.gantt.Gantt({
        dataSource: Data,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks'
        },
		timelineSettings: {
			topTier: {
            unit: 'Month',
            count: 3,
            formatter: (date) => {
                var month = date.getMonth();
                if (month >= 0 && month <=2) {
                return 'Q1';
                } else if(month >= 3 && month <=5) {
                    return 'Q2';
                } else if(month >= 6 && month <=8) {
                    return 'Q3';
                } else {
                    return 'Q4';
                }
            }
	    },
	    bottomTier: {
            unit: 'Month',
            format: 'MMM'
          }
		},
		projectStartDate:new Date('01/04/2019'),
		projectEndDate:new Date('12/30/2019')
});
ganttChart.appendTo('#Gantt');

















