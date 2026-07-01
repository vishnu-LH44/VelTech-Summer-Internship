# Week 1: HTML 

### 1. Core Concepts & Architecture
- **Definition of HTML:** HyperText Markup Language is a structural document blueprint, not a programming language. It defines the structure of web pages.
- **System Requirements:** Can be written in simple text editors (Notepad, vi) or IDEs (Dreamweaver, VS Code). Tested in browsers (Chrome, Firefox, Safari).
- **Anatomy of a Tag:** Elements are encapsulated using angle brackets (`<` and `>`).
- **Tag Taxonomy:**
  - **Empty / Non-Container Tags:** Self-closing tags that don't wrap content (e.g., `<br>`, `<img>`, `<hr>`).
  - **Container Tags:** Paired tags requiring an opening and closing tag (e.g., `<html>...</html>`, `<body>...</body>`).

### 2. Layout, Structure, & Document Trees
- **Root Architecture:** `<html>`, `<head>`, `<title>`, and `<body>`.
- **Text Formatting:**
  - Paragraphs `<p>`
  - Bold `<b>` / Strong `<strong>`
  - Italic `<i>` / Emphasis `<em>`
  - Definition `<dfn>`, Subscript `<sub>`, Superscript `<sup>`
  - Block breaks `<br>`, Horizontal rules `<hr>`, Pre-formatted `<pre>`
- **Header Hierarchy:** Headings range from `<h1>` (most important) to `<h6>` (least important).
- **Hyperlinks:** `<a>` tag with `href` attribute for external links or internal bookmarks.
- **Media Embedding:** `<img>` tag using `src`, `alt`, `width`, and `height`.

### 3. Lists, Tables, & Modular Embedding
- **Lists:**
  - Unordered (`<ul>`) and Ordered (`<ol>`) using List Items (`<li>`).
  - Definition Lists (`<dl>`) with Terms (`<dt>`) and Descriptions (`<dd>`).
- **Tables:** Structured grids using `<table>`, Rows (`<tr>`), Headers (`<th>`), and Data Cells (`<td>`). Attributes `rowspan` and `colspan` merge cells.
- **Frames:**
  - Legacy layout division via `<frameset>` and `<frame>`.
  - Modern inline frames via `<iframe>` for embedding external content.

### 4. Interactive Form Layouts
- **Form Foundations:** Using the `<form>` wrapper.
- **Input Controls:** Text (`type="text"`), Password (`type="password"`), Radio buttons (`type="radio"`), Checkboxes (`type="checkbox"`), File upload (`type="file"`), Hidden data (`type="hidden"`).
- **Triggers:** Submit (`type="submit"`), Reset (`type="reset"`), Button (`type="button"`).
- **Advanced Fields:** `<textarea>` for multi-line text, `<select>` with `<option>` for dropdown menus.
### 5. HTML Iframes
- **Basic Iframe (Height & Width):** Use the `<iframe>` tag with `src`, `height`, `width`, and `title` attributes to embed external content inline. Example: `<iframe src="https://www.wikipedia.org" height="200" width="300" title="Iframe Example"></iframe>`.
- **Iframe using CSS:** Style iframes with inline CSS properties (`style="height:200px; width:300px;"`) instead of HTML attributes for more flexible control.
- **Remove Iframe Border:** Apply `style="border:none;"` to remove the default border around an iframe for a seamless embedded appearance.
- **Iframe as Link Target:** Use the `name` attribute on an `<iframe>` (e.g., `name="iframe_a"`) and set `target="iframe_a"` on an `<a>` tag to load linked pages inside the iframe dynamically.

### 6. HTML5 Graphics (Canvas API)
- **Canvas Element:** `<canvas>` provides a pixel-based drawing surface controlled via JavaScript's 2D rendering context (`getContext('2d')`).
- **Drawing Lines** (`graphics1.html`): Use `moveTo(x, y)` and `lineTo(x, y)` to define a path, then `stroke()` to render the line on the canvas.
- **Drawing Circles / Arcs** (`graphics2.html`): Use `arc(x, y, radius, startAngle, endAngle)` to draw circles and arcs. Angles are specified in radians (`0` to `2 * Math.PI` for a full circle).
- **Fill Text** (`graphics3.html`): Use `fillText(text, x, y)` to render solid filled text on the canvas. Font style is set via `ctx.font`.
- **Stroke Text** (`graphics4.html`): Use `strokeText(text, x, y)` to render outlined (hollow) text on the canvas.
- **Styled Text** (`graphics5.html`): Combine `ctx.font`, `ctx.fillStyle`, `ctx.strokeStyle`, and shadow properties (`shadowColor`, `shadowBlur`) to create stylized text effects.
- **Linear Gradient** (`graphics6.html`): Use `createLinearGradient(x0, y0, x1, y1)` with `addColorStop(offset, color)` to define a smooth color transition across a rectangular region.
- **Radial Gradient** (`graphics7.html`): Use `createRadialGradient(x0, y0, r0, x1, y1, r1)` with `addColorStop()` to create circular gradient fills radiating from a center point.
- **Drawing Images** (`graphics8.html`): Use `drawImage(img, x, y, width, height)` to render an image onto the canvas. The image source is loaded via an `Image()` object or an `<img>` element.


























