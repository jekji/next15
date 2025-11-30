import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { RootProvider } from 'fumadocs-ui/provider/next'
import { BookOpenIcon, CodeIcon, GitForkIcon, HomeIcon } from 'lucide-react'
import { i18n, source } from '@/lib/source'
import { defineI18nUI } from 'fumadocs-ui/i18n';
import { routing } from '@/i18n/routing'

const translations = {
  en: {
    displayName: 'English',
    home: 'Home',
    document: 'Document',
    toc: 'Table of Contents',
    search: 'Search Docs',
    lastUpdate: 'Last updated on',
    searchNoResult: 'No results found',
    previousPage: 'Previous Page',
    nextPage: 'Next Page',
    chooseLanguage: 'Choose Language',
  },
  es: {
    displayName: 'Español',
    home: 'Inicio',
    document: 'Documentos',
    toc: 'Tabla de Contenidos',
    search: 'Buscar Documentos',
    lastUpdate: 'Última actualización el',
    searchNoResult: 'No se encontraron resultados',
    previousPage: 'Página Anterior',
    nextPage: 'Página Siguiente',
    chooseLanguage: 'Elegir Idioma',
  },
  fr: {
    displayName: 'Français',
    home: 'Accueil',
    document: 'Documentation',
    toc: 'Table des Matières',
    search: 'Rechercher la Documentation',
    lastUpdate: 'Dernière mise à jour le',
    searchNoResult: 'Aucun résultat trouvé',
    previousPage: 'Page Précédente',
    nextPage: 'Page Suivante',
    chooseLanguage: 'Choisir la Langue',
  },
  ja: {
    displayName: '日本語',
    home: 'ホーム',
    document: 'ドキュメント',
    toc: '目次',
    search: 'ドキュメントを検索',
    lastUpdate: '最終更新日',
    searchNoResult: '結果が見つかりませんでした',
    previousPage: '前のページ',
    nextPage: '次のページ',
    chooseLanguage: '言語を選択',
  },
  ko: {
    displayName: '한국어',
    home: '홈',
    document: '문서',
    toc: '목차',
    search: '문서 검색',
    lastUpdate: '최종 업데이트 날짜',
    searchNoResult: '검색 결과가 없습니다',
    previousPage: '이전 페이지',
    nextPage: '다음 페이지',
    chooseLanguage: '언어 선택',
  },
  pt: {
    displayName: 'Português',
    home: 'Início',
    document: 'Documentação',
    toc: 'Índice',
    search: 'Pesquisar Documentos',
    lastUpdate: 'Última atualização em',
    searchNoResult: 'Nenhum resultado encontrado',
    previousPage: 'Página Anterior',
    nextPage: 'Próxima Página',
    chooseLanguage: 'Escolher Idioma',
  },
  th: {
    displayName: 'ไทย',
    home: 'หน้าแรก',
    document: 'เอกสาร',
    toc: 'สารบัญ',
    search: 'ค้นหาเอกสาร',
    lastUpdate: 'อัปเดตล่าสุดเมื่อ',
    searchNoResult: 'ไม่พบผลลัพธ์',
    previousPage: 'หน้าก่อนหน้า',
    nextPage: 'หน้าถัดไป',
    chooseLanguage: 'เลือกภาษา',
  },
  vi: {
    displayName: 'Tiếng Việt',
    home: 'Trang Chủ',
    document: 'Tài liệu',
    toc: 'Mục lục',
    search: 'Tìm kiếm Tài liệu',
    lastUpdate: 'Cập nhật lần cuối vào',
    searchNoResult: 'Không tìm thấy kết quả',
    previousPage: 'Trang Trước',
    nextPage: 'Trang Tiếp',
    chooseLanguage: 'Chọn Ngôn ngữ',
  },
  yue: {
    displayName: '中文 (粵語)', 
    home: '主頁',
    document: '文檔',
    toc: '目錄',
    search: '搜尋文檔',
    lastUpdate: '最後更新於',
    searchNoResult: '沒有結果',
    previousPage: '上一頁',
    nextPage: '下一頁',
    chooseLanguage: '選擇語言',
  },
  zh: {
    displayName: '中文 (简体)', 
    home: '主页',
    document: '文档',
    toc: '目录',
    search: '搜寻文档',
    lastUpdate: '最后更新于',
    searchNoResult: '没有结果',
    previousPage: '上一页',
    nextPage: '下一页',
    chooseLanguage: '选择语言',
  },
};

const { provider } = defineI18nUI(i18n, {
  translations,
});

export default async function Layout({ children, params }: LayoutProps<'/[locale]/docs'>) {
  const { locale } = await params

  return (
    <RootProvider
      search={{
        options: {
          api: '/api/docs',
        },
      }}
      i18n={provider(locale)}
    >
      <DocsLayout
        i18n={i18n}
        nav={{
          title: process.env.NEXT_PUBLIC_SITE_NAME || translations[locale]?.home || translations.en.home,
          url: `/${locale}`,
        }}
        githubUrl={
          'https://github.com'
        }
        links={[
          {
            type: 'main',
            text: translations[locale]?.document || translations.en.document,
            url: `/${locale}/docs`,
          },
        ]}
        tree={source.pageTree[locale]} >
        {children}
      </DocsLayout>
    </RootProvider>
  )
}
