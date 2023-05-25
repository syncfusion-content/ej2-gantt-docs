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
            mode: 'Cell'
        }
    });
ganttChart.appendTo('#Gantt');

var cellBtn= new ej.buttons.Button();
cellBtn.appendTo('#selectCell');

document.getElementById('selectCell').addEventListener('click', () => {
	ganttChart.selectionModule.selectCell({ cellIndex: 1, rowIndex: 1 });
});










