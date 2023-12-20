---
layout: post
title: Row selection in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Row selection in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Row selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Row selection in ##Platform_Name## Gantt control

The row selection in the Gantt control can be enabled or disabled using the [`allowSelection`](../../api/gantt/#allowselection) property. You can get the selected row object using the [`getSelectedRecords`](../../api/gantt/selection/#getselectedrecords) method. The following code example shows how to disable the row selection in Gantt.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/selection-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/selection-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/selection-cs4" %}
{% endif %}

> `Row` selection is the default type of Gantt selection mode.

## Selecting a row on initial load

You can select a row at the time of loading by setting the index of the row to the [`selectedRowIndex`](../../api/gantt/#selectedrowindex) property. Find the following code example for details.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/selection-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/selection-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/selection-cs5" %}
{% endif %}

## Selecting a row dynamically

You can also select a row dynamically using the [`selectRow`](../../api/gantt/selection/#selectrow) method. Similarly, You can also select rows dynamically using the [`selectRows`](../../api/gantt/selection/#selectrows) method. The following code demonstrates how to select a single or multiples row dynamically by clicking the custom button.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/selectRow-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selectRow-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selectRow-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/selectRow-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selectRow-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/selectRow-cs1" %}
{% endif %}

## Multiple row selection

You can select multiple rows by setting the [`selectionSettings.type`](../../api/gantt/selectionSettings/#type) property to `multiple`. You can select more than one row by holding down the CTRL key while selecting multiple rows. The following code example explains how to enable multiple selection in Gantt.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/selection-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/selection-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/selection-cs6" %}
{% endif %}

## Customize row selection action

While selecting a row in Gantt, the [`rowSelecting`](../../api/gantt/#rowselecting) and [`rowSelected`](../../api/gantt/#rowselected) events will be triggered. The the [`rowSelecting`](../../api/gantt/#rowselecting) event will be triggered on initialization of row selection, and you can get the previously selected row and current selecting row’s information, which is used to prevent selection of a particular row. The [`rowSelected`](../../api/gantt/#rowselected) event will be triggered on completion of row selection action, and you can get the current selected row’s information through this event. The following code example demonstrates how to prevent the selection of a row using the [`rowSelecting`](../../api/gantt/#rowselecting) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/selection-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/selection-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/selection-cs7" %}
{% endif %}

In the Gantt control, when you click an already selected row, selection will be cleared. While deselecting a row in Gantt, the [`rowDeselecting`](../../api/gantt/#rowdeselecting) and [`rowDeselected`](../../api/gantt/#rowselected) events will occur. The [`rowDeselecting`](../../api/gantt/#rowdeselecting) event will occur on initialization of deselecting row, and you can get the current deselecting row’s information to prevent the deselection of particular row. The [`rowDeselected`](../../api/gantt/#rowselected) event will occur on completion of row deselection action, and you can get the current deselected row’s information.