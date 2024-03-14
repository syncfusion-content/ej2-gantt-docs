---
layout: post
title: Undo Redo in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Undo Redo in Syncfusion ##Platform_Name## Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Undo Redo 
documentation: ug
domainurl: ##DomainURL##
---

# Undo Redo in ##Platform_Name## Gantt component

The Undo feature enables users to revert the most recent action performed in the Gantt Chart. It helps undo changes made to tasks, dependencies, or other actions within the Gantt Chart.

The Redo feature can reapply an action that was previously undone using the Undo feature. This allows users to revert their decision to undo an action.

The undo redo feature can be enabled in Gantt by using the [enableUndoRedo](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#enableundoredo) property.

## Configure the feature set for undo redo actions

The actions to be restored can be specified using [undoRedoActions](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#undoredoactions) property.

By default, the following table shows the list of gantt feature for undo redo actions.

| Built-in Undo Redo Items | Actions |
|------------------------|---------|
| Edit | Undo redo actions can be performed for edited record.|
| Delete | Undo redo actions can be performed for deleted record.|
| Add | Undo redo actions can be performed for newly added record.|
| ColumnReorder | Undo redo actions can be performed for reordered column.|
| Indent | Undo redo actions can be performed for indented record.|
| Outdent | Undo redo actions can be performed for outdented record.|
| ColumnResize | Undo redo actions can be performed for resized column.|
| Sorting | Undo redo actions can be performed for sorted column.|
| Filtering | Undo redo actions can be performed for filtered record.|
| Search | Undo redo actions can be performed for searched value.|
| ZoomIn | Undo redo actions can be performed for zoomIn action.|
| ZoomOut | Undo redo actions can be performed for zoomOut action.|
| ZoomToFit | Undo redo actions can be performed for zoomToFit action.|
| ColumnState | Undo redo actions can be performed for hided or shown columns.|
| RowDragAndDrop | Undo redo actions can be performed for row drag and drop.|
| TaskbarDragAndDrop |  Undo redo actions can be performed for taskbar drag and drop.|
| PreviousTimeSpan | Undo redo actions can be performed for previous time span acton.|
| NextTimeSpan | Undo redo actions can be performed for next time span action.|

In the following code example, `Edit` and `Delete` actions are specified in `undoRedoActions` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/undo-redo-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/undo-redo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/undo-redo-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/undo-redo-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/undo-redo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/undo-redo-cs1" %}
{% endif %}

## Configure the storage step count for undo redo actions

The number of actions to be restored can be specfified using [undoRedoStepsCount](https://ej2.syncfusion.com/javascript/documentation/api/gantt/#undoredostepscount) property.

By default `undoRedoStepsCount` value is 10.

When the number of actions performed exceeds the `undoRedoStepsCount`, then the undo collection gets popped and latest action performed will be pushed in the collection.

In the following example, `undoRedoStepsCount` value is set to 5.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/undo-redo-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/undo-redo-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/undo-redo-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/undo-redo-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/undo-redo-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/undo-redo-cs2" %}
{% endif %}

## Perform undo redo actions programatically

You can perform undo and redo actions programatically using [undo](https://ej2.syncfusion.com/documentation/api/gantt/#undo) and [redo](https://ej2.syncfusion.com/documentation/api/gantt/#redo) methods.The following code example demonstrates how to invoke the `undo` and `redo` method by clicking the external button.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/undo-redo-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/undo-redo-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/undo-redo-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/undo-redo-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/undo-redo-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/undo-redo-cs3" %}
{% endif %}

## Retrieve undo and redo stack collection

By default, when undo or redo action is performed, the performed action will be pushed to respective `getUndoActions` or `getUndoActions` collection. So, you can retrieve undo and redo collection using [getUndoActions](https://ej2.syncfusion.com/documentation/api/gantt/#getundoactions) and [getRedoActions](https://ej2.syncfusion.com/documentation/api/gantt/#getredoactions) methods.

The following code example demonstrates how to retrieve the undo and redo collection using method by clicking the external button.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/undo-redo-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/undo-redo-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/undo-redo-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/undo-redo-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/undo-redo-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/undo-redo-cs4" %}
{% endif %}

## Clear undo and redo collection

You can clear undo and redo collection at anytime using [clearUndoCollection](https://ej2.syncfusion.com/documentation/api/gantt/#clearundocollection) and [clearRedoCollection](https://ej2.syncfusion.com/documentation/api/gantt/#clearredocollection) methods.

The following code example demonstrates how to clear the undo and redo collection using method by clicking the external button.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/undo-redo-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/undo-redo-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/undo-redo-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/undo-redo-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/undo-redo-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/undo-redo-cs5" %}
{% endif %}