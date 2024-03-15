ej.gantt.Gantt.Inject(ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    resources: resourceCollection,
    height: '450px',
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
        child: 'subtasks',
        segments: 'Segments',
        notes:"note",
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    addDialogFields: [
        { type: 'General', headerText: 'General add',fields:["newinput"]},
        { type: 'Dependency', additionalParams: {allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",]}},
        { type: 'Resources'} , 
        { type: 'Notes' },
        {type:"Segments", additionalParams:{columns:[{field:"segmenttask",width:"170px" ,headerText:"Segment Task"}],}}
    ],
    editDialogFields: [
        { type: 'General', headerText: 'General edit', fields: ["TaskID", "TaskName", "newinput"] },
        {type: 'Dependency', additionalParams: {allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",]}},
        { type: 'Resources', additionalParams: { allowSorting: true, allowPaging: true, toolbar: ["Search", "Print"], columns: [{ field: "newdata" }]}},
        {type: 'Notes', additionalParams: {inlineMode: { enable: true,onSelection: true }}},
        {type: "Segments", additionalParams: {columns: [{ field: "segmenttask", width: "170px", headerText: "Segment Task" }],}}
    ],
		
});
ganttChart.appendTo('#Gantt');















