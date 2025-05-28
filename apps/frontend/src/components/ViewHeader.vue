<template>
  <div :class="cn('flex lg:flex-row lg:items-center lg:justify-between flex-col', attributes?.class)">
    <div class="mb-4 lg:mb-8">
      <h1 class="lg:text-3xl text-2xl font-bold text-primary">
        {{ title }}
      </h1>
      <p class="text-muted-foreground mt-1">
        {{ description }}
      </p>
    </div>
    <div class="self-end">
<slot  />
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

defineProps<{
  attributes?: HTMLAttributes;
  title: string;
  description: string;
}>();
</script>
