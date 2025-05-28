<script setup lang="ts">
import { Book  } from 'lucide-vue-next'
import { Card, CardContent } from '@/components/ui/card'
import  ProgressBar  from '@/components/ProgressBar.vue'
import { useRouter } from 'vue-router'
import { statusColors,statusLabels,goToBook } from '.'
import {BookIcon} from "lucide-vue-next"

type Book = {
  _id: string
  title: string
  author: string
  cover_url?: string
 status: string
  createdAt: string | Date
  totalPage: number
  totalPageRead: number
}

interface Props {
  book: Book
  class?: string
}

defineProps<Props>()

const router = useRouter()



</script>

<template>
  <Card 
    class="flex items-center p-4 hover:shadow-md transition-shadow cursor-pointer"
     @click="()=>goToBook(router,book._id)"
  >
    <CardContent class="p-0 flex items-center w-full">
      <div class="w-16 h-24 flex-shrink-0 mr-4 overflow-hidden rounded">
        <img 
          v-if="book.cover_url" 
          :src="book.cover_url" 
          :alt="book.title"
          class="w-full h-full object-cover"
        />
        <div v-else class="w-full h-full bg-indigo-100 flex items-center justify-center">
          <BookIcon :size="24" class="text-indigo-400" />
        </div>
      </div>
      
      <div class="flex-1 min-w-0">
        <h3 class="font-semibold text-gray-900 truncate">{{ book.title }}</h3>
        <p class="text-sm text-gray-600">{{ book.author }}</p>
        <div class="mt-2 w-full max-w-xs">
          <ProgressBar 
            :current="book.totalPageRead" 
            :total="book.totalPage"
            :status="book.status"
            size="sm"
            :show-text="false"
          />
        </div>
      </div>
      
      <div class="ml-4 flex-shrink-0 flex items-center">
        <span :class="['text-xs font-medium px-2 py-1 rounded-full', statusColors[book.status] || 'bg-gray-100 text-gray-800']">
           {{ statusLabels[book.status] || book.status }}
        </span>
        <span class="ml-4 text-sm text-gray-500">{{ book.totalPageRead }}/{{ book.totalPage }}</span>
      </div>
    </CardContent>
  </Card>
</template>
