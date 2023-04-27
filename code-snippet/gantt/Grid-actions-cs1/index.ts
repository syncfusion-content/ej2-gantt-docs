


import { Gantt, Filter, Sort, Resize, ColumnMenu, Reorder, Selection, Edit }  from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit, Selection, Filter, Sort, Resize, Reorder);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    allowFiltering: true,
    allowSorting: true,
    allowReordering: true,
    splitterSettings: {
        position: '75%'
    },
    editSettings: {
        allowEditing: true
    },
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'Progress', headerText: 'Progress', allowReordering: false },
        { field: 'TaskName', headerText: 'Task Name', allowSorting: false },
        { field: 'StartDate', headerText: 'Start Date', allowEditing: false },
        { field: 'Duration', headerText: 'Duration', allowFiltering: false }
    ]
});
gantt.appendTo('#Gantt');



