window.getResourceElements = function (value) {
    var out = '';
    var img = document.createElement('img');
    img.height = 40;
    for (var index = 0; index < value.length; index++) {
        img.src = 'https://ej2.syncfusion.com/react/demos/src/gantt/images/' + value[index].resourceName + '.png';
        out = out + img.outerHTML;
    }
    return out;
};
var labelData = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 0,
                Progress: 30, resources: [1], info: 'Measure the total property area alloted for construction',
                BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/02/2019')
            },
            {
                TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',
                resources: [2, 3, 5], info: 'Obtain an engineered soil test of lot where construction is planned.' +
                    'From an engineer or company specializing in soil testing', BaselineStartDate: new Date('04/01/2019'),
                BaselineEndDate: new Date('04/04/2019')
            },
            {
                TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 30,
                BaselineStartDate: new Date('04/06/2019'), BaselineEndDate: new Date('04/06/2019')
            },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),
                Duration: 3, Predecessor: '4', Progress: 30, resources: 4,
                info: 'Develop floor plans and obtain a materials list for estimations',
                BaselineStartDate: new Date('04/05/2019'), BaselineEndDate: new Date('04/07/2019')
            },
            {
                TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),
                Duration: 3, Predecessor: '6', resources: [4, 8], info: '',
                BaselineStartDate: new Date('04/09/2019'), BaselineEndDate: new Date('04/12/2019')
            },
            {
                TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),
                Duration: 0, Predecessor: '7', resources: [12, 5], info: '',
                BaselineStartDate: new Date('04/16/2019'), BaselineEndDate: new Date('04/16/2019')
            }
        ]
    },
    {
        TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/04/2019'), Duration: 1,
        Predecessor: '8', Progress: 30, resources: [12],
        info: 'If required obtain approval from HOA (homeowners association) or ARC (architectural review committee)',
        BaselineStartDate: new Date('04/16/2019'), BaselineEndDate: new Date('04/17/2019')
    },
    {
        TaskID: 10,
        TaskName: 'Project approval and kick off',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        Duration: 0,
        Predecessor: '9',
        BaselineStartDate: new Date('04/17/2019'), BaselineEndDate: new Date('04/17/2019')
    },
    {
        TaskID: 11,
        TaskName: 'Site work',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 12, TaskName: 'Clear the building site', StartDate: new Date('04/04/2019'),
                Duration: 2, Progress: 30, Predecessor: '9',
                info: 'Clear the building site (demolition of existing home if necessary)',
                BaselineStartDate: new Date('04/16/2019'), BaselineEndDate: new Date('04/18/2019')
            },
            {
                TaskID: 13, TaskName: 'Install temporary power service', StartDate: new Date('04/04/2019'),
                Duration: 2, Predecessor: '12', info: '',
                BaselineStartDate: new Date('04/17/2019'), BaselineEndDate: new Date('04/19/2019')
            },
        ]
    },
];
var editingResources = [
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
];
var gantt = ej.gantt.Gantt({
    dataSource: labelData,
    height: '450px',
    highlightWeekends: true,
    allowSelection: true,
    rowHeight: 46,
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        child: 'subtasks'
    },
    columns: [
        { field: 'TaskID', width: 80 },
        { field: 'TaskName', width: 250 },
        { field: 'StartDate' },
        { field: 'EndDate' },
        { field: 'Duration' },
        { field: 'Predecessor' },
        { field: 'Progress' },
        { field: 'resources' },
    ],
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName'
    },
    resources: editingResources,
    labelSettings: {
        rightLabel: '#rightLabel',
    },
    splitterSettings: {
        columnIndex: 2
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('05/04/2019')
});
gantt.appendTo('#TasklabelTemplate');
var beforeRender = function (args) {
    tooltip.content = args.target.currentSrc.split('/')[8].replace('%20', ' ').replace('.png', '');
};
var tooltip = new ej2.Tooltip({
    target: 'img',
    beforeRender: beforeRender
});
tooltip.appendTo('#Tooltip');














