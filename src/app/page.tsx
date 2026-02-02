import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Car } from 'lucide-react';
import Link from 'next/link';
import Counter from './components/counter' // นำเข้าเพื่อใช้ตัวนับ


export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            ยินดีต้อนรับสู่ My Next.js 16
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            สร้าง web แอปพลิเคชันด้วย Next.js, TypeScript, Tailwind CSS และ shadcn/ui
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/products">ดูสินค้า</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">เกี่ยวกับเรา</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>⚡รวดเร็วทันใจ</CardTitle>
              <CardDescription>
                ประสิทธิภาพสูงด้วย Server Components และ Cache Component
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Next.js 16 มาพร้อมกับฟีเจอร์ใหม่ที่ช่วยเพิ่มประสิทธิภาพให้เว็บแอปพลิเคชันของคุณโหลดได้รวดเร็วขึ้นและตอบสนองได้ดีขึ้น
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 สวยงาม</CardTitle>
              <CardDescription>
                ออกแบบด้วย Tailwind CSS และ shadcn/ui
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                สร้าง UI ที่สวยงามและ responsive ได้อย่างรวดเร็วด้วย utility-first CSS
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🔧 ปรับแต่งได้</CardTitle>
              <CardDescription>
                เป็นเจ้าของโค้ด components ของคุณเอง
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                shadcn/ui ให้คุณ copy โค้ดมาใช้ ทำให้ปรับแต่งได้ตามต้องการอย่างเต็มที่
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </main>
  )
}
