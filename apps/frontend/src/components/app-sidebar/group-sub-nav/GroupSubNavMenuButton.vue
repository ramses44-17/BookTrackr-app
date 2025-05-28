<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { SidebarMenuButton } from "@/components/ui/sidebar";

interface GroupsSubNavMenuButtonProps {
  group: {
    name: string;
    id: string;
  };
  handleMenuButtonClick: () => void;
}

const props = defineProps<GroupsSubNavMenuButtonProps>();
const route = useRoute();

const getGroupInitials = (name: string) => {
  const words = name.trim().split(" ");
  return words.length === 1
    ? words[0][0]
    : words
        .slice(0, 2)
        .map((w) => w[0])
        .join("");
};

const isGroupActive = computed(() => {
  return route.path === `/groups/${props.group.id}`;
});
</script>

<template>
  <router-link
    :to="`/groups/${encodeURIComponent(props.group.id)}`"
    @click="props.handleMenuButtonClick"
    class="flex items-center gap-2 w-full"
  >
    <SidebarMenuButton :isActive="isGroupActive" class="w-full">
      <div
        class="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm uppercase"
      >
        {{ getGroupInitials(props.group.name) }}
      </div>
      <span>{{ props.group.name }}</span>
    </SidebarMenuButton>
  </router-link>
</template>
