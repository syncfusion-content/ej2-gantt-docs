


import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit);

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
    taskbarEditing: function (args: any) {
        if (args.data.TaskID == 4) // We can't edit Task Id 4
            args.cancel = true;
    },
    queryTaskbarInfo: function (args) {
        if (args.data.TaskID == 6) {
            args.taskbarElement.className += ' e-preventEdit' // Taskbar editing indicators are hidden
        }
    },
    editSettings: {
        allowTaskbarEditing: true
    }
});
gantt.appendTo('#Gantt');



