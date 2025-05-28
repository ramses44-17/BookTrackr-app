<script setup lang="ts">
type Activity = {
  _id: string;
  type: string;
  createdAt: string;
  payload: {
    bookId?: string;
    bookTitle?: string;
    sessionId?: string;
  };
};

const props = defineProps<{
  activity: Activity;
}>();

const activityStyles: Record<string, string> = {
  book_added: "bg-primary",
  book_started: "bg-blue-500",
  book_finished: "bg-green-600",
  session_started: "bg-primary",
  session_paused: "bg-yellow-500",
  session_finished: "bg-green-500",
};

function formatTimeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
}
</script>

<template>
  <div class="p-4 flex items-center gap-3">
    <!-- Status Dot -->
    <div
      class="w-2 h-2 rounded-full"
      :class="activityStyles[props.activity.type] || 'bg-muted'"
    />

    <!-- Description -->
    <span class="text-sm">
      <template v-if="props.activity.type === 'book_added'">
        You added
        <router-link
          :to="`/books/${props.activity.payload.bookId}`"
          class="font-medium hover:underline"
        >
          {{ props.activity.payload.bookTitle }}
        </router-link>
        to your library
      </template>

      <template v-else-if="props.activity.type === 'book_started'">
        You started reading
        <router-link
          :to="`/books/${props.activity.payload.bookId}`"
          class="font-medium hover:underline"
        >
          {{ props.activity.payload.bookTitle }}
        </router-link>
      </template>

      <template v-else-if="props.activity.type === 'book_finished'">
        You finished reading
        <router-link
          :to="`/books/${props.activity.payload.bookId}`"
          class="font-medium hover:underline"
        >
          {{ props.activity.payload.bookTitle }}
        </router-link>
      </template>

      <template v-else-if="props.activity.type === 'session_started'">
        You started a
        <router-link
          :to="`/sessions/${props.activity.payload.sessionId}`"
          class="font-medium hover:underline">
          session
        </router-link>
        for
        <router-link
          :to="`/books/${props.activity.payload.bookId}`"
          class="font-medium hover:underline"
        >
          {{ props.activity.payload.bookTitle }}
        </router-link>
      </template>

      <template v-else-if="props.activity.type === 'session_paused'">
        You paused your
        <router-link
          :to="`/sessions/${props.activity.payload.sessionId}`"
          class="font-medium hover:underline">
          session
        </router-link>
        on
        <router-link
          :to="`/books/${props.activity.payload.bookId}`"
          class="font-medium hover:underline"
        >
          {{ props.activity.payload.bookTitle }}
        </router-link>
      </template>

      <template v-else-if="props.activity.type === 'session_finished'">
        You finished a
        <router-link
          :to="`/sessions/${props.activity.payload.sessionId}`"
          class="font-medium hover:underline"
          >session</router-link>
        for
        <router-link
          :to="`/books/${props.activity.payload.bookId}`"
          class="font-medium hover:underline"
        >
          {{ props.activity.payload.bookTitle }}
        </router-link>
      </template>
    </span>

    <!-- Time Ago -->
    <span class="text-xs text-muted-foreground ml-auto">
      {{ formatTimeAgo(props.activity.createdAt) }}
    </span>
  </div>
</template>
