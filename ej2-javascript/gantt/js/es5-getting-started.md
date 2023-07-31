---
layout: post
title: Es5 getting started with ##Platform_Name## Gantt control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Gantt control

This section explains you the steps required to create a simple Essential JS 2 Gantt chart in a JavaScript application and demonstrates its basic features.

## Dependencies

Following is the list of dependencies to use the Gantt with all features:

```javascript
|-- @syncfusion/ej2-gantt
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups

    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-richtexteditor
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-treegrid
    |-- @syncfusion/ej2-excel-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-splitbuttons
```

## Setup for local environment

Refer to the following steps to setup your local environment:

**Step 1:** Create a root folder `myapp` for your application.

**Step 2:** Create `myapp/resources` folder to store local scripts and styles files.

**Step 3:** Create `myapp/index.js` and `myapp/index.html` files for initializing Essential JS 2 Gantt control.

## Adding Syncfusion resources

The Essential JS 2 Gantt control can be initialized by using either of the following ways:

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style

You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

After installing the Essential JS 2 product build, you can copy the Gantt and its dependencies scripts and style file into the `resources/scripts` and `resources/styles` folder.

Refer to the following code to find the location of Gantt script and style file.

**Syntax:**

> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/16.4.40/Essential JS 2/ej2-gantt/dist/global/ej2-gantt.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/16.4.40/Essential JS 2/ej2-gantt/styles/material.css`

After copying the files, then you can refer the gantt's scripts and styles into the `index.html` file.
The below html code example shows the minimal dependency for Gantt.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Gantt</title>
             <!-- Essential JS 2 gantt's dependent material theme -->
            <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/buttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/navigations/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/lists/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/dropdowns/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/calendars/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/layouts/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/richtexteditor/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/grids/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/treegrid/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 material theme -->
            <link href="resources/gantt/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Gantt's dependent scripts -->
            <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-calendars.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-layouts.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-richtexteditor.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-grids.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-treegrid.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-excel-export.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-file-utils.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-compression.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-pdf-export.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Gantt's global script -->
            <script src="resources/scripts/ej2-gantt.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for Gantt  -->
             <div id="Gantt"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>
```

### Using CDN link for script and style

Using CDN link, you can directly refer to the Gantt control's script and style in the `index.html`.

Refer to the Gantt's CDN links as follows.

**Syntax:**

> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: [`http://cdn.syncfusion.com/ej2/ej2-gantt/dist/global/ej2-gantt.min.js`](http://cdn.syncfusion.com/ej2/ej2-gantt/dist/global/ej2-gantt.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-gantt/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-gantt/styles/material.css)

The below html code example shows the dependency of gantt.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Gantt</title>
            <!-- Essential JS 2 gantt's dependent material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-layouts/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-richtexteditor/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="http://cdn.syncfusion.com/ej2/ej2-treegrid/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-gantt/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Gantt's dependent scripts -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-layouts/dist/global/ej2-layouts.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-richtexteditor/dist/global/ej2-richtexteditor.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-treegrid/dist/global/ej2-treegrid.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-excel-export/dist/global/ej2-excel-export.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-file-utils/dist/global/ej2-file-utils.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-compression/dist/global/ej2-compression.min.js" type="text/javascript"></script>
            <script src="http://cdn.syncfusion.com/ej2/ej2-pdf-export/dist/global/ej2-pdf-export.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Gantt's global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-gantt/dist/global/ej2-gantt.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for Gantt  -->
             <div id="Gantt"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>
```

The following located script and style file contains all the Syncfusion JavaScript (ES5) UI control resources in a single file.

> Scripts: **(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js
>
> Styles: **(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css

## Adding Gantt control

Now, you can add the Gantt control to the application. For getting started, add a `div` element to the Gantt control in `index.html`. Then, refer to the `index.js` file in the `index.html` file.

In this document context, `ej2.min.js` and `material.css` which includes all the Essential JS 2 components and its dependent scripts and theme files are used.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Gantt</title>
            <!-- Essential JS 2 all material theme -->
            <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css"/>
             <!-- Essential JS 2 all script -->
            <script src="http://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for Gantt  -->
             <div id="Gantt"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>
```

Place the following code in the `index.js`.

```javascript

var ganttChart = new ej.gantt.Gantt({
        dataSource: [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
                ]
            },
        ],
        height: '450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks',
      }
});
ganttChart.appendTo('#Gantt');

```

## Binding Gantt with data

Bind data with the Gantt control by using the [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#datasource) property. It accepts an array of JavaScript object or the DataManager instance.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Gantt</title>
            <!-- Essential JS 2 all material theme -->
            <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 all script -->
            <script src="http://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for gantt  -->
             <div id="Gantt"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Place the following code in the `index.js`.

```javascript

var ganttData = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
            ]
        },
    ];
var ganttChart = new ej.gantt.Gantt({dataSource: ganttData});
ganttChart.appendTo('#Gantt');

```

## Mapping task fields

The data source fields that are required to render the tasks are mapped to the Gantt control using the [`taskFields`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#taskfields) property.

```javascript
var ganttChart = new ej.gantt.Gantt({
        dataSource: ganttData,
        height: '450px',
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks',
      }
});
ganttChart.appendTo('#GanttChart');

```

## Defining columns

Gantt has an option to define columns as an array. You can customize the Gantt columns using the following properties:

* `field`: Maps the data source fields to the columns.
* `headerText`: Changes the title of columns.
* `textAlign`: Changes the alignment of columns. By default, columns will be left aligned. To change the columns to right align, set `textAlign` to right.
* `format`: Formats the number and date values to standard or custom formats. Here, it is defined for the conversion of numeric values to currency.

```javascript
var ganttChart = new ej.gantt.Gantt({
    dataSource: ganttData,
    columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: '250' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '250' },
            { field: 'Duration', headerText: 'Duration', width: '250' },
            { field: 'Progress', headerText: 'Progress', width: '250', format: 'C' },
        ],
});
ganttChart.appendTo('#Gantt');

```

## Module injection

To create a Gantt with additional features, inject the required modules. The following modules are used to extend the Gantt's basic functionality:

* [`Edit`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#editmodule): Inject this module to use the editing feature.
* [`Filter`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#filtermodule): Inject this module to use the filtering feature.
* [`Sort`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#sortmodule): Inject this module to use the sorting feature.

These modules should be injected into the Gantt using the `ej.gantt.Gantt.Inject` method.

## Enable editing

The editing feature enables you to edit the tasks in the Gantt control. It can be enabled by using the [`editSettings.allowEditing`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/editSettings/#allowediting) and [`editSettings.allowTaskbarEditing`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/editSettings/#allowtaskbarediting) properties.

The following editing options are available to update the tasks in Gantt:

* Cell
* Dialog
* Taskbar
* Connector line

### Cell editing

Modify the task details through cell editing by setting the edit [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/editSettings/#mode) to `Auto`. Inject the [`Edit`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#editmodule) module as follows. If the [`Edit`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the cell when a grid cell is clicked.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs1" %}

`Note:` When the edit mode is set to `Auto`, you can change the cells to editable mode by double-clicking anywhere at the TreeGrid and edit the task details in the edit dialog by double-clicking anywhere at the chart.

### Dialog editing

Modify the task details through dialog by setting the edit [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/editSettings/#mode) to `Dialog`. Inject the [`Edit`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#editmodule) module as follows. If the [`Edit`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the task details through the edit dialog.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs2" %}

`Note:` In dialog editing mode, the edit dialog will appear while performing double-click action in both TreeGrid and chart sides.

### Taskbar editing

Modify the task details through user interaction such as resizing and dragging the taskbar by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/editSettings/#allowtaskbarediting) property. Inject the [`Edit`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#editmodule) module as follows. If the [`Edit`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the task details while dragging the taskbar.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs3" %}

### Dependency editing

Modify the task dependencies using mouse interactions by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/editSettings/#allowtaskbarediting)  property along with mapping the task dependency data source field to the [`dependency`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/taskFields/#dependency) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs4" %}

## Enable filtering

The filtering feature enables you to view the reduced amount of records based on filter criteria. Gantt provides the menu filtering support for each column. It can be enabled by setting the [`allowFiltering`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#allowfiltering) property to true along with injecting the [`Filter`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#filtermodule) module as shown in the following code example. Filtering feature can also be customized using the [`filterSettings`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/filterSettings/) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs5" %}

## Enable sorting

The sorting feature enables you to order the records. It can be enabled by setting the [`allowSorting`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#allowsorting) property to `true`. Inject the [`Sort`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#sortmodule) module as follows. If the [`Sort`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#sortmodule) module is not injected, you cannot sort the records when a header is clicked. The sorting feature can be customized using the [`sortSettings`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/sortSettings/) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/getting-started-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs6" %}

## Enabling predecessors or task relationships

Predecessor or task dependency in the Gantt control is used to depict the relationship between the tasks.

* Start to Start (SS): You cannot start a task until the dependent task starts.
* Start to Finish (SF): You cannot finish a task until the dependent task finishes.
* Finish to Start (FS): You cannot start a task until the dependent task completes.
* Finish to Finish (FF): You cannot finish a task until the dependent task completes.
You can show the relationship in tasks by using the [`dependency`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/taskFields/#dependency) property as shown in the following code example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs7" %}

## Assigning resources

You can display and assign the resource for each task in the Gantt control. Create a collection of JSON object, which contains id, name, unit and group of the resources and assign it to the [`resources`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#resources) property. Map these fields to the Gantt control using the [`resourceFields`](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#resourceFields) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/getting-started-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs8" %}

## Run the application

Now, run the `index.html` in the web browser, it will render the Essential JS 2 Gantt control

Output will be displayed as follows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/getting-started-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/getting-started-cs9" %}

## Deploy the application

The Essential JS 2 Gantt control features are segregated into individual feature-wise modules. The [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build and `CDN` scripts contains code for all features used in Gantt and hence you should avoid to use them in production. You are strongly recommend to generate script files to use in production using the Syncfusion **Custom Resource Generator**[`(CRG)`](https://crg.syncfusion.com) for Essential JS 2. CRG will allow you generate the bundled script for the currently enabled features in Gantt.
