<script setup lang="ts">
import { Share, Download } from "lucide-vue-next";
import RecentActivity from "@/components/RecentActivity.vue";
import ViewHeader from "@/components/ViewHeader.vue";
import Button from "@/components/ui/button/Button.vue";
import ReadingStats from "@/components/ReadingStats.vue";
const recentActivity = [
  {
    _id: "66471aa2b1f9a13e23d01a01",
    userId: "663f94dcfd9386a2adbe0001",
    type: "book_added",
    createdAt: "2025-05-17T09:20:00.000Z",
    payload: {
      bookId: "663fa8ed0eac8d02e8aa0001",
      bookTitle: "Atomic Habits",
    },
  },
  {
    _id: "66471aa2b1f9a13e23d01a02",
    userId: "663f94dcfd9386a2adbe0001",
    type: "session_started",
    createdAt: "2025-05-17T10:05:00.000Z",
    payload: {
      sessionId: "66471b5a2f91a12b2cbe0001",
      bookId: "663fa8ed0eac8d02e8aa0001",
      bookTitle: "Atomic Habits",
    },
  },
  {
    _id: "66471aa2b1f9a13e23d01a03",
    userId: "663f94dcfd9386a2adbe0001",
    type: "session_paused",
    createdAt: "2025-05-17T10:45:00.000Z",
    payload: {
      sessionId: "66471b5a2f91a12b2cbe0001",
      bookId: "663fa8ed0eac8d02e8aa0001",
      bookTitle: "Atomic Habits",
    },
  },
  {
    _id: "66471aa2b1f9a13e23d01a04",
    userId: "663f94dcfd9386a2adbe0001",
    type: "book_started",
    createdAt: "2025-05-15T16:00:00.000Z",
    payload: {
      bookId: "663fa99e0eac8d02e8aa0002",
      bookTitle: "Deep Work",
    },
  },
  {
    _id: "66471aa2b1f9a13e23d01a05",
    userId: "663f94dcfd9386a2adbe0001",
    type: "book_finished",
    createdAt: "2025-05-16T21:30:00.000Z",
    payload: {
      bookId: "663fa99e0eac8d02e8aa0002",
      bookTitle: "Deep Work",
    },
  },
  {
    _id: "66471aa2b1f9a13e23d01a06",
    userId: "663f94dcfd9386a2adbe0001",
    type: "session_finished",
    createdAt: "2025-05-17T11:00:00.000Z",
    payload: {
      sessionId: "66471b5a2f91a12b2cbe0001",
      bookId: "663fa8ed0eac8d02e8aa0001",
      bookTitle: "Atomic Habits",
    },
  },
];

</script>

<template>
  <div class="p-3 max-w-7xl mx-auto">
    <ViewHeader
      title="Home"
      description="Track your progress and continue your reading journey"
    >
      <div class="flex gap-2 items-center">
        <Button>
          <Download class="inline" />
          <span>Import</span>
        </Button>
        <Button>
          <Share class="inline" />
          <span>Share</span>
        </Button>
      </div>
    </ViewHeader>

    <ReadingStats />

    <!-- Recent Activity Section -->
    <div class="mt-8">
      <h2 class="text-xl font-semibold mb-4">Recent Activity</h2>
      <div class="bg-card rounded-lg border shadow-sm divide-y">
        <div v-for="activity in recentActivity" :key="activity._id">
          <RecentActivity :activity="activity" />
        </div>
      </div>
    </div>
  </div>
</template>
