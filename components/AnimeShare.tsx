"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/ui/marquee";
import { ExternalLink } from "lucide-react";

const ANIME_LIST = [
  {
    title: "GOSICK",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/9d/3d/9781_Kkik8.jpg?_gl=1*1nlfd5y*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzM0OTEkajM3JGwwJGgw",
    link: "https://bangumi.tv/subject/9781",
  },
  {
    title: "凉宫春日的忧郁",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/21/8a/485_Et062.jpg?_gl=1*16orthj*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzM1ODUkajMxJGwwJGgw",
    link: "https://bangumi.tv/subject/485",
  },
  {
    title: "86-不存在的战区",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/a4/b3/302189_1034v.jpg",
    link: "https://bangumi.tv/subject/302189",
  },
  {
    title: "超时空辉夜姬!",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/f6/0f/604826_2XWRN.jpg?_gl=1*detlx9*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzM2OTYkajUyJGwwJGgw",
    link: "https://bangumi.tv/subject/604826",
  },
  {
    title: "空之境界",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/68/66/75533_k9VAC.jpg?_gl=1*i7da45*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzM3OTIkajQ4JGwwJGgw",
    link: "https://bangumi.tv/subject/75533",
  },
  {
    title: "来自风平浪静的明天",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/16/29/47889_gZy58.jpg?_gl=1*p1j1dc*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzM4NjYkajU3JGwwJGgw",
    link: "http://bangumi.tv/subject/47889",
  },
  {
    title: "夏日幽灵",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/7a/60/328674_5EIi5.jpg?_gl=1*q7t4x0*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzM5MjQkajYwJGwwJGgw",
    link: "https://bangumi.tv/subject/328674",
  },
  {
    title: "我的青春恋爱物语果然有问题",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/1e/f1/54433_JZ99l.jpg?_gl=1*2wyrq9*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzM5ODQkajYwJGwwJGgw",
    link: "https://bangumi.tv/subject/54433",
  },
  {
    title: "fate/zero",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/86/1f/10639_w4sHs.jpg?_gl=1*1f48r39*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzQwNTIkajYwJGwwJGgw",
    link: "https://bangumi.tv/subject/10639",
  },
  {
    title: "Fate/stay night[Heaven's feel]",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/34/9f/109375_o2NnF.jpg?_gl=1*1ty7cnx*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzQyMDgkajM4JGwwJGgw",
    link: "https://bangumi.tv/subject/109375",
  },
  {
    title: "罪恶王冠",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/7d/4c/18635_71IIr.jpg?_gl=1*1a6us79*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzQyODYkajUyJGwwJGgw",
    link: "https://bangumi.tv/subject/18635",
  },
  {
    title: "AIR",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/28/9d/234_hIMht.jpg?_gl=1*1igrkm3*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzQzNTAkajU5JGwwJGgw",
    link: "https://bangumi.tv/subject/234",
  },
  {
    title: "新世纪福音战士",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/e5/69/265_Z5Uou.jpg",
    link: "https://bangumi.tv/subject/265",
  },
  {
    title: "命运石之门",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/a9/79/10380_YwP4R.jpg?_gl=1*12ptom4*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzQ0OTckajUxJGwwJGgw",
    link: "https://bangumi.tv/subject/10380",
  },
  {
    title: "辉夜大小姐想让我告白",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/2a/f7/248175_2w4zT.jpg?_gl=1*1s0sxo5*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzQ1NjQkajU5JGwwJGgw",
    link: "https://bangumi.tv/subject/248175",
  },
  {
    title: "Charlotte",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/9b/d6/120925_Zp040.jpg?_gl=1*jmywf1*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzQ2MDckajE2JGwwJGgw",
    link: "https://bangumi.tv/subject/120925",
  },
  {
    title: "魔法少女小圆",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/cb/57/9717_sAVag.jpg?_gl=1*1kqwdow*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzQ2NDYkajUxJGwwJGgw",
    link: "https://bangumi.tv/subject/9717",
  },
  {
    title: "天使的心跳!",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/ff/14/1851_ZFEg7.jpg?_gl=1*1g1ce1x*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzQ2OTMkajQkbDAkaDA.",
    link: "https://bangumi.tv/subject/1851",
  },
  {
    title: "樱花庄的宠物女孩",
    imageUrl: "https://lain.bgm.tv/pic/cover/l/01/a2/41488_qw09G.jpg?_gl=1*1arwx9i*_ga*MTgxMjI0NzEyNi4xNzY5NjgyODc5*_ga_1109JLGMHN*czE3Njk3NzM0NjgkbzMkZzEkdDE3Njk3NzQ3NjAkajU0JGwwJGgw",
    link: "https://bangumi.tv/subject/41488",
  }
];

const AnimeCard = ({
  imageUrl,
  title,
  link,
}: {
  imageUrl: string;
  title: string;
  link: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-48 h-64 overflow-hidden rounded-xl border border-glass-border bg-glass-bg hover:scale-105 transition-transform duration-300 group"
    >
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h3 className="text-lg font-bold text-white mb-1 truncate">{title}</h3>
        <div className="flex items-center text-xs text-gray-300 group-hover:text-accent-primary transition-colors">
          <span>查看详情</span>
          <ExternalLink size={12} className="ml-1" />
        </div>
      </div>
    </a>
  );
};

export default function AnimeShare() {
  return (
    <section id="anime" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            动漫分享
          </h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full" />
          <p className="mt-4 text-foreground/70">
            "感谢ACG一直以来给我的感动"
          </p>
        </motion.div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {ANIME_LIST.map((anime) => (
            <AnimeCard key={anime.title} {...anime} />
          ))}
        </Marquee>
        
        {/* Progressive Blur Effect - Left */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 z-10">
          <div className="absolute inset-0 backdrop-blur-[1px] [mask-image:linear-gradient(to_right,black,transparent)]" />
          <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_right,black_10%,transparent)]" />
          <div className="absolute inset-0 backdrop-blur-[4px] [mask-image:linear-gradient(to_right,black_20%,transparent)]" />
        </div>

        {/* Progressive Blur Effect - Right */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 z-10">
          <div className="absolute inset-0 backdrop-blur-[1px] [mask-image:linear-gradient(to_left,black,transparent)]" />
          <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_left,black_10%,transparent)]" />
          <div className="absolute inset-0 backdrop-blur-[4px] [mask-image:linear-gradient(to_left,black_20%,transparent)]" />
        </div>
      </div>
    </section>
  );
}
