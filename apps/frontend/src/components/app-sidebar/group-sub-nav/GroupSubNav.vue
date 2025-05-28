<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuAction,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, MoreHorizontal, Trash, Edit } from "lucide-vue-next";
import GroupSubNavMenuButton from "./GroupSubNavMenuButton.vue";
interface GroupsSubNavProps {
  groups: {
    name: string;
    id: string;
  }[];
  handleMenuButtonClick: () => void;
  onOpenModal: () => void;
}
const props = defineProps<GroupsSubNavProps>();
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>Groups</SidebarGroupLabel>
    <SidebarGroupAction title="Add Group" @click="onOpenModal">
      <Plus /> <span class="sr-only">Add Group</span>
    </SidebarGroupAction>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem
          v-for="group in props.groups.slice(0, 4)"
          :key="group.id"
        >
          <GroupSubNavMenuButton
            :group="group"
            :handleMenuButtonClick="props.handleMenuButtonClick"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuAction>
                <MoreHorizontal />
              </SidebarMenuAction>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start">
              <DropdownMenuItem>
                <Edit /><span>Edit Groups</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="hover:bg-destructive">
                <Trash /><span>Delete Groups</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
        <SidebarMenuItem v-if="props.groups.length > 5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton class="px-4">
                <MoreHorizontal :size="22" />
                <span>More</span>
              </SidebarMenuButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent side="right" align="start">
              <!-- Rest of groups -->
              <DropdownMenuItem
                v-for="group in props.groups.slice(4)"
                :key="group.id"
                class="p-0"
              >
                <GroupSubNavMenuButton
                  :group="group"
                  :handleMenuButtonClick="props.handleMenuButtonClick"
                />
              </DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>
