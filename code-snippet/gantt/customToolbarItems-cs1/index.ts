

import { Gantt, Toolbar } from '@syncfusion/ej2-gantt';
import { NumericTextBox} from '@syncfusion/ej2-inputs';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar);

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
    toolbar: [{ type: 'Input', template: new NumericTextBox({ format: 'c2', value:1, width:150 }) }]
});

gantt.appendTo('#Gantt');



