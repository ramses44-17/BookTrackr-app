<script setup>
import { computed, ref } from 'vue'
import { 
  BookOpen, 
  BookText, 
  Trophy, 
  Clock, 
  Calendar,
  TrendingUp,
  TrendingDown,
  Minus
} from 'lucide-vue-next'

// Sample data - replace with your actual data source
const stats = ref({
  booksReadThisMonth: 5,
  totalPagesRead: 1250,
  readingStreak: 14,
  dailyAverageMinutes: 45,
  booksFinishedThisMonth: 3,
  // Added trend data for comparison with previous period
  trends: {
    booksReadTrend: 2, // positive number means increase
    pagesTrend: 150,
    streakTrend: 0,
    averageTrend: -5,
    finishedTrend: 1
  }
})

// Compute trend indicators
const getTrendIcon = (value) => {
  if (value > 0) return TrendingUp
  if (value < 0) return TrendingDown
  return Minus
}

const getTrendColor = (value) => {
  if (value > 0) return 'text-emerald-500'
  if (value < 0) return 'text-rose-500'
  return 'text-slate-500'
}

// Animation delay for staggered card appearance
const getAnimationDelay = (index) => {
  return `${index * 100}ms`
}
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4">
    <!-- Books Read -->
    <div 
      class="group transition-all duration-300 ease-in-out hover:translate-y-[-5px]"
      :style="{ animationDelay: getAnimationDelay(0) }"
    >
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300">
        <div class="p-6 flex flex-col gap-3">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-xs font-medium text-muted-foreground">Books Read</p>
              <h3 class="text-3xl font-bold mt-1 group-hover:text-primary transition-colors">
                {{ stats.booksReadThisMonth }}
              </h3>
            </div>
            <div class="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
              <BookOpen class="h-5 w-5 text-primary" />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-xs text-muted-foreground">this month</p>
            <div class="flex items-center gap-1" v-if="stats.trends.booksReadTrend !== 0">
              <component 
                :is="getTrendIcon(stats.trends.booksReadTrend)" 
                class="h-3 w-3" 
                :class="getTrendColor(stats.trends.booksReadTrend)" 
              />
              <span class="text-xs" :class="getTrendColor(stats.trends.booksReadTrend)">
                {{ Math.abs(stats.trends.booksReadTrend) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Total Pages Read -->
    <div 
      class="group transition-all duration-300 ease-in-out hover:translate-y-[-5px]"
      :style="{ animationDelay: getAnimationDelay(1) }"
    >
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300">
        <div class="p-6 flex flex-col gap-3">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-xs font-medium text-muted-foreground">Pages Read</p>
              <h3 class="text-3xl font-bold mt-1 group-hover:text-primary transition-colors">
                {{ stats.totalPagesRead }}
              </h3>
            </div>
            <div class="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
              <BookText class="h-5 w-5 text-primary" />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-xs text-muted-foreground">this month</p>
            <div class="flex items-center gap-1" v-if="stats.trends.pagesTrend !== 0">
              <component 
                :is="getTrendIcon(stats.trends.pagesTrend)" 
                class="h-3 w-3" 
                :class="getTrendColor(stats.trends.pagesTrend)" 
              />
              <span class="text-xs" :class="getTrendColor(stats.trends.pagesTrend)">
                {{ Math.abs(stats.trends.pagesTrend) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Reading Streak -->
    <div 
      class="group transition-all duration-300 ease-in-out hover:translate-y-[-5px]"
      :style="{ animationDelay: getAnimationDelay(2) }"
    >
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300">
        <div class="p-6 flex flex-col gap-3">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-xs font-medium text-muted-foreground">Reading Streak</p>
              <h3 class="text-3xl font-bold mt-1 group-hover:text-primary transition-colors">
                {{ stats.readingStreak }}
              </h3>
            </div>
            <div class="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
              <Trophy class="h-5 w-5 text-primary" />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-xs text-muted-foreground">days in a row</p>
            <div class="flex items-center gap-1" v-if="stats.trends.streakTrend !== 0">
              <component 
                :is="getTrendIcon(stats.trends.streakTrend)" 
                class="h-3 w-3" 
                :class="getTrendColor(stats.trends.streakTrend)" 
              />
              <span class="text-xs" :class="getTrendColor(stats.trends.streakTrend)">
                {{ Math.abs(stats.trends.streakTrend) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Daily Average -->
    <div 
      class="group transition-all duration-300 ease-in-out hover:translate-y-[-5px]"
      :style="{ animationDelay: getAnimationDelay(3) }"
    >
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300">
        <div class="p-6 flex flex-col gap-3">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-xs font-medium text-muted-foreground">Daily Average</p>
              <h3 class="text-3xl font-bold mt-1 group-hover:text-primary transition-colors">
                {{ stats.dailyAverageMinutes }}
              </h3>
            </div>
            <div class="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
              <Clock class="h-5 w-5 text-primary" />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-xs text-muted-foreground">minutes/day</p>
            <div class="flex items-center gap-1" v-if="stats.trends.averageTrend !== 0">
              <component 
                :is="getTrendIcon(stats.trends.averageTrend)" 
                class="h-3 w-3" 
                :class="getTrendColor(stats.trends.averageTrend)" 
              />
              <span class="text-xs" :class="getTrendColor(stats.trends.averageTrend)">
                {{ Math.abs(stats.trends.averageTrend) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Books Finished -->
    <div 
      class="group transition-all duration-300 ease-in-out hover:translate-y-[-5px]"
      :style="{ animationDelay: getAnimationDelay(4) }"
    >
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300">
        <div class="p-6 flex flex-col gap-3">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-xs font-medium text-muted-foreground">Books Finished</p>
              <h3 class="text-3xl font-bold mt-1 group-hover:text-primary transition-colors">
                {{ stats.booksFinishedThisMonth }}
              </h3>
            </div>
            <div class="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
              <Calendar class="h-5 w-5 text-primary" />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-xs text-muted-foreground">this month</p>
            <div class="flex items-center gap-1" v-if="stats.trends.finishedTrend !== 0">
              <component 
                :is="getTrendIcon(stats.trends.finishedTrend)" 
                class="h-3 w-3" 
                :class="getTrendColor(stats.trends.finishedTrend)" 
              />
              <span class="text-xs" :class="getTrendColor(stats.trends.finishedTrend)">
                {{ Math.abs(stats.trends.finishedTrend) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid > div {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
