/* eslint-disable */
'use strict';

export const markdownText = `
# GFMの対応する構文

> https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
## 見出し

見出しを作成するには、1 つから 6 つの \`#\` シンボルを見出しのテキストの前に追加します。 使用する \`#\` の個数によって、見出しの階層レベルと書体のサイズが決まります。

\`\`\`markdown
# A first-level heading
## A second-level heading
### A third-level heading
\`\`\`

# A first-level heading
## A second-level heading
### A third-level heading

## テキストのスタイル設定

コメント フィールドと \`.md\` ファイルでは、太字、斜体、取り消し線、下付き、上付きのテキストで強調を示すことができます。

| スタイル | 構文 | 例 | 出力 |
| :-- | :-- | :-- | :-- |
| 太字 | 	\`** **\` または \`__ __\` | \`**これは太字のテキストです**\` | **これは太字のテキストです** |
| 斜体 | \`* *\` または \`_ _\` | \`_このテキストは斜体です_\` | _このテキストは斜体です_ |
| 取り消し線 | \`~~ ~~\` | \`~~これは間違ったテキストでした~~\` | ~~これは間違ったテキストでした~~ |
| 太字および  太字中にある斜体 | \`** **\` および \`_ _\` | \`**このテキストは_きわめて_重要です**\` | **このテキストは_きわめて_重要です** |
| 全体が太字  かつ斜体 | \`*** ***\` | \`***このテキストはすべて重要です***\` | ***このテキストはすべて重要です*** |
| Subscript | \`<sub> </sub>\` | \`これは<sub>下付き</sub>テキストです\` | これは<sub>下付き</sub>テキストです |
| Superscript | \`<sup> </sup>\` | \`これは<sup>上付き</sup>テキストです\` | これは<sup>上付き</sup>テキストです |

## テーブル

| 列名1 | 列名2 | 列名3 | 列名4 |
|-------|:------|:-----:|------:|
| データ1 | データ2 | データ3 | データ4 |
| A       | B       | C       | D       |
| ...     | ...     | ...     | ...     |
| ...     | ...     | ...     | ...     |

## テキストの引用

\`>\` を使用してテキストを引用符で囲みます。

\`\`\`markdown
Text that is not a quote

> Text that is a quote
\`\`\`

Text that is not a quote

> Text that is a quote

## コードの引用

単一のバッククォートで文章内のコードやコマンドを引用できます。 バッククォート内のテキストはフォーマットされません。

\`\`\`markdown
Use \`git status\` to list all new or modified files that haven't yet been committed.
\`\`\`

Use \`git status\` to list all new or modified files that haven't yet been committed.

独立したブロック内にコードあるいはテキストをフォーマットするには、3 重のバッククォートを使用します。
\`\`\`markdown
Some basic Git commands are:
\\\`\\\`\\\`
git status
git add
git commit
\\\`\\\`\\\`
\`\`\`

Some basic Git commands are:
\`\`\`
git status
git add
git commit
\`\`\`

## リンク

インライン リンクを作成するには、リンク テキストを角かっこ \`[ ]\` で囲み、URL をかっこ \`( )\` で囲みます。

\`This site was built using [GitHub Pages](https://pages.github.com/).\`

This site was built using [GitHub Pages](https://pages.github.com/).

カード リンクを作成する場合、urlの末尾に?cardをつけます。

\`https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax?card\`

https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax?card

## 画像

\`!\` を追加して、代替テキストを \`[ ]\`内にラップすると、画像を表示できます。 代替テキストは、画像内の情報に相当する短いテキストです。 次に、画像のリンクをかっこ \`()\` で囲みます。

\`![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)\`

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)

## リスト

1 つまたは複数の行の前に \`-\`、\`*\`、または \`+\` を置くことで、順序なしリストを作成できます。

\`\`\`markdown
- George Washington
* John Adams
+ Thomas Jefferson
\`\`\`

- George Washington
* John Adams
+ Thomas Jefferson

リストを順序付けするには、各行の前に数字を置きます。

\`\`\`markdown
1. James Madison
2. James Monroe
3. John Quincy Adams
\`\`\`

1. James Madison
2. James Monroe
3. John Quincy Adams

### 入れ子になったリスト

1 つ以上のリストアイテムを他のアイテムの下にインデントすることで、入れ子になったリストを作成できます。

\`\`\`markdown
1. First list item
   - First nested list item
     - Second nested list item
\`\`\`

1. First list item
   - First nested list item
     - Second nested list item

## タスクリスト

タスク リストを作成するには、リスト アイテムの前に空白、ハイフン、\`[ ]\` を付けます。 完了したタスクをマークするには、\`[x]\` を使います。

\`\`\`markdown
- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:
\`\`\`

- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

タスク リスト アイテムの説明がかっこで始まる場合、そのかっこを \`\\\` でエスケープする必要があります。

\`- [ ] \(Optional) Open a followup issue\`

- [ ] \(Optional) Open a followup issue

## 絵文字の使用

\`:EMOJICODE:\` とコロンの後に絵文字の名前を入力することで、文章に絵文字を追加できます。

\`@octocat :+1: This PR looks great - it's ready to merge! :shipit:\`

@octocat :+1: This PR looks great - it's ready to merge! :shipit:

## 段落

テキスト行の間に空白行を残すことで、新しいパラグラフを作成できます。

## 脚注

次の角かっこ構文を使用して、コンテンツに脚注を追加できます。

\`\`\`markdown
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
  This is a second line.
\`\`\`

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
  This is a second line.

## 警告

アラートは、重要な情報を強調する際に使用できるブロッククォート構文に基づいたMarkdown拡張です。 GitHub では、コンテンツの重要度を示す独特の色とアイコンが表示されます。

アラートは、ユーザーの成功に不可欠な場合にのみ使用し、読者へ過剰な負荷をかけないよう、記事ごとに 1 つまたは 2 つに制限してください。 さらに、アラートを連続して配置しないようにする必要があります。 アラートを他の要素内に入れ子にすることはできません。

アラートを追加するには、アラートの種類を指定する特殊なブロッククォート行を使用し、その後に標準ブロッククォート内のアラート情報を指定します。 5 種類のアラートを利用できます。

\`\`\`markdown
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
\`\`\`

レンダリングされたアラートを次に示します。

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

## コメントを使用してコンテンツを非表示にする

コンテンツを HTML コメント内に配置することで、レンダリングされた Markdown からコンテンツを非表示にすることができます。

\`<!-- This content will not appear in the rendered Markdown -->\`

## Markdown のフォーマットの無視

Markdown のキャラクタの前に \`\\\` を使用することで、Markdown のフォーマットを無視 (エスケープ) させることができます。

\`Let's rename \\*our-new-project\\* to \\*our-old-project\\*.\`

Let's rename \\*our-new-project\\* to \\*our-old-project\\*.

## 参考資料
- [GitHub Flavored Markdown の仕様](https://github.github.com/gfm/)
- [GitHub 上での執筆とフォーマットについて](https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github)
- [高度なフォーマットを使用して作業する](https://docs.github.com/ja/get-started/writing-on-github/working-with-advanced-formatting)
- [GitHub 上での書き込みに関するクイックスタート](https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)
`;
