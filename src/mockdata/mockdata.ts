import { Article, Tag } from "@/lib/type";

export const tags: Tag[] = [
  {
    name: "Next.js",
    icon: {
      url: "/image/next-js-svgrepo-com.png",
    },
    id: "nextjs",
    createdAt: "2023/12/23",
    updatedAt: "2023/12/23",
  },
  {
    name: "React.js",
    icon: {
      url: "/image/react-svgrepo-com.png",
    },
    id: "react",
    createdAt: "2023/12/23",
    updatedAt: "2023/12/23",
  },
  {
    name: "Vue.js",
    icon: {
      url: "/image/vue-vuejs-javascript-js-framework-svgrepo-com.png",
    },
    id: "vue",
    createdAt: "2023/12/23",
    updatedAt: "2023/12/23",
  },
  {
    name: "Docker",
    icon: {
      url: "/image/docker-svgrepo-com.png",
    },
    id: "docker",
    createdAt: "2023/12/23",
    updatedAt: "2023/12/23",
  },
  {
    name: "Python",
    icon: {
      url: "/image/python-svgrepo-com.png",
    },
    id: "python",
    createdAt: "2023/12/23",
    updatedAt: "2023/12/23",
  },
  {
    name: "Java",
    icon: {
      url: "/image/java-svgrepo-com.png",
    },
    id: "java",
    createdAt: "2023/12/23",
    updatedAt: "2023/12/23",
  },
];

export const articleList: Article[] = [
  {
    title: "Sample",
    description: "これはサンプルです。",
    content:
      '---\nid: "Sample"\ntitle: "Sample"\ndescription: "これはサンプルです。"\nemoji: "✏️"\ncategory: "勉強"\ntags: ["Next.js","React","AWS"]\ncreatedAt: "2024-01-14 23:02:25"\nupdatedAt: "2024-01-14 23:02:29"\n---\n\n## ブログテンプレートから作成されました🎉\n\nブログテンプレートからAPIを作成しました。  \nおつかれさまでした🎉\n\n## APIプレビューを試そう🚀\n\n最初に「APIプレビュー」をしてみましょう。\n\n入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。  \nAPIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。\n\n👇まずはここをクリックします。\n\n![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)\n\nAPIプレビュー画面が開いたら、**「取得」**ボタンでリクエストを試してみましょう。\n\n![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)\n\nこの記事の内容がAPIで取得できていることがわかります。\n\n![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)\n\n## 次にやること🏃\n:::message\nAPIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。  \nmicroCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。\n:::\n```\n* [<u>JavaScript SDK</u>](\\"https://document.microcms.io/tutorial/javascript/javascript-top\\")\n* [<u>Nuxt SDK</u>](\\"https://document.microcms.io/tutorial/nuxt/nuxt-top\\")\n* [<u>Gatsby SDK</u>](\\"https://document.microcms.io/tutorial/gatsby/gatsby-top\\")\n\nその他に[<u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u>](\\"https://microcms.io/features/sdk\\")もございます。\n\nお困りなことや疑問点などございましたらお気軽にご連絡ください。  \nサポート窓口：[support@microcms.io](\\"mailto:support@microcms.io\\")  \nよくある質問：[<u>https://help.microcms.io/ja/knowledge</u>](\\"https://help.microcms.io/ja/knowledge\\")\n```',
    emoji: "✏️",
    category: {
      name: "カテゴリ",
      id: "category",
      createdAt: "2024-01-14 23:02:25",
      updatedAt: "2024-01-14 23:02:29",
    },
    tags: [
      {
        name: "Next.js",
        icon: {
          url: "/image/next-js-svgrepo-com.png",
        },
        id: "nextjs",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "React.js",
        icon: {
          url: "/image/react-svgrepo-com.png",
        },
        id: "react",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "Vue.js",
        icon: {
          url: "/image/vue-vuejs-javascript-js-framework-svgrepo-com.png",
        },
        id: "vue",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
    ],
    id: "Sample",
    createdAt: "2024-01-14 23:02:25",
    updatedAt: "2024-01-14 23:02:29",
  },
  {
    title: "Sample",
    description: "これはサンプルです。",
    content: `---
    id: "Sample"
    title: "Sample"
    description: "これはサンプルです。"
    emoji: "✏️"
    category: "勉強"
    tags: ["Next.js","React","AWS"]
    createdAt: "2024-01-14 23:02:25"
    updatedAt: "2024-01-14 23:02:29"
    ---
    
    ## ブログテンプレートから作成されました🎉
    
    ブログテンプレートからAPIを作成しました。  
    おつかれさまでした🎉
    
    ## APIプレビューを試そう🚀
    
    最初に「APIプレビュー」をしてみましょう。
    
    入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。  
    APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。
    
    👇まずはここをクリックします。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    APIプレビュー画面が開いたら、**「取得」**ボタンでリクエストを試してみましょう。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    この記事の内容がAPIで取得できていることがわかります。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    ## 次にやること🏃
    
    APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。  
    microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。
    
    * [<u>JavaScript SDK</u>](\"https://document.microcms.io/tutorial/javascript/javascript-top\")
    * [<u>Nuxt SDK</u>](\"https://document.microcms.io/tutorial/nuxt/nuxt-top\")
    * [<u>Gatsby SDK</u>](\"https://document.microcms.io/tutorial/gatsby/gatsby-top\")
    
    その他に[<u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u>](\"https://microcms.io/features/sdk\")もございます。
    
    お困りなことや疑問点などございましたらお気軽にご連絡ください。  
    サポート窓口：[support@microcms.io](\"mailto:support@microcms.io\")  
    よくある質問：[<u>https://help.microcms.io/ja/knowledge</u>](\"https://help.microcms.io/ja/knowledge\")`,
    emoji: "✏️",
    category: {
      name: "カテゴリ",
      id: "category",
      createdAt: "2024-01-14 23:02:25",
      updatedAt: "2024-01-14 23:02:29",
    },
    tags: [
      {
        name: "Next.js",
        icon: {
          url: "/image/next-js-svgrepo-com.png",
        },
        id: "nextjs",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "React.js",
        icon: {
          url: "/image/react-svgrepo-com.png",
        },
        id: "react",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "Vue.js",
        icon: {
          url: "/image/vue-vuejs-javascript-js-framework-svgrepo-com.png",
        },
        id: "vue",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
    ],
    id: "Sample",
    createdAt: "2024-01-14 23:02:25",
    updatedAt: "2024-01-14 23:02:29",
  },
  {
    title: "Sample",
    description: "これはサンプルです。",
    content: `---
    id: "Sample"
    title: "Sample"
    description: "これはサンプルです。"
    emoji: "✏️"
    category: "勉強"
    tags: ["Next.js","React","AWS"]
    createdAt: "2024-01-14 23:02:25"
    updatedAt: "2024-01-14 23:02:29"
    ---
    
    ## ブログテンプレートから作成されました🎉
    
    ブログテンプレートからAPIを作成しました。  
    おつかれさまでした🎉
    
    ## APIプレビューを試そう🚀
    
    最初に「APIプレビュー」をしてみましょう。
    
    入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。  
    APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。
    
    👇まずはここをクリックします。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    APIプレビュー画面が開いたら、**「取得」**ボタンでリクエストを試してみましょう。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    この記事の内容がAPIで取得できていることがわかります。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    ## 次にやること🏃
    
    APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。  
    microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。
    
    * [<u>JavaScript SDK</u>](\"https://document.microcms.io/tutorial/javascript/javascript-top\")
    * [<u>Nuxt SDK</u>](\"https://document.microcms.io/tutorial/nuxt/nuxt-top\")
    * [<u>Gatsby SDK</u>](\"https://document.microcms.io/tutorial/gatsby/gatsby-top\")
    
    その他に[<u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u>](\"https://microcms.io/features/sdk\")もございます。
    
    お困りなことや疑問点などございましたらお気軽にご連絡ください。  
    サポート窓口：[support@microcms.io](\"mailto:support@microcms.io\")  
    よくある質問：[<u>https://help.microcms.io/ja/knowledge</u>](\"https://help.microcms.io/ja/knowledge\")`,
    emoji: "✏️",
    category: {
      name: "カテゴリ",
      id: "category",
      createdAt: "2024-01-14 23:02:25",
      updatedAt: "2024-01-14 23:02:29",
    },
    tags: [
      {
        name: "Next.js",
        icon: {
          url: "/image/next-js-svgrepo-com.png",
        },
        id: "nextjs",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "React.js",
        icon: {
          url: "/image/react-svgrepo-com.png",
        },
        id: "react",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "Vue.js",
        icon: {
          url: "/image/vue-vuejs-javascript-js-framework-svgrepo-com.png",
        },
        id: "vue",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
    ],
    id: "Sample",
    createdAt: "2024-01-14 23:02:25",
    updatedAt: "2024-01-14 23:02:29",
  },
  {
    title: "Sample",
    description: "これはサンプルです。",
    content: `---
    id: "Sample"
    title: "Sample"
    description: "これはサンプルです。"
    emoji: "✏️"
    category: "勉強"
    tags: ["Next.js","React","AWS"]
    createdAt: "2024-01-14 23:02:25"
    updatedAt: "2024-01-14 23:02:29"
    ---
    
    ## ブログテンプレートから作成されました🎉
    
    ブログテンプレートからAPIを作成しました。  
    おつかれさまでした🎉
    
    ## APIプレビューを試そう🚀
    
    最初に「APIプレビュー」をしてみましょう。
    
    入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。  
    APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。
    
    👇まずはここをクリックします。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    APIプレビュー画面が開いたら、**「取得」**ボタンでリクエストを試してみましょう。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    この記事の内容がAPIで取得できていることがわかります。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    ## 次にやること🏃
    
    APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。  
    microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。
    
    * [<u>JavaScript SDK</u>](\"https://document.microcms.io/tutorial/javascript/javascript-top\")
    * [<u>Nuxt SDK</u>](\"https://document.microcms.io/tutorial/nuxt/nuxt-top\")
    * [<u>Gatsby SDK</u>](\"https://document.microcms.io/tutorial/gatsby/gatsby-top\")
    
    その他に[<u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u>](\"https://microcms.io/features/sdk\")もございます。
    
    お困りなことや疑問点などございましたらお気軽にご連絡ください。  
    サポート窓口：[support@microcms.io](\"mailto:support@microcms.io\")  
    よくある質問：[<u>https://help.microcms.io/ja/knowledge</u>](\"https://help.microcms.io/ja/knowledge\")`,
    emoji: "✏️",
    category: {
      name: "カテゴリ",
      id: "category",
      createdAt: "2024-01-14 23:02:25",
      updatedAt: "2024-01-14 23:02:29",
    },
    tags: [
      {
        name: "Next.js",
        icon: {
          url: "/image/next-js-svgrepo-com.png",
        },
        id: "nextjs",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "React.js",
        icon: {
          url: "/image/react-svgrepo-com.png",
        },
        id: "react",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "Vue.js",
        icon: {
          url: "/image/vue-vuejs-javascript-js-framework-svgrepo-com.png",
        },
        id: "vue",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
    ],
    id: "Sample",
    createdAt: "2024-01-14 23:02:25",
    updatedAt: "2024-01-14 23:02:29",
  },
  {
    title: "Sample",
    description: "これはサンプルです。",
    content: `---
    id: "Sample"
    title: "Sample"
    description: "これはサンプルです。"
    emoji: "✏️"
    category: "勉強"
    tags: ["Next.js","React","AWS"]
    createdAt: "2024-01-14 23:02:25"
    updatedAt: "2024-01-14 23:02:29"
    ---
    
    ## ブログテンプレートから作成されました🎉
    
    ブログテンプレートからAPIを作成しました。  
    おつかれさまでした🎉
    
    ## APIプレビューを試そう🚀
    
    最初に「APIプレビュー」をしてみましょう。
    
    入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。  
    APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。
    
    👇まずはここをクリックします。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    APIプレビュー画面が開いたら、**「取得」**ボタンでリクエストを試してみましょう。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    この記事の内容がAPIで取得できていることがわかります。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    ## 次にやること🏃
    
    APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。  
    microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。
    
    * [<u>JavaScript SDK</u>](\"https://document.microcms.io/tutorial/javascript/javascript-top\")
    * [<u>Nuxt SDK</u>](\"https://document.microcms.io/tutorial/nuxt/nuxt-top\")
    * [<u>Gatsby SDK</u>](\"https://document.microcms.io/tutorial/gatsby/gatsby-top\")
    
    その他に[<u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u>](\"https://microcms.io/features/sdk\")もございます。
    
    お困りなことや疑問点などございましたらお気軽にご連絡ください。  
    サポート窓口：[support@microcms.io](\"mailto:support@microcms.io\")  
    よくある質問：[<u>https://help.microcms.io/ja/knowledge</u>](\"https://help.microcms.io/ja/knowledge\")`,
    emoji: "✏️",
    category: {
      name: "カテゴリ",
      id: "category",
      createdAt: "2024-01-14 23:02:25",
      updatedAt: "2024-01-14 23:02:29",
    },
    tags: [
      {
        name: "Next.js",
        icon: {
          url: "/image/next-js-svgrepo-com.png",
        },
        id: "nextjs",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "React.js",
        icon: {
          url: "/image/react-svgrepo-com.png",
        },
        id: "react",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "Vue.js",
        icon: {
          url: "/image/vue-vuejs-javascript-js-framework-svgrepo-com.png",
        },
        id: "vue",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
    ],
    id: "Sample",
    createdAt: "2024-01-14 23:02:25",
    updatedAt: "2024-01-14 23:02:29",
  },
  {
    title: "Sample",
    description: "これはサンプルです。",
    content: `---
    id: "Sample"
    title: "Sample"
    description: "これはサンプルです。"
    emoji: "✏️"
    category: "勉強"
    tags: ["Next.js","React","AWS"]
    createdAt: "2024-01-14 23:02:25"
    updatedAt: "2024-01-14 23:02:29"
    ---
    
    ## ブログテンプレートから作成されました🎉
    
    ブログテンプレートからAPIを作成しました。  
    おつかれさまでした🎉
    
    ## APIプレビューを試そう🚀
    
    最初に「APIプレビュー」をしてみましょう。
    
    入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。  
    APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。
    
    👇まずはここをクリックします。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    APIプレビュー画面が開いたら、**「取得」**ボタンでリクエストを試してみましょう。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    この記事の内容がAPIで取得できていることがわかります。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    ## 次にやること🏃
    
    APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。  
    microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。
    
    * [<u>JavaScript SDK</u>](\"https://document.microcms.io/tutorial/javascript/javascript-top\")
    * [<u>Nuxt SDK</u>](\"https://document.microcms.io/tutorial/nuxt/nuxt-top\")
    * [<u>Gatsby SDK</u>](\"https://document.microcms.io/tutorial/gatsby/gatsby-top\")
    
    その他に[<u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u>](\"https://microcms.io/features/sdk\")もございます。
    
    お困りなことや疑問点などございましたらお気軽にご連絡ください。  
    サポート窓口：[support@microcms.io](\"mailto:support@microcms.io\")  
    よくある質問：[<u>https://help.microcms.io/ja/knowledge</u>](\"https://help.microcms.io/ja/knowledge\")`,
    emoji: "✏️",
    category: {
      name: "カテゴリ",
      id: "category",
      createdAt: "2024-01-14 23:02:25",
      updatedAt: "2024-01-14 23:02:29",
    },
    tags: [
      {
        name: "Next.js",
        icon: {
          url: "/image/next-js-svgrepo-com.png",
        },
        id: "nextjs",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "React.js",
        icon: {
          url: "/image/react-svgrepo-com.png",
        },
        id: "react",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "Vue.js",
        icon: {
          url: "/image/vue-vuejs-javascript-js-framework-svgrepo-com.png",
        },
        id: "vue",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
    ],
    id: "Sample",
    createdAt: "2024-01-14 23:02:25",
    updatedAt: "2024-01-14 23:02:29",
  },
  {
    title: "Sample",
    description: "これはサンプルです。",
    content: `---
    id: "Sample"
    title: "Sample"
    description: "これはサンプルです。"
    emoji: "✏️"
    category: "勉強"
    tags: ["Next.js","React","AWS"]
    createdAt: "2024-01-14 23:02:25"
    updatedAt: "2024-01-14 23:02:29"
    ---
    
    ## ブログテンプレートから作成されました🎉
    
    ブログテンプレートからAPIを作成しました。  
    おつかれさまでした🎉
    
    ## APIプレビューを試そう🚀
    
    最初に「APIプレビュー」をしてみましょう。
    
    入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。  
    APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。
    
    👇まずはここをクリックします。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    APIプレビュー画面が開いたら、**「取得」**ボタンでリクエストを試してみましょう。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    この記事の内容がAPIで取得できていることがわかります。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    ## 次にやること🏃
    
    APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。  
    microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。
    
    * [<u>JavaScript SDK</u>](\"https://document.microcms.io/tutorial/javascript/javascript-top\")
    * [<u>Nuxt SDK</u>](\"https://document.microcms.io/tutorial/nuxt/nuxt-top\")
    * [<u>Gatsby SDK</u>](\"https://document.microcms.io/tutorial/gatsby/gatsby-top\")
    
    その他に[<u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u>](\"https://microcms.io/features/sdk\")もございます。
    
    お困りなことや疑問点などございましたらお気軽にご連絡ください。  
    サポート窓口：[support@microcms.io](\"mailto:support@microcms.io\")  
    よくある質問：[<u>https://help.microcms.io/ja/knowledge</u>](\"https://help.microcms.io/ja/knowledge\")`,
    emoji: "✏️",
    category: {
      name: "カテゴリ",
      id: "category",
      createdAt: "2024-01-14 23:02:25",
      updatedAt: "2024-01-14 23:02:29",
    },
    tags: [
      {
        name: "Next.js",
        icon: {
          url: "/image/next-js-svgrepo-com.png",
        },
        id: "nextjs",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "React.js",
        icon: {
          url: "/image/react-svgrepo-com.png",
        },
        id: "react",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "Vue.js",
        icon: {
          url: "/image/vue-vuejs-javascript-js-framework-svgrepo-com.png",
        },
        id: "vue",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
    ],
    id: "Sample",
    createdAt: "2024-01-14 23:02:25",
    updatedAt: "2024-01-14 23:02:29",
  },
  {
    title: "Sample",
    description: "これはサンプルです。",
    content: `---
    id: "Sample"
    title: "Sample"
    description: "これはサンプルです。"
    emoji: "✏️"
    category: "勉強"
    tags: ["Next.js","React","AWS"]
    createdAt: "2024-01-14 23:02:25"
    updatedAt: "2024-01-14 23:02:29"
    ---
    
    ## ブログテンプレートから作成されました🎉
    
    ブログテンプレートからAPIを作成しました。  
    おつかれさまでした🎉
    
    ## APIプレビューを試そう🚀
    
    最初に「APIプレビュー」をしてみましょう。
    
    入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。  
    APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。
    
    👇まずはここをクリックします。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    APIプレビュー画面が開いたら、**「取得」**ボタンでリクエストを試してみましょう。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    この記事の内容がAPIで取得できていることがわかります。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    ## 次にやること🏃
    
    APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。  
    microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。
    
    * [<u>JavaScript SDK</u>](\"https://document.microcms.io/tutorial/javascript/javascript-top\")
    * [<u>Nuxt SDK</u>](\"https://document.microcms.io/tutorial/nuxt/nuxt-top\")
    * [<u>Gatsby SDK</u>](\"https://document.microcms.io/tutorial/gatsby/gatsby-top\")
    
    その他に[<u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u>](\"https://microcms.io/features/sdk\")もございます。
    
    お困りなことや疑問点などございましたらお気軽にご連絡ください。  
    サポート窓口：[support@microcms.io](\"mailto:support@microcms.io\")  
    よくある質問：[<u>https://help.microcms.io/ja/knowledge</u>](\"https://help.microcms.io/ja/knowledge\")`,
    emoji: "✏️",
    category: {
      name: "カテゴリ",
      id: "category",
      createdAt: "2024-01-14 23:02:25",
      updatedAt: "2024-01-14 23:02:29",
    },
    tags: [
      {
        name: "Next.js",
        icon: {
          url: "/image/next-js-svgrepo-com.png",
        },
        id: "nextjs",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "React.js",
        icon: {
          url: "/image/react-svgrepo-com.png",
        },
        id: "react",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "Vue.js",
        icon: {
          url: "/image/vue-vuejs-javascript-js-framework-svgrepo-com.png",
        },
        id: "vue",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
    ],
    id: "Sample",
    createdAt: "2024-01-14 23:02:25",
    updatedAt: "2024-01-14 23:02:29",
  },
  {
    title: "Sample",
    description: "これはサンプルです。",
    content: `---
    id: "Sample"
    title: "Sample"
    description: "これはサンプルです。"
    emoji: "✏️"
    category: "勉強"
    tags: ["Next.js","React","AWS"]
    createdAt: "2024-01-14 23:02:25"
    updatedAt: "2024-01-14 23:02:29"
    ---
    
    ## ブログテンプレートから作成されました🎉
    
    ブログテンプレートからAPIを作成しました。  
    おつかれさまでした🎉
    
    ## APIプレビューを試そう🚀
    
    最初に「APIプレビュー」をしてみましょう。
    
    入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。  
    APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。
    
    👇まずはここをクリックします。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    APIプレビュー画面が開いたら、**「取得」**ボタンでリクエストを試してみましょう。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    この記事の内容がAPIで取得できていることがわかります。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    ## 次にやること🏃
    
    APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。  
    microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。
    
    * [<u>JavaScript SDK</u>](\"https://document.microcms.io/tutorial/javascript/javascript-top\")
    * [<u>Nuxt SDK</u>](\"https://document.microcms.io/tutorial/nuxt/nuxt-top\")
    * [<u>Gatsby SDK</u>](\"https://document.microcms.io/tutorial/gatsby/gatsby-top\")
    
    その他に[<u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u>](\"https://microcms.io/features/sdk\")もございます。
    
    お困りなことや疑問点などございましたらお気軽にご連絡ください。  
    サポート窓口：[support@microcms.io](\"mailto:support@microcms.io\")  
    よくある質問：[<u>https://help.microcms.io/ja/knowledge</u>](\"https://help.microcms.io/ja/knowledge\")`,
    emoji: "✏️",
    category: {
      name: "カテゴリ",
      id: "category",
      createdAt: "2024-01-14 23:02:25",
      updatedAt: "2024-01-14 23:02:29",
    },
    tags: [
      {
        name: "Next.js",
        icon: {
          url: "/image/next-js-svgrepo-com.png",
        },
        id: "nextjs",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "React.js",
        icon: {
          url: "/image/react-svgrepo-com.png",
        },
        id: "react",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "Vue.js",
        icon: {
          url: "/image/vue-vuejs-javascript-js-framework-svgrepo-com.png",
        },
        id: "vue",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
    ],
    id: "Sample",
    createdAt: "2024-01-14 23:02:25",
    updatedAt: "2024-01-14 23:02:29",
  },
  {
    title: "Sample",
    description: "これはサンプルです。",
    content: `---
    id: "Sample"
    title: "Sample"
    description: "これはサンプルです。"
    emoji: "✏️"
    category: "勉強"
    tags: ["Next.js","React","AWS"]
    createdAt: "2024-01-14 23:02:25"
    updatedAt: "2024-01-14 23:02:29"
    ---
    
    ## ブログテンプレートから作成されました🎉
    
    ブログテンプレートからAPIを作成しました。  
    おつかれさまでした🎉
    
    ## APIプレビューを試そう🚀
    
    最初に「APIプレビュー」をしてみましょう。
    
    入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。  
    APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。
    
    👇まずはここをクリックします。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    APIプレビュー画面が開いたら、**「取得」**ボタンでリクエストを試してみましょう。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    この記事の内容がAPIで取得できていることがわかります。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    ## 次にやること🏃
    
    APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。  
    microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。
    
    * [<u>JavaScript SDK</u>](\"https://document.microcms.io/tutorial/javascript/javascript-top\")
    * [<u>Nuxt SDK</u>](\"https://document.microcms.io/tutorial/nuxt/nuxt-top\")
    * [<u>Gatsby SDK</u>](\"https://document.microcms.io/tutorial/gatsby/gatsby-top\")
    
    その他に[<u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u>](\"https://microcms.io/features/sdk\")もございます。
    
    お困りなことや疑問点などございましたらお気軽にご連絡ください。  
    サポート窓口：[support@microcms.io](\"mailto:support@microcms.io\")  
    よくある質問：[<u>https://help.microcms.io/ja/knowledge</u>](\"https://help.microcms.io/ja/knowledge\")`,
    emoji: "✏️",
    category: {
      name: "カテゴリ",
      id: "category",
      createdAt: "2024-01-14 23:02:25",
      updatedAt: "2024-01-14 23:02:29",
    },
    tags: [
      {
        name: "Next.js",
        icon: {
          url: "/image/next-js-svgrepo-com.png",
        },
        id: "nextjs",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "React.js",
        icon: {
          url: "/image/react-svgrepo-com.png",
        },
        id: "react",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "Vue.js",
        icon: {
          url: "/image/vue-vuejs-javascript-js-framework-svgrepo-com.png",
        },
        id: "vue",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
    ],
    id: "Sample",
    createdAt: "2024-01-14 23:02:25",
    updatedAt: "2024-01-14 23:02:29",
  },
  {
    title: "Sample",
    description: "これはサンプルです。",
    content: `---
    id: "Sample"
    title: "Sample"
    description: "これはサンプルです。"
    emoji: "✏️"
    category: "勉強"
    tags: ["Next.js","React","AWS"]
    createdAt: "2024-01-14 23:02:25"
    updatedAt: "2024-01-14 23:02:29"
    ---
    
    ## ブログテンプレートから作成されました🎉
    
    ブログテンプレートからAPIを作成しました。  
    おつかれさまでした🎉
    
    ## APIプレビューを試そう🚀
    
    最初に「APIプレビュー」をしてみましょう。
    
    入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。  
    APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。
    
    👇まずはここをクリックします。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    APIプレビュー画面が開いたら、**「取得」**ボタンでリクエストを試してみましょう。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    この記事の内容がAPIで取得できていることがわかります。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    ## 次にやること🏃
    
    APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。  
    microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。
    
    * [<u>JavaScript SDK</u>](\"https://document.microcms.io/tutorial/javascript/javascript-top\")
    * [<u>Nuxt SDK</u>](\"https://document.microcms.io/tutorial/nuxt/nuxt-top\")
    * [<u>Gatsby SDK</u>](\"https://document.microcms.io/tutorial/gatsby/gatsby-top\")
    
    その他に[<u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u>](\"https://microcms.io/features/sdk\")もございます。
    
    お困りなことや疑問点などございましたらお気軽にご連絡ください。  
    サポート窓口：[support@microcms.io](\"mailto:support@microcms.io\")  
    よくある質問：[<u>https://help.microcms.io/ja/knowledge</u>](\"https://help.microcms.io/ja/knowledge\")`,
    emoji: "✏️",
    category: {
      name: "カテゴリ",
      id: "category",
      createdAt: "2024-01-14 23:02:25",
      updatedAt: "2024-01-14 23:02:29",
    },
    tags: [
      {
        name: "Next.js",
        icon: {
          url: "/image/next-js-svgrepo-com.png",
        },
        id: "nextjs",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "React.js",
        icon: {
          url: "/image/react-svgrepo-com.png",
        },
        id: "react",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "Vue.js",
        icon: {
          url: "/image/vue-vuejs-javascript-js-framework-svgrepo-com.png",
        },
        id: "vue",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
    ],
    id: "Sample",
    createdAt: "2024-01-14 23:02:25",
    updatedAt: "2024-01-14 23:02:29",
  },
  {
    title: "Sample",
    description: "これはサンプルです。",
    content: `---
    id: "Sample"
    title: "Sample"
    description: "これはサンプルです。"
    emoji: "✏️"
    category: "勉強"
    tags: ["Next.js","React","AWS"]
    createdAt: "2024-01-14 23:02:25"
    updatedAt: "2024-01-14 23:02:29"
    ---
    
    ## ブログテンプレートから作成されました🎉
    
    ブログテンプレートからAPIを作成しました。  
    おつかれさまでした🎉
    
    ## APIプレビューを試そう🚀
    
    最初に「APIプレビュー」をしてみましょう。
    
    入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。  
    APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。
    
    👇まずはここをクリックします。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    APIプレビュー画面が開いたら、**「取得」**ボタンでリクエストを試してみましょう。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    この記事の内容がAPIで取得できていることがわかります。
    
    ![blog-template](https://github.com/mugi-tech/blog-contents/blob/main/mugi-notebook-contents/sample/image/blog-template.png?raw=true)
    
    ## 次にやること🏃
    
    APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。  
    microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。
    
    * [<u>JavaScript SDK</u>](\"https://document.microcms.io/tutorial/javascript/javascript-top\")
    * [<u>Nuxt SDK</u>](\"https://document.microcms.io/tutorial/nuxt/nuxt-top\")
    * [<u>Gatsby SDK</u>](\"https://document.microcms.io/tutorial/gatsby/gatsby-top\")
    
    その他に[<u>サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</u>](\"https://microcms.io/features/sdk\")もございます。
    
    お困りなことや疑問点などございましたらお気軽にご連絡ください。  
    サポート窓口：[support@microcms.io](\"mailto:support@microcms.io\")  
    よくある質問：[<u>https://help.microcms.io/ja/knowledge</u>](\"https://help.microcms.io/ja/knowledge\")`,
    emoji: "✏️",
    category: {
      name: "カテゴリ",
      id: "category",
      createdAt: "2024-01-14 23:02:25",
      updatedAt: "2024-01-14 23:02:29",
    },
    tags: [
      {
        name: "Next.js",
        icon: {
          url: "/image/next-js-svgrepo-com.png",
        },
        id: "nextjs",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "React.js",
        icon: {
          url: "/image/react-svgrepo-com.png",
        },
        id: "react",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
      {
        name: "Vue.js",
        icon: {
          url: "/image/vue-vuejs-javascript-js-framework-svgrepo-com.png",
        },
        id: "vue",
        createdAt: "2024-01-14 23:02:25",
        updatedAt: "2024-01-14 23:02:29",
      },
    ],
    id: "Sample",
    createdAt: "2024-01-14 23:02:25",
    updatedAt: "2024-01-14 23:02:29",
  },
];
