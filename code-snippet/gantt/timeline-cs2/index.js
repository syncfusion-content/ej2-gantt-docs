var ganttChart = new ej.gantt.Gantt({
        dataSource: MonthData,
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
		    timelineViewMode:'Month',
			timelineUnitSize:150
		}
});
ganttChart.appendTo('#Gantt');

















