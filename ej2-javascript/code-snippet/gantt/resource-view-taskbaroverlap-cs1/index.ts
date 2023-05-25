


import { Gantt, Toolbar, Edit, Selection } from '@syncfusion/ej2-gantt';
import { overAllocationData, resources } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: overAllocationData,
    resources: resources,
    viewType: 'ResourceView',
    showOverAllocation: true,
    enableMultiTaskbar: true,
    allowTaskbarOverlap: false,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        work: 'work',
        expandState: 'isExpand',
        child: 'subtasks'
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit',
        group: 'resourceGroup'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'resourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' },
    ],
    toolbar: ['ExpandAll', 'CollapseAll'],
    labelSettings: {
        rightLabel: 'resources',
        taskLabel: 'TaskName'
    },
    projectStartDate: new Date('03/28/2019'),
    projectEndDate: new Date('05/18/2019')
});
gantt.appendTo('#Gantt');



