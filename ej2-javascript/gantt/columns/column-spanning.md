---
layout: post
title: Column spanning in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Column spanning in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Column spanning 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Column spanning in ##Platform_Name## Gantt control

The gantt has option to span the adjacent cells. You need to define the [`colSpan`](../../api/gantt/queryCellInfoEventArgs/#colspan) attribute to span cells in the [`QueryCellInfo`](../../api/gantt/queryCellInfoEventArgs) event.

In the following demo, **Work 1**  cells have been spanned.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/column-span-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/column-span-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/column-span-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/column-span-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/column-span-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/column-span-cs1" %}
{% endif %}