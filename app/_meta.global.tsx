import type { MetaRecord } from 'nextra'
const DOCS_SIDEBAR_MENU: MetaRecord = {
    index: '',
    'getting-started': '',
    _: {
      type: 'separator',
      title: 'Libraries'
    }
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
