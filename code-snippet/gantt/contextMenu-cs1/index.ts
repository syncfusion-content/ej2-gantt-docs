

import { Gantt, Resize, Sort, ContextMenu, Edit, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Resize, Sort, Edit, ContextMenu, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        dependency: 'Predecessor',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    enableContextMenu: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    }
});

gantt.appendTo('#ContextMenu');




