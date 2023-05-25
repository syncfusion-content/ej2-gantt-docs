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
		selectionSettings: {
            mode: 'Row',
            type: 'Multiple',
            enableToggle: true
        }
    });
ganttChart.appendTo('#Gantt');

var toggleBtn = new ej.buttons.Button();
toggleBtn.appendTo('#toggle');

document.getElementById('toggle').addEventListener('click', () => {
    gantt.selectionSettings.enableToggle = false;
});


