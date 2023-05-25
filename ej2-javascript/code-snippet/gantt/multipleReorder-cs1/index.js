ej.gantt.Gantt.Inject(ej.gantt.Reorder);

var ganttChart = new ej.gantt.Gantt({
         dataSource: GanttData,
		 allowReordering: true,
	     taskFields: {
            id: 'TaskID',
            name: 'TaskName',
			startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks'
        },
		splitterSettings:{
		  position:'100%'
		},
		height:'450px',
		columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
	        { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' }
        ]
		
	});
ganttChart.appendTo('#Gantt');


var reorderMultipleCols = new ej.buttons.Button();
reorderMultipleCols.appendTo('#reorderMultipleCols');

document.getElementById('reorderMultipleCols').addEventListener('click', function(){
	ganttChart.reorderColumns(['TaskID','TaskName'],'Progress');
});

