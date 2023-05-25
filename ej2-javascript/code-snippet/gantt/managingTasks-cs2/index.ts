


import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit);
function durationFormat(field: string, data: Object, column: Object): string {
    return data[field];
}
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
        allowEditing: true
    },
    toolbar: ['Edit'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date'  },
        { field: 'Duration', headerText: 'Duration', editType:'numericedit', edit: { params: { min:1 } }, valueAccessor: durationFormat },
        { field: 'Progress', headerText: 'Progress', edit: { params: { showSpinButton: false }  } },
    ],
});

gantt.appendTo('#Gantt');



