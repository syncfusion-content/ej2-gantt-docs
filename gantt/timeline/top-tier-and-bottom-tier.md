---
layout: post
title: Top tier and bottom tier in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Top tier and bottom tier in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Top tier and bottom tier 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Top tier and bottom tier in ##Platform_Name## Gantt control

Gantt control contains two tier layout in timeline, we can customize the top tier and bottom tier using [`topTier`](../../api/gantt/timelineSettings/#toptier) and [`bottomTier`](../../api/gantt/timelineSettings/#bottomtier) properties. Timeline tier's unit can be defined by using [`unit`](../../api/gantt/timelineTierSettings/#unit) property and [`format`](../../api/gantt/timelineTierSettings/#format) property was used to define date format of timeline cell and [`count`](../../api/gantt/timelineTierSettings/#count) property was used to define how many unit will be combined as single cell and [`formatter`](../../api/gantt/timelineTierSettings/#formatter) property was used to define custom method to format the date value of timeline cell.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/timeline-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/timeline-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs8" %}
{% endif %}

## Combining timeline cells

In Gantt, timeline cells in top tier and bottom tier can be combined with number of timeline units, this can be acheived by using [`topTier.count`](../../api/gantt/timelineTierSettings/#count) and [`bottomTier.count`](../../api/gantt/timelineTierSettings/#count) properties. Please refer the below sample.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/timeline-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/timeline-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs9" %}
{% endif %}

## Format value of timeline cell

In the Gantt control, you can format the value of top and bottom timeline cells using the standard date format string or the custom formatter method. This can be done using the [`topTier.format`](../../api/gantt/timelineTierSettings/#format), [`topTier.formatter`](../../api/gantt/timelineTierSettings/#formatter), [`bottomTier.format`](../../api/gantt/timelineTierSettings/#format) and [`bottomTier.formatter`](../../api/gantt/timelineTierSettings/#formatter) properties. The following example shows how to use the formatter method for timeline cells.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/timeline-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/timeline-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs10" %}
{% endif %}

## Timeline cell width

In the Gantt control, you can define the width value of timeline cell using the [`timelineSettings.timelineUnitSize`](../../api/gantt/timelineSettings/#timelineunitsize) property. This value will be set to the bottom timeline cell, and the width value of top timeline cell will be calculated automatically based on bottom tier cell width using the [`topTier.unit`](../../api/gantt/timelineTierSettings/#unit) and [`timelineSettings.timelineUnitSize`](../../api/gantt/timelineSettings/#timelineunitsize) properties. Refer to the following example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/timeline-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/timeline-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/timeline-cs11" %}
{% endif %}