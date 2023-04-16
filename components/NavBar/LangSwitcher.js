import { TranslateIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LangSwitcher = () => {
  const { locale, asPath } = useRouter()

  return (
    <>
      <Link passHref href={asPath} locale={locale === 'en' ? 'zh' : 'en'} scroll={false}>
        <button
          aria-label='LangSwitcher'
          className=''
        >
          <TranslateIcon className='' />
        </button>
      </Link>
    </>
  )
}

export default LangSwitcher
