ej.gantt.Gantt.Inject(ej.gantt.Filter);

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
		filterSettings: {
            columns: [{ field: 'TaskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Identify' },
               { field: 'TaskID', matchCase: false, operator: 'equal', predicate: 'and', value: 2 }]
        },
		allowFiltering: true
    });
ganttChart.appendTo('#Gantt');



