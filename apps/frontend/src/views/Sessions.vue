<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import ViewHeader from "@/components/ViewHeader.vue";
import { ClockPlus,Download} from "lucide-vue-next";
</script>

<template>
  <div class="p-3 max-w-7xl mx-auto">
    <ViewHeader
      title="Reading Sessions"
      description="Track your reading progress over time"
    >
      <div class="flex gap-2 items-center">
        <Button>
          <ClockPlus class="inline" />
          <span>Start New Session</span>
        </Button>
        <Button>
            <Download class="inline" />
            <span>Export</span>
          </Button>
      </div>
    </ViewHeader>
  </div>
</template>
