


import { Gantt, Toolbar, Edit, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    allowSelection: true,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    toolbar: ['Edit', 'ZoomToFit'],
    editSettings: {
        allowEditing: true,
        allowTaskbarEditing: true,
    },
    labelSettings: {
        leftLabel: 'TaskName'
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/28/2019'),
    taskbarEdited: function(args){
      if (args) {
        var obj = document.getElementById("Gantt").ej2_instances[0];
        obj.dataSource = GanttData;
        obj.fitToProject();
      }
    },
    actionComplete: function (args) {
      if ((args.action === "CellEditing" || args.action === "DialogEditing") && args.requestType === "save") {
        var obj = document.getElementById("Gantt").ej2_instances[0];
        obj.dataSource = GanttData;
        obj.fitToProject();
      }
    }
});
gantt.appendTo('#Gantt');


