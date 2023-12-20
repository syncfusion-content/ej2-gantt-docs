---
layout: post
title: Splitter in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Splitter in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Splitter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Splitter in ##Platform_Name## Gantt control

## Splitter

In the Gantt control, the Splitter separates the TreeGrid section from the Chart section. You can change the position of the Splitter when loading the Gantt control using the [`splitterSettings`](../api/gantt/splitterSettings/) property. By splitting the TreeGrid from the chart, the width of the TreeGrid and chart sections will vary in the control. The [`splitterSettings.position`](../api/gantt/splitterSettings/#position) property denotes the percentage of the TreeGrid section’s width to be rendered and this property supports both pixels and percentage values. You can define the splitter position as column index value using the [`splitterSettings.columnIndex`](../api/gantt/splitterSettings/#columnindex) property. You can also define the splitter position with built-in splitter view modes by using the [`splitterSettings.view`](../api/gantt/splitterSettings/#view) property. The following list is the possible values for this property:

* `Default`: Shows Grid side and Gantt side.
* `Grid`: Shows Grid side alone in Gantt.
* `Chart`: Shows chart side alone in Gantt.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/how-to-splitter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-splitter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to-splitter-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/how-to-splitter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-splitter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/how-to-splitter-cs1" %}
{% endif %}

## Change splitter position dynamically

In Gantt, we can change the splitter position dynamically by using [`setSplitterPosition`](../api/gantt/#setsplitterposition) method. We can change the splitter position by passing value and type parameter to [`setSplitterPosition`](../api/gantt/#setsplitterposition) method. Type parameter will accept one of the following values 'position', 'columnIndex', 'viewType'. The following code example shows how to use this method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/changeSplitterDynamically-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/changeSplitterDynamically-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/changeSplitterDynamically-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/changeSplitterDynamically-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/changeSplitterDynamically-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/changeSplitterDynamically-cs1" %}
{% endif %}