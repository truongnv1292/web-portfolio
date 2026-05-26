import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Facebook, Github, Linkedin, Mail, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import avatar from "@/assets/avatar.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Nhà phát triển Web / App" },
      {
        name: "description",
        content:
          "Trang giới thiệu cá nhân: kỹ năng, dự án và liên hệ của một nhà phát triển web tương lai.",
      },
    ],
  }),
  component: Index,
});

const skills = [
  { name: "HTML", desc: "Ngữ nghĩa & truy cập tốt" },
  { name: "CSS", desc: "Tailwind, Flex, Grid" },
  { name: "JavaScript", desc: "ES6+, TypeScript" },
  { name: "React", desc: "Hooks, Router, Query" },
];

function Index() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Gửi thành công!", {
      description: "Cảm ơn bạn, tôi sẽ phản hồi sớm nhất có thể.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Toaster position="top-right" richColors />

      <main className="max-w-6xl mx-auto px-6 pt-28">
        {/* Hero */}
        <section id="home" className="grid md:grid-cols-[auto_1fr] gap-10 items-center py-16">
          <div className="relative mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
            <img
              src={avatar}
              alt="Ảnh đại diện"
              width={224}
              height={224}
              className="relative size-56 rounded-full object-cover ring-4 ring-background shadow-xl"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-primary font-medium mb-3">👋 Welcome cac ban</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Xin chào, tôi là <span className="text-primary">Tên Bạn</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Nhà phát triển Web tương lai — đam mê kiến tạo những giao diện đẹp, nhanh và thân
              thiện với người dùng.
            </p>
            <div className="mt-6 flex gap-3 justify-center md:justify-start">
              <Button asChild>
                <a href="#contact">
                  <Mail className="size-4" /> Liên hệ tôi
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#skills">Xem kỹ năng</a>
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-6">Giới thiệu</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl text-lg">
            Tôi là một lập trình viên trẻ với niềm đam mê dành cho công nghệ web hiện đại. Tôi yêu
            thích việc biến những ý tưởng thành sản phẩm thực tế thông qua mã nguồn sạch và trải
            nghiệm người dùng tinh tế. Mục tiêu của tôi là trở thành một Full-stack Developer, không
            ngừng học hỏi và đóng góp cho cộng đồng.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-8">Kỹ năng</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((s) => (
              <Card
                key={s.name}
                className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 cursor-default"
              >
                <div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center font-bold mb-3">
                  {s.name[0]}
                </div>
                <h3 className="font-semibold">{s.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-8">Liên hệ</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                required
                placeholder="Họ tên"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Textarea
                required
                rows={5}
                placeholder="Lời nhắn..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <Button type="submit" className="w-full">
                <Send className="size-4" /> Gửi
              </Button>
            </form>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-muted-foreground">
                Kết nối với tôi qua các nền tảng mạng xã hội bên dưới.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: "#", label: "Facebook" },
                  { Icon: Github, href: "#", label: "GitHub" },
                  { Icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="size-11 grid place-items-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. Made with ♥ on Lovable.
        </footer>
      </main>
    </div>
  );
}
