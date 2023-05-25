ej.gantt.Gantt.Inject(ej.gantt.Selection);

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
		rowSelecting:function(args) {
		    if(args.data.TaskID==4){
				args.cancel=true;
			}
        },
		selectionSettings: {
            mode: 'Row'
        }
    });
ganttChart.appendTo('#Gantt');








