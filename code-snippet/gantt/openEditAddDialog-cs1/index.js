ej.gantt.Gantt.Inject(ej.gantt.Edit);

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
		editSettings: {
		   allowEditing:true,
           allowAdding: true
         }
});
ganttChart.appendTo('#Gantt');

var editBtn= new ej.buttons.Button();
editBtn.appendTo('#editDialog');

var addBtn= new ej.buttons.Button();
addBtn.appendTo('#addDialog');

document.getElementById('editDialog').addEventListener('click', () => {
    ganttChart.editModule.dialogModule.openEditDialog();
});

document.getElementById('addDialog').addEventListener('click', () => {
    ganttChart.editModule.dialogModule.openAddDialog();
});







