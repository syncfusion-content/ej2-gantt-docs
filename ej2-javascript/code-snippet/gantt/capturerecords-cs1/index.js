ej.gantt.Gantt.Inject(ej.gantt.Edit);

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
		editSettings: {
              allowEditing: true,
	      allowTaskbarEditing:true,
              mode:'Auto'
            },
        actionBegin(args) {
            if (args.requestType == 'beforeSave') {
                console.log(args.modifiedRecords);
            }
        },
});
ganttChart.appendTo('#Gantt');
