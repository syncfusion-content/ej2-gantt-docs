


import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';
import { getValue } from  '@syncfusion/ej2-base';

Gantt.Inject(Edit, Selection);

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
        allowAdding: true,
        allowEditing: true,
        allowTaskbarEditing: true
    }
});

gantt.appendTo('#Gantt');

let editBtn: Button = new Button();
editBtn.appendTo('#editDialog');

let addBtn: Button = new Button();
addBtn.appendTo('#addDialog');

document.getElementById('editDialog').addEventListener('click', () => {
    gantt.editModule.dialogModule.openEditDialog(getValue('TaskID', gantt.selectionModule.getSelectedRecords()[0]));
});

document.getElementById('addDialog').addEventListener('click', () => {
    gantt.editModule.dialogModule.openAddDialog();
});



