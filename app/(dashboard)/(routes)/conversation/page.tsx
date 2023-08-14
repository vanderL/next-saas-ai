"use client"

import axios from 'axios'
import z from 'zod'
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { ChatBubbleIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation';
import { ChatCompletionRequestMessage } from 'openai';

import { Heading } from "@/components/heading";
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { formSchema } from './constants';
import Empty from '@/components/empty';

type formSchemaInput = z.infer<typeof formSchema>

export default function ConversationPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  const form = useForm<formSchemaInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async(values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt
      }

      const newMessages = [...messages, userMessage]

      const response = await axios.post("/api/conversation", {
        messages: newMessages
      })

      setMessages((current) => [...current, userMessage, response.data])

      form.reset()
    } catch (error: any) {
      //ToDo: Open Pro Modal
      console.log(error);
      
    } finally {
      router.refresh()
    }
  }

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced Conversation"
        icon={ChatBubbleIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/25"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded border-2 border-gray-300 w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField 
                name='prompt'
                render={({field}) => (
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl className="m-0 p-0">
                      <Input 
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                Generate
              </Button>

            </form>
          </Form>
        </div>

        <div className="space-y-4 mt-4">
          {messages.length === 0 && !isLoading && (
            <div>
              <Empty />
            </div>
          )} 
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div key={message.content}>
                {message.content}
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>

  )
}