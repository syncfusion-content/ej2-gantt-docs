ej.gantt.Gantt.Inject(ej.gantt.Filter);

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
		allowFiltering:true
});
ganttChart.appendTo('#Gantt');

var filterBtn= new ej.buttons.Button();
filterBtn.appendTo('#filter');

document.getElementById('filter').addEventListener('click', function() {
    ganttChart.filterByColumn('TaskName','startswith','Iden');
});



