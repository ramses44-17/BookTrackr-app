<script setup lang="ts">
import { onMounted, ref } from "vue";
import { BookPlus, Filter, Grid, List } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import ViewHeader from "@/components/ViewHeader.vue";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookCardForGridView from "@/components/book-card/BookCardForGridView.vue";
import BookCardForListView from "@/components/book-card/BookCardForListView.vue";
import AddBookModal from "@/components/AddBookModal.vue";

const filter = ref("all");
const viewMode = ref("grid");

function setFilter(value: string) {
  filter.value = value;
}

const mockBooks = [
  {
    _id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    cover_url:
      "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX329_BO1,204,203,200_.jpg",
    status: "reading",
    createdAt: "2025-05-01T10:00:00Z",
    totalPage: 320,
    totalPageRead: 120,
  },
  {
    _id: "2",
    title: "Deep Work",
    author: "Cal Newport",
    cover_url:
      "https://images-na.ssl-images-amazon.com/images/I/41vqu9GGHkL._SX331_BO1,204,203,200_.jpg",
    status: "finished",
    createdAt: "2025-04-15T14:30:00Z",
    totalPage: 250,
    totalPageRead: 250,
  },
  {
    _id: "3",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    cover_url: "",
    status: "reading",
    createdAt: "2025-03-22T09:20:00Z",
    totalPage: 300,
    totalPageRead: 150,
  },
  {
    _id: "4",
    title: "Clean Code",
    author: "Robert C. Martin",
    cover_url:
      "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
    status: "reading",
    createdAt: "2025-04-30T12:00:00Z",
    totalPage: 464,
    totalPageRead: 200,
  },
  {
    _id: "5",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover_url:
      "https://images-na.ssl-images-amazon.com/images/I/41wgCU3g8FL._SX327_BO1,204,203,200_.jpg",
    status: "finished",
    createdAt: "2025-02-18T16:45:00Z",
    totalPage: 499,
    totalPageRead: 499,
  },
  {
    _id: "6",
    title: "The Lean Startup",
    author: "Eric Ries",
    cover_url: "",
    status: "reading",
    createdAt: "2025-05-10T11:10:00Z",
    totalPage: 336,
    totalPageRead: 120,
  },
  {
    _id: "7",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    cover_url: "",
    status: "reading",
    createdAt: "2025-05-12T09:00:00Z",
    totalPage: 498,
    totalPageRead: 320,
  },
  {
    _id: "8",
    title: "The Power of Habit",
    author: "Charles Duhigg",
    cover_url: "",
    status: "finished",
    createdAt: "2025-01-30T14:00:00Z",
    totalPage: 371,
    totalPageRead: 371,
  },
  {
    _id: "9",
    title: "Hooked: How to Build Habit-Forming Products",
    author: "Nir Eyal",
    cover_url:
      "https://images-na.ssl-images-amazon.com/images/I/41bS67y8GML._SX331_BO1,204,203,200_.jpg",
    status: "reading",
    createdAt: "2025-05-08T10:30:00Z",
    totalPage: 256,
    totalPageRead: 100,
  },
  {
    _id: "10",
    title: "Meditations",
    author: "Marcus Aurelius",
    cover_url:
      "https://images-na.ssl-images-amazon.com/images/I/41ly7jUErTL._SX327_BO1,204,203,200_.jpg",
    status: "reading",
    createdAt: "2025-03-05T13:20:00Z",
    totalPage: 254,
    totalPageRead: 80,
  },
  {
    _id: "11",
    title: "New Book to Read",
    author: "Jane Doe",
    cover_url: "",
    status: "toRead",
    createdAt: "2025-05-18T08:00:00Z",
    totalPage: 200,
    totalPageRead: 0,
  },
];
const isModalOpen = ref(false);

const handleAddBook = (bookData: {
  title: string;
  author: string;
  totalPages: number;
  coverUrl?: string;
}) => {
    console.log("Book added:", bookData);
  // Implement your logic to add the book
};
</script>

<template>
  <div class="p-3 max-w-7xl mx-auto">
    <ViewHeader
      title="My Books"
      description="Manage your reading list and track your progress"
    >
      <div class="flex gap-2 items-center">
        <Tabs v-model="viewMode" class="shrink-0">
          <TabsList>
            <TabsTrigger value="grid">
              <Grid />
            </TabsTrigger>
            <TabsTrigger value="list">
              <List />
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Select v-model="filter" class="shrink-0">
          <SelectTrigger>
            <Filter />
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Books</SelectItem>
            <SelectItem value="toRead">To Read</SelectItem>
            <SelectItem value="reading">Reading</SelectItem>
            <SelectItem value="finished">Finished</SelectItem>
          </SelectContent>
        </Select>
        <Button @click="isModalOpen = true">
          <BookPlus class="inline" />
          <span>Add new book</span>
        </Button>
      </div>
    </ViewHeader>

    <div
      v-if="viewMode === 'grid'"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
    >
      <BookCardForGridView
        v-for="book in mockBooks"
        :key="book._id"
        :book="book"
        class="cursor-pointer"
      />
    </div>
    <div v-else class="mt-6 space-y-4">
      <BookCardForListView
        v-for="book in mockBooks"
        :key="book._id"
        :book="book"
        class="cursor-pointer"
      />
    </div>
    <AddBookModal
      v-model:open="isModalOpen"
      :onClose="() => (isModalOpen = false)"
      :onAdd="handleAddBook"
      aria-describedby="Add Book"
    />
  </div>
</template>
