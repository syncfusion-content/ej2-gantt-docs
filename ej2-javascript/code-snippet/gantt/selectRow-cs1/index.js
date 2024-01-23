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
        }
    });
ganttChart.appendTo('#Gantt');

var selectBtn= new ej.buttons.Button();
selectBtn.appendTo('#selectRow');

var selBtn= new ej.buttons.Button();
selBtn.appendTo('#selectRows');

document.getElementById('selectRow').addEventListener('click', () => {
    ganttChart.selectionModule.selectRow(2); // passing the record index to select the row
});
document.getElementById('selectRows').addEventListener('click', () => {
	ganttChart.selectionModule.selectRows([1,2,3]); // passing the record index as array collection
});