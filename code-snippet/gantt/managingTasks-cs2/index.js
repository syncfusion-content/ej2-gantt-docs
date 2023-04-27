ej.gantt.Gantt.Inject(ej.gantt.Toolbar);

function durationFormat(field, data, column) {
    return data[field];
}
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
    editSettings: {
        allowEditing: true
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date'  },
        { field: 'Duration', headerText: 'Duration', editType:'numericedit', edit: { params: { min:1 } }, valueAccessor: durationFormat},
        { field: 'Progress', headerText: 'Progress', edit: { params: { showSpinButton: false }  }},
    ],
});
ganttChart.appendTo('#Gantt');















