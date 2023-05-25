


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

let selBtn: Button = new Button();
selBtn.appendTo('#selectRows');

let clrBtn: Button = new Button();
clrBtn.appendTo('#clearSelection');

document.getElementById('selectRows').addEventListener('click', () => {
    gantt.selectionModule.selectRows([1, 3, 5]); // passing the record index as array collection
});

document.getElementById('clearSelection').addEventListener('click', () => {
    gantt.clearSelection(); // Clear the selected rows
});



