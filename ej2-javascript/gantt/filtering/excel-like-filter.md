---
layout: post
title: Excel like filter in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Excel like filter in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Excel like filter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Excel like filter in ##Platform_Name## Gantt control

You can enable Excel like filter by defining [`filterSettings.type`](https://ej2.syncfusion.com/documentation/api/gantt#filtersettings) as `Excel`. The excel menu contains an option such as Sorting, Clear filter, Sub menu for advanced filtering.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/initialLoadFiltering-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/initialLoadFiltering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/initialLoadFiltering-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/initialLoadFiltering-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/initialLoadFiltering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/initialLoadFiltering-cs1" %}
{% endif %}