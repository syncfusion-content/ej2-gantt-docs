---
layout: post
title: Responsive columns in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Responsive columns in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Responsive columns 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Responsive columns in ##Platform_Name## Gantt control

You can toggle the column visibility based on media queries, which are defined in the [`hideAtMedia`](../../api/gantt/column/#hideatmedia). The [`hideAtMedia`](../../api/gantt/column/#hideatmedia) accepts valid [Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/columns-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/columns-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/columns-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/columns-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/columns-cs8" %}
{% endif %}