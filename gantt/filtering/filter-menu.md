---
layout: post
title: Filter menu in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Filter menu in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Filter menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in ##Platform_Name## Gantt control

The Gantt control provides the menu filtering support for each column. You can enable the filter menu by setting the [`allowFiltering`](../../api/gantt/#allowfiltering) to `true`. The filter menu UI will be rendered based on its column type, which allows you to filter data. You can filter the records with different operators.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/initialLoadFiltering-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/initialLoadFiltering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/initialLoadFiltering-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/initialLoadFiltering-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/initialLoadFiltering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/initialLoadFiltering-cs2" %}
{% endif %}

>The [`allowFiltering`](../../api/gantt/#allowfiltering) property should be set to `true` to enable the filter menu.
>Setting the [`columns.allowFiltering`](../../api/gantt/column/#allowfiltering) property to `false` prevents rendering filter menu for a particular column.

## Custom component in filter menu

The [`column.filter.ui`](../../api/gantt/column/#filter) is used to add custom filter components to a particular column.

To implement custom filter ui, define the following functions:

* `create`:  Creates custom component.
* `write`: Wire events for custom component.
* `read`: Read the filter value from custom component.

In the following sample, dropdown is used  as custom component in the TaskName column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/initialLoadFiltering-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/initialLoadFiltering-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/initialLoadFiltering-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/initialLoadFiltering-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/initialLoadFiltering-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/initialLoadFiltering-cs3" %}
{% endif %}