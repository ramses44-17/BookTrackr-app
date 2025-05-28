<script setup lang="ts">
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { BookOpen, Home, Book, Timer, Search } from "lucide-vue-next";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "../ui/button";

import NavMain from "./NavMain.vue";
import GroupSubNav from "./group-sub-nav/GroupSubNav.vue"
import UserActionNav from "./UserActionNav.vue";
import AddGroupModal from "../AddGroupModal.vue";

const { openMobile, setOpenMobile, isMobile } = useSidebar();

// Logout function
const handleLogout = () => {
  onMounted(() => {
    // console.log("logging out");
  });
};
const route = useRoute();

const navigationGroupsItems = computed(() => [
  {
    title: "Home",
    icon: Home,
    to: "/home",
    isActive: route.path === "/home",
  },
  {
    title: "My books",
    icon: Book,
    to: "/books",
    isActive: route.path.startsWith("/books"),
  },
  {
    title: "Sessions",
    icon: Timer,
    to: "/sessions",
    isActive: route.path.startsWith("/sessions"),
  },
]);
const handleMenuButtonClick = () => {
  if (isMobile.value && openMobile.value) {
    setOpenMobile(false);
  }
};
const groups = [
  { id: "a1e7b839-5f3c-48a6-a7f7-1c441cf9f3e0", name: "Book Club A" },
  { id: "d34cf90c-89af-4c19-8463-9dc1f1d1cf87", name: "Reading Friends" },
  { id: "8a59e10f-b4a6-4a87-86e1-8f92f1ac7653", name: "Sci-fi Fans" },
  { id: "5e2c9d11-6e2c-46d3-94f8-91a049d731d7", name: "History Buffs" },
  { id: "ba9f3e00-f2d4-4ec2-9b4a-9e2d2f403e7c", name: "Fantasy Circle" },
  { id: "ba9f3e00-f2d4-4ec2-9b4a-9e2d2q403e7c", name: "x" },
  { id: "ba9f3e00-f2d4-4ec2-9b4a-9e2d2f403s7c", name: "Voltaire" },
];

const isModalOpen = ref(false);

const handleAddBook = (bookData: {
  name: string;
  description?: string;
}) => {
    console.log("Book added:", bookData);
  // Implement your logic to add the book
};
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <router-link to="/home" class="flex items-center gap-2">
              <div
                class="flex items-center justify-center bg-primary/10 p-1.5 rounded-lg"
              >
                <BookOpen class="text-primary" 
                :size="22" 
                />
              </div>
              <div class="flex flex-col">
                <span class="font-bold text-lg leading-tight text-primary"
                  >Book<span class="text-primary/80">trackr</span></span
                >
              </div>
            </router-link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <div class="mt-2">
        <Button
          variant="outline"
          class="w-full flex items-center justify-between h-9 text-muted-foreground bg-sidebar-accent/50 hover:bg-sidebar-accent p-2 rounded-md cursor-pointer"
        >
          <div class="flex items-center">
            <Search class="mr-2 h-4 w-4" />
            <span>Search books, groups...</span>
          </div>
          <kbd
            class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
          >
            <span class="text-xs">⌘</span>K
          </kbd>
        </Button>
      </div>
    </SidebarHeader>

    <SidebarContent>
      <!-- Main Navigation -->
      <NavMain
        :mainNavigationItems="navigationGroupsItems"
        :handleMenuButtonClick="handleMenuButtonClick"
      />
      <GroupSubNav

      :onOpenModal="()=>isModalOpen = true"
        :groups="groups"
        :handleMenuButtonClick="handleMenuButtonClick"
      />
    </SidebarContent>

    <SidebarFooter>
      <UserActionNav :handleLogout="handleLogout" />
    </SidebarFooter>
  </Sidebar>
  <AddGroupModal
      v-model:open="isModalOpen"
      :onClose="() => (isModalOpen = false)"
      :onAdd="handleAddBook"
      aria-describedby="Add Book"
    />
</template>
