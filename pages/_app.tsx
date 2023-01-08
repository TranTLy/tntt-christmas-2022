import type { AppProps } from 'next/app'
import 'antd/dist/reset.css';
import '@src/styles/global.scss';
import '@src/styles/animation.scss';
import Head from 'next/head';

const DESCRIPTION = `Giáng Sinh là dịp của những khoảnh khắc dành cho yêu thương. Yêu thương trong gia đình, yêu thương nơi trường lớp, bạn bè, cùng gửi gắm yêu thương vào những món quà, hay những lúc quây quần hạnh phúc cùng nhau dưới mái nhà yên ấm, hay trong những bữa tiệc vui, buổi họp mặt cuối năm, ...!

Với những tâm tình yêu thương đó, TNTT Giáo xứ Chánh Thiện cùng cộng đoàn đã cùng nhau chia sẻ những cung bậc cảm xúc, cũng như những kỷ niệm/ hoài niệm trong tâm hồn mình, hoặc lời cầu nguyện cho gia đình, bạn bè về Mùa Vọng, Giáng Sinh, và gửi đến hòm thư “Đaminh Savio”.`

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Tâm tình mùa Giáng Sinh 2022</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>

    <Component {...pageProps} />
  </>
}
