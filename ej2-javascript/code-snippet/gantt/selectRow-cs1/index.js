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
        }
    });
ganttChart.appendTo('#Gantt');

var selectBtn= new ej.buttons.Button();
selectBtn.appendTo('#selectRow');

document.getElementById('selectRow').addEventListener('click', () => {
    ganttChart.selectionModule.selectRow(2); // passing the record index to select the row
});








