"use client"
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { MixIcon, ChatBubbleIcon, ImageIcon, VideoIcon, SpeakerLoudIcon, CodeIcon, GearIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'

const tools = [
  {
    label: "Conversation",
    icon: ChatBubbleIcon,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
    bgColor: "bg-orange-700/10"
  },
  {
    label: "Music Generate",
    icon: SpeakerLoudIcon,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10"
  },
  {
    label: "Code Generate",
    icon: CodeIcon,
    href: "/code",
    color: "text-green-700",
    bgColor: "bg-green-700/10"
  },
]

export default function DashboardPage() {
  const router = useRouter()

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explorando o poder das IA
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Converse com a IA mais inteligente - Experimente o poder da IA
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
          onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-4 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)}/>
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRightIcon className="w-5 h-5"/>
          </Card>
        ))}
      </div>
    </div>
  )
}
