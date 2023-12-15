ej.base.setCulture('de-DE');
   ej.base.L10n.load({
        'de-DE': {
            grid: {
                EmptyRecord: 'Nothing to show here.',
            },
        }
    });
var ganttChart = new ej.gantt.Gantt({
  dataSource: [],
  height: '450px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    dependency: 'Predecessor',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks',
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'Predecessor', headerText: 'Depedency', width: '150' },
    { field: 'TaskName', headerText: 'Task Name', width: '150' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
  ],
});
ganttChart.appendTo('#Gantt');














