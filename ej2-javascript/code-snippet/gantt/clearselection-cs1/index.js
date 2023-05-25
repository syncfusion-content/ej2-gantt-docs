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

var selBtn= new ej.buttons.Button();
selBtn.appendTo('#selectRows');

let clrBtn = new ej.buttons.Button();
clrBtn.appendTo('#clearSelection');

document.getElementById('selectRows').addEventListener('click', () => {
	ganttChart.selectionModule.selectRows([1,2,3]); // passing the record index as array collection
});

document.getElementById('clearSelection').addEventListener('click', () => {
    ganttChart.clearSelection(); // Clear the selected rows
});


