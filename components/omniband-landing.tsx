'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TicketIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function OmnibandLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6dd4352bc6f4094e483445dbf2ded9ac-seffbdxme7av13NHYlAHVMyC9y9DQz.png"
            alt="OmniBand Logo"
            width={100}
            height={100}
            className="w-16 h-16"
          />
          <span className="text-2xl font-bold">OmniBand | 牛津热音社</span>
        </div>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About | 关于我们</a>
          <a href="#tickets" className="hover:underline">Tickets | 购票</a>
        </nav>
      </header>

      <main>
        <section className="py-20 text-center bg-gradient-to-b from-gray-900 to-black">
          <h1 className="text-5xl font-bold mb-6">OmniBand | 牛津热音社</h1>
          <p className="text-xl mb-8">Where Passion Meets Music | 激情与音乐的交汇</p>
          <Link href="https://wj.qq.com/r/login.html?s_url=https%3A%2F%2Fwj.qq.com%2Fs2%2F15004374%2F09e4%2F&sid=15004374&hash=09e4&login_type=unite&scene_type=respondent" passHref>
            <Button className="bg-white text-black hover:bg-gray-200">Join Us | 加入我们</Button>
          </Link>
        </section>

        <section id="about" className="py-20 bg-black">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About Us | 关于我们</h2>
              <p className="text-gray-300">
                OmniBand is a non-profit music society founded by Oxford University students. We bring together all music-loving students, providing opportunities to recruit musicians and perform on stage.
              </p>
              <p className="text-gray-300">
                牛津热音社是由牛津大学在校学生创办的非盈利音乐社团。我们聚集所有热爱音乐的同学们，为大家提供一个招募乐手、上台演出的机会。
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd0b7efefff27c629d6bce628cbb88ec-QVh2Gop1bJFFR5RVHJuLKaHNnINSQj.jpeg"
                alt="OmniBand Past Performance"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section id="tickets" className="py-20 bg-gradient-to-t from-gray-900 to-black">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get Your Tickets | 购买门票</h2>
            <div className="max-w-md mx-auto bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-lg">
              <form className="space-y-4">
                <Input type="text" placeholder="Name | 姓名" className="bg-transparent border-white text-white placeholder-gray-400" />
                <Input type="email" placeholder="Email | 电子邮箱" className="bg-transparent border-white text-white placeholder-gray-400" />
                <select className="w-full p-2 bg-transparent border border-white rounded text-white">
                  <option value="">Select Event | 选择活动</option>
                  <option value="event1">Spring Concert | 春季音乐会</option>
                  <option value="event2">Summer Jam | 夏日即兴演出</option>
                </select>
                <Input type="number" placeholder="Number of Tickets | 门票数量" className="bg-transparent border-white text-white placeholder-gray-400" />
                <Button className="w-full bg-white text-black hover:bg-gray-200">
                  <TicketIcon className="w-4 h-4 mr-2" />
                  Purchase Tickets | 购买门票
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-6 text-center text-gray-400">
        <p>&copy; 2024 OmniBand | 牛津热音社. All rights reserved. | 版权所有</p>
      </footer>
    </div>
  )
}