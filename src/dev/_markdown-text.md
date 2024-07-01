## テーブル

| 列名1 | 列名2 | 列名3 | 列名4 |
|-------|:------|:-----:|------:|
| データ1 | データ2 | データ3 | データ4 |
| A       | B       | C       | D       |
| ...     | ...     | ...     | ...     |
| ...     | ...     | ...     | ...     |

## h2 text

### h3 text

#### h4 text

##### h5 text

###### h6 text

## Block Quote
> this is block Quote
> hogehoge
> fugafuga
> piyopiyo
> > foo
> > bar

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

www.example.com?card

https://azukiazusa.dev/blog/typescript-no-unchecked-indexed-access/?card

## Footnote

A note[^1]
B note[^2]

[^1]: Big note.
[^2]: Small note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |
| hogehoge | fugafuga | piyopiyo | foobar |

```html
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8"/>
        <title>404 Not Found.</title>
    </head>
    <body>
        <h1>404 Not Found.</h1>
        <p>お探しのページは見つかりませんでした。</p>
    </body>
</html>

```

```javascript
'use client';
import { OrganizationSwitcher } from "@clerk/nextjs";
import { InviteButton } from "./invite-button";

export const OrgSwitcher = () => {
  return (
    <div className="w-full flex items-center justify-between gap-x-2">
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "380px",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              justifyContent: "center",
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "#fff",
              },
            },
          },
        }}
      />
      <InviteButton />
    </div>
  );
};
```

![alt-text](https://images.microcms-assets.io/assets/07cf8440c5bd4a639fe5e30682a5f7a2/9f4b7be55ef74e388ce8c4237704a86c/22_11_23_%E6%A8%8B%E5%8F%A3.png?w=300&h=400&priority=true)

## Tasklist

* [ ] to do
* [x] done

## リスト

### 数字付きリスト
1. ほげほげ
2. ふがふが  [a](#a)
3. ぴよぴよ
    1. foo
    2. bar

### 普通のリスト
- ほげほげ
- ふがふが  [a](#a)
- ぴよぴよ
  - foo
  - bar
    - google
    - yahoo
      - dog
      - cat

1. hoge
    1. hoge
        1. hoge
            1. hoge
                1. hoge
                    - hoge
                        1. hoge
                        