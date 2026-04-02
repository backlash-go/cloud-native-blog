import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Cloud Native Blog",
  description: "This is My Cloud Native Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Kubernetes',
        items: [
          { text: 'Overview', link: '/k8s/index' },
          { text: 'kubectl', link: '/k8s/kubectl/index' },
          { text: 'client-go', link: '/k8s/client-go/index' }
        ]}

    ],
    sidebar: {
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/k8s/': [
        {
          text: 'Kubernetes',
          collapsed: true,
          items: [
            { text: 'client-go', link: '/k8s/client-go/index' },
            { text: 'kubectl', link: '/k8s/kubectl/index' }
          ]
        }
      ],
      '/k8s/client-go/': [
        {
          text: 'client-go',
          collapsed: true,
          items: [
            { text: 'client-go1', link: '/k8s/client-go/index' },
            { text: '客户端', link: '/k8s/client-go/客户端' }
          ]
        },
        {
          text: '客户端',
          collapsed: true,
          items: [
            { text: 'kubeconfig配置管理', link: '/k8s/client-go/kubeconfig配置管理' },
            { text: 'RESTClient客户端', link: '/k8s/client-go/RESTClient客户端' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
