import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
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
    selectionSettings: {
        mode: 'Row',
        type: 'Multiple'
    }
});
gantt.appendTo('#Gantt');

let selectBtn: Button = new Button();
selectBtn.appendTo('#selectRow');

let selBtn: Button = new Button();
selBtn.appendTo('#selectRows');

document.getElementById('selectRow').addEventListener('click', () => {
    gantt.selectionModule.selectRow(2); // passing the record index to select the row
});
document.getElementById('selectRows').addEventListener('click', () => {
    gantt.selectionModule.selectRows([1, 2, 3]); // passing the record index as array collection
});

