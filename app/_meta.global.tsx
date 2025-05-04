import type { MetaRecord } from 'nextra'
const DOCS_SIDEBAR_MENU: MetaRecord = {
    index: '',
    'getting-started': {
      display: 'hidden',
    },
    _: {
      type: 'separator',
      title: 'Libraries' // @TODO: split this into two sections: Interceptors and Utils
    },
    'postman4j-models': '',
    'apache-interceptor': '',
    'spring-interceptor': '',
    'restassured-interceptor': '',
    __: {
      type: 'separator',
      title: 'How it works'
    },
}

export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'full'
    }
  },
  docs: {
    type: 'page',
    title: 'Documentation',
    items: DOCS_SIDEBAR_MENU
  },
  external: {
    type: 'page',
    title: 'Download',
    href: 'https://central.sonatype.com/namespace/dev.jora.postman4j'
  }
};
