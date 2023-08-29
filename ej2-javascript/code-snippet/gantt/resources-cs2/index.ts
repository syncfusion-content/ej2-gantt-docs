import { Gantt,Edit,Selection } from '@syncfusion/ej2-gantt';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
Gantt.Inject(Edit,Selection);

let GanttData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('03/29/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 2,
                Progress: 30,  resources: [{ resourceId: 1, Unit: 70 }, 6]
            },
            {
                TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4,
                resources: [2, 3, 5]
            },
            {
                TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 1,
                resources: [8, { resourceId: 9, Unit: 50 }], Progress: 30
            },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
                Duration: 3, Progress: 30, resources: [{ resourceId: 4, Unit: 50 }]
            },
            {
                TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3,
                 resources: [4, 8]
            },
            {
                TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'),
                Duration: 2,  resources: [12, { resourceId: 5, Unit: 70 }]
            }
        ]
    },
    {
        TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/01/2019'), Duration: 1,
        Progress: 30, resources: [12]
    }
];
let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        resourceInfo: 'resources',
        child: 'subtasks'
    },
    columns: [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Task Name', width: '180' },
        { field: 'resources', headerText: 'Resources', width: '160' },
        { field: 'Duration', width: '100' },
    ],
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit',
    },
    labelSettings: {
        rightLabel: 'resources'
    },
    resources: [
        { resourceId: 1, resourceName: 'Martin Tamer' },
        { resourceId: 2, resourceName: 'Rose Fuller' },
        { resourceId: 3, resourceName: 'Margaret Buchanan' },
        { resourceId: 4, resourceName: 'Fuller King' },
        { resourceId: 5, resourceName: 'Davolio Fuller' },
        { resourceId: 6, resourceName: 'Van Jack' },
        { resourceId: 7, resourceName: 'Fuller Buchanan' },
        { resourceId: 8, resourceName: 'Jack Davolio' },
        { resourceId: 9, resourceName: 'Tamer Vinet' },
        { resourceId: 10, resourceName: 'Vinet Fuller' },
        { resourceId: 11, resourceName: 'Bergs Anton' },
        { resourceId: 12, resourceName: 'Construction Supervisor' }
    ],
    actionBegin: function(args) {
        if (
            args.requestType == 'beforeOpenEditDialog' ||
            args.requestType == 'beforeOpenAddDialog'
          ) {
            args.Resources.columns.splice(0, 1);
          }
    },
    actionComplete: function(args) {
        if (
            args.requestType == 'openEditDialog' ||
            args.requestType == 'openAddDialog'
          ) {
            var resources = args.data.ganttProperties.resourceInfo;
            var tabObj =
              document.getElementById('ganttContainer_Tab')['ej2_instances'][0];
            tabObj.selected = function (args: any) {
              if (args.selectedIndex == 1) {
                var gridObj = document.getElementById(
                  'ganttContainerResourcesTabContainer_gridcontrol'
                )['ej2_instances'][0];
                gridObj.selectionSettings = {
                  checkboxOnly: false,
                  type: 'Single',
                  persistSelection: false,
                };
                var currentViewData = gridObj.getCurrentViewRecords();
                var indexs: any = [];
                if (resources && resources.length > 0) {
                  currentViewData.forEach(function (data: any, index: any) {
                    for (var i = 0; i < resources.length; i++) {
                      if (
                        data.taskData['resourceId'] === resources[i]['resourceId'] &&
                        !isNullOrUndefined(gridObj.selectionModule) &&
                        gridObj.getSelectedRowIndexes().indexOf(index) === -1
                      ) {
                        //  gridObj.selectRow(index);
                        indexs.push(index);
                      }
                    }
                    gridObj.selectRows(indexs);
                  });
                }
              }
            };
          }
    }
});


gantt.appendTo('#ganttContainer');



