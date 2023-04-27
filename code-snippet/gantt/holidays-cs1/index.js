ej.gantt.Gantt.Inject(ej.gantt.DayMarkers);

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
		 holidays: [{
            from: "04/04/2019",
			to:"04/05/2019",
            label: " Public holidays",
			cssClass:"e-custom-holiday"
            
        },
		{
            from: "04/12/2019",
			to:"04/12/2019",
            label: " Public holiday",
			cssClass:"e-custom-holiday"
            
        }]
});
ganttChart.appendTo('#Gantt');





