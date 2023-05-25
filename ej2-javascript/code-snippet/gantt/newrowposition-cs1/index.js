var clickHandler = function(args){
	if (args.item.id === 'GanttExport_add') {
			 var contextMenuObj = document.getElementById("contextmenu").ej2_instances[0];
             contextMenuObj.open(60, 20);
		}
};
ej.gantt.Gantt.Inject(ej.gantt.Toolbar);
var menuItems = [
    {
        text: 'Bottom'
    },
    {
        text: 'Above'
    },
    {
        text: 'Below'
    },
    {
        text: 'Child'
    },
    {
        text: 'Top'
    }];
var menuOptions = {
        items: menuItems,
        select: select
    };

var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');

function select(args: any) {
  let gantt: any = (document.getElementsByClassName('e-gantt')[0] as any).ej2_instances[0];
  if (args.item.text === "Bottom") {
    gantt.editSettings.newRowPosition = "Bottom";
    gantt.openAddDialog();
  } else if (args.item.text === "Above") {
    if (gantt.selectedRowIndex == -1) {
      alert("Please select any row");
    } else {
      gantt.editSettings.newRowPosition = "Above";
      gantt.openAddDialog();
    }
  } else if (args.item.text === "Below") {
    if (gantt.selectedRowIndex == -1) {
      alert("Please select any row");
    } else {
      gantt.editSettings.newRowPosition = "Below";
      gantt.openAddDialog();
    }

  } else if (args.item.text === "Child") {
    if (gantt.selectedRowIndex == -1) {
      alert("Please select any row");
    } else {
      gantt.editSettings.newRowPosition = "Child";
      gantt.openAddDialog();
    }
  } else if (args.item.text === "Top") {
    gantt.editSettings.newRowPosition = "Top";
    gantt.openAddDialog();
  }
}

var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		allowSelection: true,
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks'
        },
		editSettings:{
			allowAdding:true
		},
        toolbar: ['Edit', { text: 'Add', tooltipText: 'Add', id: 'Add' }],
        toolbarClick: clickHandler,

});
ganttChart.appendTo('#Gantt');

