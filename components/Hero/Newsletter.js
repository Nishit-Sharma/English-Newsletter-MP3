import BLOG from '@/blog.config'
import Link from 'next/link'
import Social from '../Common/Social.js'
import { useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { NewspaperIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import dynamic from 'next/dynamic'
import { NotionRenderer } from 'react-notion-x'

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection), { ssr: true }
)

const NewsletterHero = ({ blockMap }) => {
  const [showCopied, setShowCopied] = useState(false)
  const { locale } = useRouter()
  const t = lang[locale]

  const clickCopy = async () => {
    setShowCopied(true)
    navigator.clipboard.writeText(BLOG.link + '/feed')
    setTimeout(() => {
      setShowCopied(false)
    }, 1000)
  }

  return (
    <>
      <div className='container mx-auto flex px-5 py-2 mb-10 md:flex-row flex-col items-center'>
        <div className='flex flex-col md:w-4/5 md:items-start mb-6 md:mb-0 md:text-left'>
          <NotionRenderer
            className='md:ml-0'
            recordMap={blockMap}
            components={{ Collection }}
          />
          <Social />
          {/*
          <h2 className=''>
            {t.HERO.NEWSLETTER.SUBSCRIPTION_HEAD}
          </h2>
          */}
          <div className=''>
            <Link passHref href={BLOG.telegramChannelUrl} scroll={false}>
              <button className=''>
                {/*
                <svg
                  xmlns=''
                  fill=''
                  className=''
                  viewBox=''
                >
                  <path fill='' d='' />
                  <path d='' />
                </svg>
                <span className=''>
                  <span className=''>
                    {t.HERO.NEWSLETTER.TG_CHANNEL}
                  </span>
                  <span className=''>@{BLOG.telegramChannelName}</span>
                </span>
                */}
              </button>
            </Link>
            {showCopied ? (
              <button
                disabled
                className=''
              >
                <ClipboardCheckIcon className='' />
                <span className=''>
                  <span className=''>
                    {t.HERO.RSS_BUTTON_DES_COPIED}
                  </span>
                  <span className=''>{t.HERO.RSS_BUTTON_COPIED}</span>
                </span>
              </button>
            ) : (
              <button
                onClick={() => clickCopy()}
                className=''
              >
                {/*
                <svg
                  xmlns=''
                  fill=''
                  className=''
                  viewBox=''
                >
                  <path fill='' d='' />
                  <path d='' />
                </svg>
                <span className='ml-4 flex items-start flex-col leading-none'>
                  <span className='text-xs text-gray-600 dark:text-day mb-1'>
                    {t.HERO.RSS_BUTTON_DES}
                  </span>
                  <span className='font-medium'>{t.HERO.NEWSLETTER.RSS_BUTTON}</span>
                </span>
                */}
              </button>
            )}
          </div>
        </div>
        <div className='w-2/5'>
          <NewspaperIcon className='object-cover object-center text-gray-500 dark:text-gray-300' />
        </div>
      </div>
    </>
  )
}

export default NewsletterHero
