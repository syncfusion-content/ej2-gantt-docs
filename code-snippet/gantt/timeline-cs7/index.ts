

import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { timelineData } from 'datasource.ts';

Gantt.Inject(Edit);

let gantt: Gantt = new Gantt({
    dataSource: timelineData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    timelineSettings: {
        updateTimescaleView: false
    },
    editSettings: {
        allowEditing: true,
        allowTaskbarEditing: true
    }
});
gantt.appendTo('#Gantt');



