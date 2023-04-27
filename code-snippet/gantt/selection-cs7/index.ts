


import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Selection);

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
    rowSelecting: function (args: any) {
        if (args.data.TaskID == 4) {
            args.cancel = true;
        }
    },
    selectionSettings: {
        mode: 'Row'
    }
});
gantt.appendTo('#Gantt');



