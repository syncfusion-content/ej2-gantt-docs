var ganttChart = new ej.gantt.Gantt({
        dataSource: HourData,
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
		    timelineViewMode:'Hour'
		}
});
ganttChart.appendTo('#Gantt');

















