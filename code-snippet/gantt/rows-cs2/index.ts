


import { Gantt, Toolbar, Edit, ActionBeginArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    editSettings: {
        allowAdding: true
    },
    actionBegin : (args: ActionBeginArgs) => {
        if (args.requestType == 'beforeOpenAddDialog') {
            args.rowData.TaskName = 'Gantt';
            args.rowData.Progress = 70;
            args.rowData.ganttProperties.taskName = 'Gantt';
            args.rowData.ganttProperties.progress = 70;
        }
    },
    toolbar: ['Add']
});
gantt.appendTo('#Gantt');



