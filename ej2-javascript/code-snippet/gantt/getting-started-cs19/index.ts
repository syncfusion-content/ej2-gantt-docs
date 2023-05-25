

import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter);

let gantt: Gantt = new Gantt({
        dataSource: GanttData,
        height:'450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
        },
        allowFiltering:true
});

gantt.appendTo('#Gantt');



