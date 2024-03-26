


import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties,pdfQueryTaskbarInfo,PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData,editingResources } from 'datasource.ts';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
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
    args.labelSettings.leftLabel.value = args.data.ganttProperties.taskName + '[' + args.data.ganttProperties.progress + ']';
        if (args.data.ganttProperties.resourceNames) {
            args.labelSettings.rightLabel.value = args.data.ganttProperties.resourceNames;
            args.labelSettings.rightLabel.image = [{
                    base64: args.data.taskData.resourcesImage, width: 20, height: 20
                }];
        }
        args.labelSettings.taskLabel.value = args.data.ganttProperties.progress + '%';
}
(<{ getResourceElements?: Function }>window).getResourceElements = (value: any) => {
    let out: string = '';
    let img: HTMLImageElement = document.createElement('img');
    img.height = 40;
    let span: HTMLElement = document.createElement('span');
    span.style.marginLeft = '5px';
    span.style.marginRight = '5px';
    for (let index: number = 0; index < value.length; index++) {
        img.src = 'https://ej2.syncfusion.com/demos/src/gantt/images/' + value[index].resourceName + '.png';
        span.innerHTML = value[index].resourceName;
        out = out + img.outerHTML + span.outerHTML;
    }
    return out;
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    rowHeight: 55,
    taskbarHeight: 45,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        progress: 'Progress',
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
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    labelSettings: {
        leftLabel: '#leftLabel',
        rightLabel: '#rightLabel',
        taskLabel: '${Progress}%'
    },
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



