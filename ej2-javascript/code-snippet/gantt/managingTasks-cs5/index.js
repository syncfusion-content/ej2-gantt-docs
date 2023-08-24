
let projectNewData = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        isParent: true,
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: "2FS", Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        isParent: true,
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: "6SS", Progress: 50 }
        ]
    },
  ];
var ganttChart = new ej.gantt.Gantt({
    dataSource: projectNewData,
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name'},
        { field: 'StartDate', headerText: 'Start Date'},
        { field: 'Duration', headerText: 'Duration'},
        { field: 'Progress', headerText: 'Progress' }, 
    ],
    actionBegin: function (args) {
        if (args.requestType === 'beforeAdd') {
            // You can get the details of the newly added record using `newTaskData` with `beforeAdd` requestType.
            // You can modify any fields of the newly added data to reflect changes in the UI before the task is added to the data source.
            let newRecord = args.newTaskData;
        }
        if (args.requestType === 'beforeDelete') {
            // You can get the details of the deleted record using `beforeDelete`requestType.
            let deleteRecord = args.data;
            // While deleting a record its parent record  or any dependent records gets modified. You can get the details of these records which gets updated. 
            let modifiedRecords = args.modifiedRecords;
            // While deleting a record its parent record  or any dependent records gets modified. You can get the details of taskData of these records which gets updated. 
            let modifiedTaskData = args.modifiedTaskData;
        }
        if (args.requestType === "beforeSave") {
            // You can get the details of the edited record using `beforeSave`requestType.
            let Record = args.data;
            // On editing a record its parent record  or any dependent records gets modified. You can get the details of these records which gets updated in modifiedRecords. 

            let modifiedRecords = args.modifiedRecords;

            // On editing a record its parent record  or any dependent records gets modified. You can get the details of taskData of these records which gets updated in modifiedTaskData. 

            let modifiedTaskData = args.modifiedTaskData;
        }
    },
    actionComplete: function (args) {
        if (args.requestType === 'add') {
          // You can get the details of the newly added record using `newTaskData` with `beforeAdd` requestType.
            let newRecord = args.newTaskData;
        }
        if (args.requestType === "save") {
             // You can get the details of the edited record using `save`requestType.
             let Record = args.data;
             // On editing a record its parent record  or any dependent records gets modified. You can get the details of these records which gets updated in modifiedRecords. 

             let modifiedRecords = args.modifiedRecords;

             // On editing a record its parent record  or any dependent records gets modified. You can get the details of taskData of these records which gets updated in modifiedTaskData. 

             let modifiedTaskData = args.modifiedTaskData;
        }
        if (args.requestType === 'delete') {
              // You can get the details of the deleted record using `delete`requestType.
            let deleteRecord = args.data;
            // While deleting a record its parent record  or any dependent records gets modified. You can get the details of these records which gets updated. 
            let modifiedRecords = args.modifiedRecords;
            // While deleting a record its parent record  or any dependent records gets modified. You can get the details of taskData of these records which gets updated. 
            let modifiedTaskData = args.modifiedTaskData;
        }
    },

    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowTaskbarEditing: true,
        allowDeleting: true
    },
    toolbar:['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search',
    'PrevTimeSpan', 'NextTimeSpan'],
    height: '550px',
});
ganttChart.appendTo('#Gantt');


