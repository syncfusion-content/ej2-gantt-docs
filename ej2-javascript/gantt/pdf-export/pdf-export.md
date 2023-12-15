---
layout: post
title: Pdf export in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Pdf export in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Pdf export 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Pdf export in ##Platform_Name## Gantt control

## PDF Export

PDF export allows exporting Gantt data to PDF document. You need to use the [`pdfExport`](../../api/gantt/#pdfexport) method for exporting. To enable PDF export in the Gantt, set the [`allowPdfExport`](../../api/gantt/#allowpdfexport) to true.

To export data to PDF document, inject the `PdfExport` module in Gantt.

>Note: Currently, we don't have support for exporting the manually scheduled tasks.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/pdf-export-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-export-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/pdf-export-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-export-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-cs14" %}
{% endif %}

## Exporting Gantt data as a blob object

In Gantt, you can export the Gantt chart data as a blob object, which allows you to preview or modify the data before exporting it.

To export the Gantt chart data as a blob object, follow these steps:

step 1: pdfExport fourth argument set as `true`.

step 2: Then , `pdfExpComplete` return as blob object.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/exporting-blob-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/exporting-blob-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/exporting-blob-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/exporting-blob-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/exporting-blob-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/exporting-blob-data-cs1" %}
{% endif %}

## Single page exporting in gantt

In Gantt, we have provided support to export the Gantt component where each rows are auto-fit to the PDF document page width by setting [`isFitToWidth`](https://ej2.syncfusion.com/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/#isFitToWidth) as true in <code>fitToWidthSettings</code> of <code>PdfExportProperties</code>.

Also, we can customize the chart width and grid width in exported file using [`chartWidth`](https://ej2.syncfusion.com/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth/#chartWidth) and [`gridWidth`](https://ej2.syncfusion.com/documentation/api/gantt/pdfExportProperties/fitToWidthSettings/isFitToWidth/#gridWidth) by defining it as percentage in string. 

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/single-page/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/single-page/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/single-page" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/single-page/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/single-page/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/single-page" %}
{% endif %}

## Exporting with column template

The PDF export functionality allows to export Grid columns that include images, hyperlinks, and custom text to an PDF document using [pdfQueryCellInfo](https://helpej2.syncfusion.com/react/documentation/api/gantt/pdfQueryCellInfoEventArgs/) event.

In the following sample, the hyperlinks and images are exported to PDF using [hyperlink](https://helpej2.syncfusion.com/react/documentation/api/gantt/pdfQueryCellInfoEventArgs/#hyperlink) and [image](https://helpej2.syncfusion.com/react/documentation/api/gantt/pdfQueryCellInfoEventArgs/#image) properties in the [pdfQueryCellInfo](https://helpej2.syncfusion.com/react/documentation/api/gantt/pdfQueryCellInfoEventArgs/) event.

>Note: PDF Export supports base64 string to export the images.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/pdf-export-column-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-export-column-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-column-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/pdf-export-column-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/pdf-export-column-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-column-template-cs1" %}
{% endif %}