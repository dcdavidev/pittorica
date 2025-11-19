# picto

**picto** is a UI framework designed as a painterly foundation for modern interfaces.

It unifies multiple design philosophies into a single, flexible toolkit.

With a rich and powerful structure that remains intentionally lightweight and easy to integrate, **picto** empowers designers and developers to create both simple components and complex, composite UIs.

> Get started quickly: import the toolkit, use the utility classes, and customize your design system with ease.

```bash
npm i @pittorica/picto
```

```bash
pnpm i @pittorica/picto
```

```bash
yarn add @pittorica/picto
```

```bash
bun add @pittorica/picto
```

---

<!-- toc -->

- [Components](#components)
  - [Layout Components](#layout-components)
  - [Typography Components](#typography-components)
- [Development Roadmap](#development-roadmap)
  - [Headings](#headings)
  - [Text and Paragraph](#text-and-paragraph)
  - [Text Formatting](#text-formatting)
  - [Links](#links)
  - [Images and Media](#images-and-media)
  - [Lists](#lists)
  - [Tables](#tables)
  - [Section/Semantic Elements](#sectionsemantic-elements)
  - [Form](#form)
  - [Script and Embed](#script-and-embed)
  - [Interactive Elements](#interactive-elements)
  - [Progress Indicators](#progress-indicators)
  - [Graphics](#graphics)
  - [Ruby Annotations](#ruby-annotations)
  - [Time and Data](#time-and-data)
  - [Group/Block Elements](#groupblock-elements)
- [License](#license)

<!-- tocstop -->

---

## Components

### Layout Components

- **Container**: Responsive container with size variants
- **Divider**: Horizontal rule component for thematic breaks
- **Grid**: CSS Grid layout system with GridItem
- **Hero**: Hero section component with background support
- **Surface**: Surface component with color, elevation, and shape variants

### Typography Components

- **Abbr**: Abbreviation component
- **B**: Bold text component
- **Bdi**: Bidirectional isolate component
- **Bdo**: Bidirectional override component
- **Blockquote**: Block-level quotation component
- **Br**: Line break component
- **Cite**: Citation component
- **Code**: Code snippet component
- **Del**: Deleted/strikethrough text component
- **Dfn**: Definition term component
- **Em**: Emphasis/italic text component
- **I**: Italic text component
- **Ins**: Inserted/underlined text component
- **Kbd**: Keyboard input component
- **Mark**: Highlighted text component
- **Paragraph**: Block-level paragraph component
- **Q**: Short quotation component
- **Samp**: Sample output component
- **Small**: Small text component
- **Strong**: Strong/bold text component
- **Sub**: Subscript text component
- **Sup**: Superscript text component
- **Typography**: Main typography component with full styling options
- **Var**: Variable component
- **Wbr**: Word break component

## Development Roadmap

Here's a list of HTML tags. Not all of them will become components.

### Headings

- [ ] `<h1>`: Defines the most important heading (top-level).
- [ ] `<h2>`: Defines a second-level heading.
- [ ] `<h3>`: Defines a third-level heading.
- [ ] `<h4>`: Defines a fourth-level heading.
- [ ] `<h5>`: Defines a fifth-level heading.
- [ ] `<h6>`: Defines the least important heading (sixth-level).

### Text and Paragraph

- [ ] `<p>`: Defines a paragraph.
- [ ] `<br>`: Inserts a single line break.
- [ ] `<hr>`: Defines a thematic change in the content (horizontal rule).
- [ ] `<blockquote>`: Defines a section that is quoted from another source.
- [ ] `<pre>`: Defines preformatted text.

### Text Formatting

- [ ] `<b>`: Defines bold text.
- [ ] `<strong>`: Defines important text (bold).
- [ ] `<i>`: Defines italic text.
- [ ] `<em>`: Defines emphasized text (italic).
- [ ] `<mark>`: Defines marked/highlighted text.
- [ ] `<small>`: Defines smaller text.
- [ ] `<del>`: Defines deleted (strikethrough) text.
- [ ] `<ins>`: Defines inserted (underlined) text.
- [ ] `<sub>`: Defines subscripted text.
- [ ] `<sup>`: Defines superscripted text.
- [ ] `<abbr>`: Defines an abbreviation or acronym.
- [ ] `<cite>`: Defines the title of a work.
- [ ] `<q>`: Defines a short quotation.
- [ ] `<dfn>`: Defines a definition term.
- [ ] `<code>`: Defines a piece of computer code.
- [ ] `<kbd>`: Defines keyboard input.
- [ ] `<samp>`: Defines sample output from a computer program.
- [ ] `<var>`: Defines a variable.
- [ ] `<bdi>`: Isolates a part of text for bidirectional text formatting.
- [ ] `<bdo>`: Overrides the current text direction.
- [ ] `<wbr>`: Defines a possible line-break.

### Links

- [ ] `<a>`: Defines a hyperlink.

### Images and Media

- [ ] `<img>`: Defines an image.
- [ ] `<picture>`: Defines a container for multiple image resources.
- [ ] `<figure>`: Defines self-contained content, like illustrations.
- [ ] `<figcaption>`: Defines a caption for a <figure> element.
- [ ] `<audio>`: Defines sound content.
- [ ] `<video>`: Defines a video or movie.
- [ ] `<source>`: Defines multiple media resources for media elements.
- [ ] `<track>`: Defines text tracks for media elements.
- [ ] `<map>`: Defines a client-side image map.
- [ ] `<area>`: Defines an area inside an image map.

### Lists

- [ ] `<ul>`: Defines an unordered list.
- [ ] `<ol>`: Defines an ordered list.
- [ ] `<li>`: Defines a list item.
- [ ] `<dl>`: Defines a description list.
- [ ] `<dt>`: Defines a term/name in a description list.
- [ ] `<dd>`: Defines a description of a term in a description list.

### Tables

- [ ] `<table>`: Defines a table.
- [ ] `<caption>`: Defines a table caption.
- [ ] `<tr>`: Defines a row in a table.
- [ ] `<th>`: Defines a header cell in a table.
- [ ] `<td>`: Defines a cell in a table.
- [ ] `<thead>`: Groups the header content in a table.
- [ ] `<tbody>`: Groups the body content in a table.
- [ ] `<tfoot>`: Groups the footer content in a table.
- [ ] `<col>`: Specifies column properties for each column within a <colgroup> element.
- [ ] `<colgroup>`: Specifies a group of one or more columns in a table for formatting.

### Section/Semantic Elements

- [ ] `<header>`: Defines a header for a document or section.
- [ ] `<nav>`: Defines navigation links.
- [ ] `<main>`: Specifies the main content of a document.
- [ ] `<section>`: Defines a section in a document.
- [ ] `<article>`: Defines an article.
- [ ] `<aside>`: Defines content aside from the page content.
- [ ] `<footer>`: Defines a footer for a document or section.
- [ ] `<address>`: Defines contact information for the author/owner of a document.

### Form

- [ ] `<form>`: Defines an HTML form for user input.
- [ ] `<input>`: Defines an input control.
- [ ] `<textarea>`: Defines a multiline input control (text area).
- [ ] `<button>`: Defines a clickable button.
- [ ] `<select>`: Defines a drop-down list.
- [ ] `<option>`: Defines an option in a drop-down list.
- [ ] `<optgroup>`: Defines a group of related options in a drop-down list.
- [ ] `<label>`: Defines a label for an <input> element.
- [ ] `<fieldset>`: Groups related elements in a form.
- [ ] `<legend>`: Defines a caption for a <fieldset> element.
- [ ] `<output>`: Defines the result of a calculation.
- [ ] `<datalist>`: Specifies a list of pre-defined options for input controls.

### Script and Embed

- [ ] `<script>`: Defines a client-side script.
- [ ] `<noscript>`: Defines an alternate content for users that do not support client-side scripts.
- [ ] `<iframe>`: Defines an inline frame.
- [ ] `<embed>`: Defines a container for an external (non-HTML) application.
- [ ] `<object>`: Defines an embedded object.
- [ ] `<template>`: Defines a template.

### Interactive Elements

- [ ] `<details>`: Defines additional details that the user can view or hide.
- [ ] `<summary>`: Defines a visible heading for a <details> element.
- [ ] `<dialog>`: Defines a dialog box or window.

### Progress Indicators

- [ ] `<meter>`: Defines a scalar measurement within a known range (a gauge).
- [ ] `<progress>`: Represents the progress of a task.

### Graphics

- [ ] `<canvas>`: Used to draw graphics, on the fly, via scripting (usually JavaScript).
- [ ] `<svg>`: Defines a container for SVG graphics.

### Ruby Annotations

- [ ] `<ruby>`: Defines a ruby annotation (for East Asian typography).
- [ ] `<rt>`: Defines an explanation/pronunciation of characters (for East Asian typography).
- [ ] `<rp>`: Defines what to show if a browser does not support ruby annotations.

### Time and Data

- [ ] `<time>`: Defines a date/time.
- [ ] `<data>`: Links the given content with a machine-readable translation.

### Group/Block Elements

- [ ] `<div>`: Defines a division or a section in an HTML document.
- [ ] `<span>`: Defines a section in a document.

---

## License

This project is licensed under the MIT License.

**Copyright (c) 2025 Davide Di Criscito**

For the full details, see the [LICENSE](LICENSE) file.
