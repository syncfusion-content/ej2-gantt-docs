
var ganttChart = new ej.gantt.Gantt({
        dataSource: WeekData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			dependency: 'Predecessor',
            child: 'subtasks'
        },
		timelineSettings: {
			timelineViewMode:'Week'
		}
});
ganttChart.appendTo('#Gantt');











