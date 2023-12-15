


import { Gantt, Edit, Selection, Toolbar } from '@syncfusion/ej2-gantt';
import { GanttData,editingResources } from 'datasource.ts';

Gantt.Inject(Edit, Selection, Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        dependency: 'Predecessor',
        progress: 'Progress',
        child: 'subtasks',
        resourceInfo: 'resources'
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName'
    },
    resources: editingResources,
    actionBegin:function(args:any) {
        if (args.requestType == "beforeOpenEditDialog" || args.requestType == "beforeOpenAddDialog") {
            args.Dependency.columns[3].validationRules = { required: true }
            args.Resources.columns[2].allowEditing = true
            args.Resources.columns[2].validationRules = { required: true }
        }
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel'],
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName', validationRules: { required: true } },
        { field: 'StartDate',editType: 'datetimepickeredit', edit: { params: { format: 'M/d/y hh:mm a' } },
        format: { format: 'M/d/y hh:mm a', type: 'dateTime' }, validationRules: { required: true, date: true } },
        { field: 'Duration', validationRules: { required: true } },
        { field: 'Progress', validationRules: { required: true } }
    ],
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    }
});

gantt.appendTo('#Gantt');



