<template>
  <Card
    class="cursor-pointer overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-lg bg-white p-0"
    @click="()=>goToBook(router,book._id)"
  >
    <div class="relative h-48 overflow-hidden">
      <template v-if="book.cover_url">
        <img
          :src="book.cover_url"
          :alt="book.title"
          class="w-full h-full object-cover"
        />
      </template>
      <template v-else>
        <div
          class="w-full h-full bg-indigo-100 flex items-center justify-center"
        >
          <BookOpen :size="48" class="text-indigo-400" />
        </div>
      </template>

      <div
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3"
      >
        <span
          :class="[
            'text-xs font-medium px-2 py-1 rounded-full',
            statusColors[book.status] || 'bg-gray-100 text-gray-800',
          ]"
        >
          {{ statusLabels[book.status] || book.status }}
        </span>
      </div>
    </div>

    <div class="p-4 space-y-2">
      <h3 class="font-semibold text-gray-900 line-clamp-1">{{ book.title }}</h3>
      <p class="text-sm text-gray-600 line-clamp-1">{{ book.author }}</p>

      <div class="pt-2">
        <ProgressBar
          :current="book.totalPageRead"
          :total="book.totalPage"
          :status="book.status"
          size="sm"
          :show-text="true"
        />
      </div>

      <div class="flex items-center justify-between pt-2 text-sm text-gray-500">
        <div class="flex items-center">
          <Clock :size="14" class="mr-1" />
          <span>Added {{ formattedDate }}</span>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Card } from "@/components/ui/card";
import ProgressBar from "@/components/ProgressBar.vue";
import { BookOpen, Clock } from "lucide-vue-next";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { statusColors,statusLabels,goToBook } from ".";

type Book = {
  _id: string;
  title: string;
  author: string;
  cover_url?: string;
  status: string;
  createdAt: string | Date;
  totalPage: number;
  totalPageRead: number;
};

interface Props {
  book: Book;
  class?: string;
}

const props = defineProps<Props>();

const router = useRouter();



const formattedDate = computed(() => {
  const date = new Date(props.book.createdAt);
  return date.toLocaleDateString();
});
</script>

<style scoped>
/* line-clamp utilities for truncating text */
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
