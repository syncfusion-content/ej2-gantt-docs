


import { Gantt, Filter, Sort, Resize, ColumnMenu } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter, Sort, Resize, ColumnMenu);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    showColumnMenu: true,
    allowFiltering: true,
    allowResizing: true,
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    splitterSettings: {
        position: '100%'
    },
    height: '450px'
});

gantt.appendTo('#Gantt');



