


import { Gantt, RowDD, Edit, Selection } from '@syncfusion/ej2-gantt';
import { projectNewData } from 'datasource.ts';

Gantt.Inject(RowDD, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: projectNewData,
    height:'450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    allowTaskbarDragAndDrop: true,
    allowRowDragAndDrop: true
});
gantt.appendTo('#Gantt');



