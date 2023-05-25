


import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 150},
        { field: 'StartDate', headerText: 'StartDate', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150},
    ],
    enablePersistence: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    dataBound: dataBound
});
gantt.appendTo('#Gantt');

function dataBound(args: any) {
    let cloned = this.addOnPersist;
    this.addOnPersist = function (key: any) {
        key = key.filter((item: string)  => item !== "columns");
        return cloned.call(this, key);
    };
}

document.getElementById('add').onclick = () => {
    let obj = { field: "Progress", headerText: 'Progress', width: 100 };
    gantt.columns.push(obj as any); //you can add the columns by using the Gantt columns method
    gantt.treeGrid.refreshColumns();
};

document.getElementById('remove').onclick = () => {
    gantt.columns.pop();
    gantt.treeGrid.refreshColumns();
};



