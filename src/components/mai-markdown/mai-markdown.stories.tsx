'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiMarkdown } from './mai-markdown';
import { OGPProps } from '@/features/ogp-fetcher';

const meta: Meta<typeof MaiMarkdown> = {
  title: 'Components/MaiMarkdown',
  component: MaiMarkdown,
  argTypes: {
    children: {
      control: { type: 'text' },
      options: [true, false],
    },
  },
  tags: [
    'test',
  ],
};
export default meta;

const Template: StoryFn<MaiMarkdown.Props> = (args) => <MaiMarkdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: _getSampleMarkdown(),
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const Headings = Template.bind({});
Headings.args = {
  children: _getSampleMarkdownContents().HEADINGS,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const StylingText = Template.bind({});
StylingText.args = {
  children: _getSampleMarkdownContents().STYLING_TEXT,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const HorizontalLines = Template.bind({});
HorizontalLines.args = {
  children: _getSampleMarkdownContents().HORIZONTAL_LINES,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const QuatingText = Template.bind({});
QuatingText.args = {
  children: _getSampleMarkdownContents().QUATING_TEXT,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const QuatingCode = Template.bind({});
QuatingCode.args = {
  children: _getSampleMarkdownContents().QUATING_CODE,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

// export const SupportedColorModels = Template.bind({});
// SupportedColorModels.args = {
//   children: _getSampleMarkdownContents().SUPPORTED_COLOR_MODELS,
//   fallbackImageProps: genFallbackImageProps(),
//   ogpFetcher: ogpFetcher,
// };

export const Links = Template.bind({});
Links.args = {
  children: _getSampleMarkdownContents().LINKS,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const LineBreaks = Template.bind({});
LineBreaks.args = {
  children: _getSampleMarkdownContents().LINE_BREAKS,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const Images = Template.bind({});
Images.args = {
  children: _getSampleMarkdownContents().IMAGES,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const Lists = Template.bind({});
Lists.args = {
  children: _getSampleMarkdownContents().LISTS,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const TaskLists = Template.bind({});
TaskLists.args = {
  children: _getSampleMarkdownContents().TASK_LISTS,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const Paragraphs = Template.bind({});
Paragraphs.args = {
  children: _getSampleMarkdownContents().PARAGRAPHS,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const Footnotes = Template.bind({});
Footnotes.args = {
  children: _getSampleMarkdownContents().FOOTNOTES,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const Alerts = Template.bind({});
Alerts.args = {
  children: _getSampleMarkdownContents().ALERTS,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const HindingContentWithComments = Template.bind({});
HindingContentWithComments.args = {
  children: _getSampleMarkdownContents().HINDING_CONTENT_WITH_COMMENTS,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const IgnoringMarkdownFormatting = Template.bind({});
IgnoringMarkdownFormatting.args = {
  children: _getSampleMarkdownContents().IGNORING_MARKDOWN_FORMATTING,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const Tables = Template.bind({});
Tables.args = {
  children: _getSampleMarkdownContents().TABLES,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

export const Sections = Template.bind({});
Sections.args = {
  children: _getSampleMarkdownContents().SECTIONS,
  fallbackImageProps: genFallbackImageProps(),
  ogpFetcher: ogpFetcher,
};

/** @internal */;
function _getSampleMarkdownContents () {
  const HEADINGS = `
# A first-level heading
## A second-level heading
### A third-level heading
#### A fourth-level heading
##### A fifth-level heading
###### A sixth-level heading
`;

  const STYLING_TEXT = `
This is a paragraph with **bold text**, *italic text*, and ***bold and italic text***.

This is a paragraph with ~~strikethrough text~~, <sub>subscript text</sub> and <ins>underlined text</ins>.
`;

  const HORIZONTAL_LINES = `
\`***\`  

***

\`---\`  

---
`;

  const QUATING_TEXT = `
Text that is not a quote

> Text that is a quote
> > Nested quote text
`;

  const QUATING_CODE = `
Use \`git status\` to list all new or modified files that haven't yet been committed.

Some basic Git commands are:
\`\`\`
git status
git add
git commit
\`\`\`

\`\`\`
console.log('Hello, world!');
\`\`\`

\`\`\`javascript
// with language
console.log('Hello, world!');
\`\`\`

\`\`\`index.js
// with filename
console.log('Hello, world!');
\`\`\`

\`\`\`javascript:index.js
// with language and filename
console.log('Hello, world!');
\`\`\`
  `;

  const SUPPORTED_COLOR_MODELS = ``;

  const LINKS = `
This site was built using [GitHub Pages](https://pages.github.com/).

https://www.google.com/

[This is link](https://www.example.com)

[This is Card Link](https://github.com)
`;

  const LINE_BREAKS = `
- Include two spaces at the end of the first line.  
    This example  
    Will span two lines
- Include a backslash at the end of the first line.  
    This example\\
    Will span two lines
- Include an HTML single line break tag at the end of the first line.  
    This example<br>
    Will span two lines
`;

  const IMAGES = `
![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)

![Alt text](https://via.placeholder.com/150)
`;

  const LISTS = `
unorder list
- George Washington
* John Adams
+ Thomas Jefferson

order list
1. James Madison
2. James Monroe
3. John Quincy Adams

nested list
1. First list item
   - First nested list item
     - Second nested list item
`;

  const TASK_LISTS = `
- [x] #17
- [ ] https://github.com/shiraya-ma/mai-ui/issues/31
- [ ] Add delight to the experience when all tasks are complete :tada:
- [ ] \\(Optional) Open a followup issue
`;

  const USING_EMOJIS = ``;

  const PARAGRAPHS = `
You can create a new paragraph by leaving a blank line between lines of text.
`;

  const FOOTNOTES = `
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.  
  This is a second line.
`;

  const ALERTS = `
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

> [!NOTE]
> First line.  
> Second line.

> [!TIP]
> > Nested text
 `;

  const HINDING_CONTENT_WITH_COMMENTS = `
<!-- This content will not appear in the rendered Markdown -->
`;

  const IGNORING_MARKDOWN_FORMATTING = `
Let's rename \\*our-new-project\\* to \\*our-old-project\\*.
`;

  const TABLES = `
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |
`;

  const SECTIONS = `
<details>

<summary>Tips for collapsed sections</summary>

### You can add a header

You can add text within a collapsed section.

You can add an image or a code block, too.

\`\`\`ruby
   puts "Hello World"
\`\`\`

</details>

<details open>

<summary>Tips for collapsed sections - default opened</summary>

### You can add a header

You can add text within a collapsed section.

You can add an image or a code block, too.

\`\`\`ruby
   puts "Hello World"
\`\`\`

</details>
`;

  return {
    HEADINGS,
    STYLING_TEXT,
    HORIZONTAL_LINES,
    QUATING_TEXT,
    QUATING_CODE,
    SUPPORTED_COLOR_MODELS,
    LINKS,
    LINE_BREAKS,
    IMAGES,
    LISTS,
    TASK_LISTS,
    USING_EMOJIS,
    PARAGRAPHS,
    FOOTNOTES,
    ALERTS,
    HINDING_CONTENT_WITH_COMMENTS,
    IGNORING_MARKDOWN_FORMATTING,
    TABLES,
    SECTIONS,
  };
};

/** @internal */
function _getSampleMarkdown () {
  const {
    HEADINGS,
    STYLING_TEXT,
    HORIZONTAL_LINES,
    QUATING_TEXT,
    QUATING_CODE,
    SUPPORTED_COLOR_MODELS,
    LINKS,
    LINE_BREAKS,
    IMAGES,
    LISTS,
    TASK_LISTS,
    USING_EMOJIS,
    PARAGRAPHS,
    FOOTNOTES,
    ALERTS,
    HINDING_CONTENT_WITH_COMMENTS,
    IGNORING_MARKDOWN_FORMATTING,
    TABLES,
    SECTIONS,
  } = _getSampleMarkdownContents();

  return `
# MaiMarkdown

## Headings
${HEADINGS}

## Styling text
${STYLING_TEXT}

## Horizontal lines
${HORIZONTAL_LINES}

## Quating text
${QUATING_TEXT}

## Quating code
${QUATING_CODE}

<!--
## Supported color models
${SUPPORTED_COLOR_MODELS}
-->

## Links

## Link
${LINKS}

## Line breaks
${LINE_BREAKS}

## Images
${IMAGES}

## Lists
${LISTS}

## Task lists
${TASK_LISTS}

<!--
## Using emojis
${USING_EMOJIS}
-->

## Paragraphs
${PARAGRAPHS}

## Footnotes
${FOOTNOTES}

## Alerts
${ALERTS}

## Hinding content with comments
${HINDING_CONTENT_WITH_COMMENTS}

## Ignoring markdown formatting
${IGNORING_MARKDOWN_FORMATTING}

## Tables
${TABLES}

## Sections
${SECTIONS}

## Further reading
- [Basic writing and formatting syntax](https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
- [About writing and formatting on GitHub](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting)
- [Working with advanced formatting](https://docs.github.com/ja/get-started/writing-on-github/working-with-advanced-formatting)
- [Quickstart for writing on GitHub](https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)
`;
};

/** @internal */
async function ogpFetcher (url: string | undefined): Promise<OGPProps | undefined> {
  // throw new Error('Failed');
  if (!URL.canParse(url || '')) return undefined;
  const res = await fetch(`https://api.shiraya.ma/ogp?url=${encodeURIComponent(url || '')}`);
  const ogp = await res.json();
  // console.debug(ogp);
  await new Promise<void>(resolve => setTimeout(() => resolve(), 2000))
  return ogp;
};

/** @internal */
function genFallbackImageProps () {
  return {
    src: '/image-placeholder.png',
    width: 300,
    height: 300
  };
};
