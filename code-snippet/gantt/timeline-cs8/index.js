var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
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
                    format: 'MMM',
                    unit: 'Month'
                },
                    bottomTier: {
                    unit: 'Day'
				}
		}
});
ganttChart.appendTo('#Gantt');

















