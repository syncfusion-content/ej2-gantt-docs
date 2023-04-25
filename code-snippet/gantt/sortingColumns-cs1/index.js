ej.gantt.Gantt.Inject(ej.gantt.Sort);

var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		allowSorting: true,
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

var sortBtn= new ej.buttons.Button();
sortBtn.appendTo('#sortColumn');

document.getElementById('sortColumn').addEventListener('click', () => {
    var ganttObj= document.getElementById('Gantt').ej2_instances[0];
	ganttObj.sortModule.sortColumn('TaskName',"Descending",false)
});



