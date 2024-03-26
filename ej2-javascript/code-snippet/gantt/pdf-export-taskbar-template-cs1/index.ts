


import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties } from '@syncfusion/ej2-gantt';
import { ganttData,editingResources } from 'datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        let exportProperties: PdfExportProperties = {
            enableFooter: false
        };
        gantt.pdfExport(exportProperties);
    }
};
let pdfQueryTaskbarInfo: EmitType<Object> = (args: Object) => {
    if(!args.data.hasChildRecords){
        if (args.data.ganttProperties.resourceNames) {
            args.taskbarTemplate.image = [{
                width: 20, base64: (args as any).data.taskData.resourcesImage, height: 20
            }]
        }
        args.taskbarTemplate.value =  args.data.TaskName;
    }
    if(args.data.hasChildRecords){
        if (args.data.ganttProperties.resourceNames) {
            args.taskbarTemplate.image = [{
                width: 20, base64: (args as any).data.taskData.resourcesImage, height: 20
            }]
        }
        args.taskbarTemplate.value= args.data.TaskName;
    }
    if(args.data.ganttProperties.duration === 0){
        if (args.data.ganttProperties.resourceNames) {
            args.taskbarTemplate.image = [{
                width: 20, base64: (args as any).data.taskData.resourcesImage, height: 20,
            }]
        }
        args.taskbarTemplate.value = args.data.TaskName
    }
}

let gantt: Gantt = new Gantt({
    dataSource: ganttData,
    height: '450px',
    rowHeight: 55,
    taskbarHeight: 45,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        resourceInfo: 'resources',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left' },
        { field: 'TaskName', headerText: 'Task Name', width: '250' },
    ],
    pdfQueryTaskbarInfo: pdfQueryTaskbarInfo,
    milestoneTemplate: '#MilestoneTemplate',
    parentTaskbarTemplate: '#ParentTaskbarTemplate',
    taskbarTemplate: '#TaskbarTemplate',
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    resources: editingResources,
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName'
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/30/2019'),
});
gantt.appendTo('#GanttExport');



