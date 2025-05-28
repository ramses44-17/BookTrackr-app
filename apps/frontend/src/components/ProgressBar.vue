<template>
  <div :class="['w-full', className]">
    <div class="bg-gray-100 rounded-full overflow-hidden">
      <div
        :class="[statusColors[status], sizeStyles[size]]"
        :style="{ width: percentage + '%' }"
      />
    </div>

    <div
      v-if="showText"
      class="mt-1 flex justify-between text-xs text-gray-500"
    >
      <span>{{ current }} pages</span>
      <span>{{ percentage }}%</span>
      <span>{{ total }} pages</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue"

interface ProgressBarProps {
  current: number
  total: number
  status: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const props = defineProps<ProgressBarProps>()

const status = props.status ?? 'reading'
const showText = props.showText ?? true
const size = props.size ?? 'md'
const className = props.className ?? ''

const percentage = computed(() => {
  if (props.total === 0) return 0
  return Math.round((props.current / props.total) * 100)
})

const statusColors: Record<string, string> = {
  toRead: 'bg-gray-200',
  reading: 'bg-teal-500',
  finished: 'bg-indigo-600',
}

const sizeStyles: Record<string, string> = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
}
</script>
