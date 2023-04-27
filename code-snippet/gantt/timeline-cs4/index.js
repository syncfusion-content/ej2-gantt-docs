var ganttChart = new ej.gantt.Gantt({
        dataSource: DayData,
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
		    timelineViewMode:'Day'
		}
});
ganttChart.appendTo('#Gantt');

















