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
    editSettings: {
        allowTaskbarEditing: true,
        allowEditing: true,
        mode: 'Auto'
    },
    actionBegin: function(args: any) {
        if (args.requestType == 'beforeSave') {
            console.log(args.modifiedRecords);
        }
    },
});

gantt.appendTo('#Gantt');
