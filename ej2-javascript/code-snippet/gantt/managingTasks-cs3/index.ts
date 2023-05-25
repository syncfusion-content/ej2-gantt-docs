


import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit);
let elem: HTMLElement;
let dropdownlistObj: DropDownList;

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
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        {
            field: 'TaskName', headerText: 'Task Name',
            edit: {
                create: () => {
                    elem = document.createElement('input');
                    return elem;
                },
                read: () => {
                   return dropdownlistObj.value;
                },
                destroy: () => {
                    dropdownlistObj.destroy();
                },
                write: (args: Object) => {
                    dropdownlistObj = new DropDownList({
                        dataSource: gantt.treeGrid.grid.dataSource,
                        fields: { value: 'TaskName' },
                        value: args.rowData[args.column.field],
                        floatLabelType: 'Auto',
                    });
                    dropdownlistObj.appendTo(elem);
                }
            }
        },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' },
    ],

});

gantt.appendTo('#Gantt');



