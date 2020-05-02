simplety
=================

## 主要パッケージ
* [eleventy](https://github.com/11ty/eleventy) - 静的サイトジェネレータ
    * [本家のベースブログ](https://github.com/11ty/eleventy-base-blog) をベースに作成
* [luxon](https://github.com/moment/luxon) - 日付の処理を簡単にできるJavaScriptライブラリ（日本語圏は必須）
* [node-sass](https://github.com/sass/node-sass) - SASSコンパイラ
* [npm-run-all](https://github.com/mysticatea/npm-run-all) - パッケージを連続実行・並列実行する
* [rimraf](https://github.com/isaacs/rimraf) - 指定したディレクトリを削除する

## できること
* サイトマップ生成（sitemap.xml）
* SASSコンパイラ（node-sassを使用しています）
* サイト全体の共通部分（サイト名やmetaタグのdescription等）を設定ファイル（_data/site.json）に記述します
* Google Analyticsの設定（空ならコードを出力しません）
* JSON-LDの設定（空ならコードを出力しません）

## できないこと
eleventy もしくは node.js でできると思いますが、筆者が理解していないので、できないこと。

* ブログに関する機能（[本家のベースブログ](https://github.com/11ty/eleventy-base-blog)は実装されています）
    * タギング
    * ページネーション
    * RSS/ATOM生成

## ディレクトリ構造
```
/simplety
    |--/_site                   静的サイト出力ディレクトリ
    |--/_src                    ソースディレクトリ
    |   |--/_data
    |   |   `--site.json        サイト定義ファイル
    |   |--/_includes           テンプレートディレクトリ
    |   |   |--base.njk
    |   |   |--doc.njk
    |   |   |--footer.njk
    |   |   |--head.njk
    |   |   |--header.njk
    |   |   `--nav.njk
    |   |--/css                 スタイルシート（node-sass生成）
    |   |   |--main.css
    |   |   `--main.css.map
    |   |--/scss                SCSSファイル
    |   |   |--_init.scss
    |   |   |--_variables.scss
    |   |   `--main.scss
    |   |--index.md             index.htmlのマークダウンファイル
    |   |--sample.md            sample.htmlのマークダウンファイル
    |   `--sitemap.njk          サイトマップを生成するテンプレートファイル
    |--/node_modules
    |--.eleventy.js             設定ファイル
    |--.gitignore
    |--LICENCE
    |--package.json
    `--README.ja.md
```
ルートディレクトリにソースファイルを置かないポリシーとしています。

`.eleventy.js`に下記を設定しています。
```
return {
    dir: {
        input: "_src",          ソースファイルのディレクトリ
        output: "_site",        出力先ディレクトリ
        data: "_data",          データディレクトリ
        includes: "_includes"   テンプレートファイルのディレクトリ
    }
};
```

## 日付
英語圏では`{{ page.date }}`で事足りますが、日本語では馴染みのある表示になるようフィルターを設定しています。
`readableDate` はサイト上の日付の表記、`htmlDateString`は sitemap.xml の表記で使用します。

日付の出力サンプルを記載します。
```
{{ page.date }}
Wed Apr 29 2020 16:21:48 GMT+0900 (GMT+09:00)
```

```
{{ page.date | readableDate }}
2020年04月29日16時21分48秒
```

htmlDateStringはISO 8601形式で出力しています。
```
{{ page.date | htmlDateString }}
2020-04-29T16:21:48+09:00
```

## 参考文献
* [11ty(eleventy)で静的サイト構築](https://www.evoworx.co.jp/blog/11ty-static-site-generator/)（株式会社 エヴォワークス）

## 画像出典
* [ぱくたそ様](https://www.pakutaso.com/20190332070post-19633.html)

## ライセンス
MIT License
