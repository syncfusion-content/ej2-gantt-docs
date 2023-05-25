ej.gantt.Gantt.Inject(ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    toolbar: [{ type: 'Input', template: new ej.inputs.NumericTextBox({ format: 'c2', value:1, width:150 }) }]
});

ganttChart.appendTo('#Gantt');


