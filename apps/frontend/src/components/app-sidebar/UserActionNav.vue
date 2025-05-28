<script setup lang="ts">
import {SidebarGroup,SidebarMenu,SidebarGroupContent, SidebarMenuItem,SidebarMenuButton} from "@/components/ui/sidebar"
import {Settings,LogOut,User2} from "lucide-vue-next"


interface Props {
  handleLogout:()=>void
}
const props = defineProps<Props>()
</script>
<template >
  <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <!-- User Profile Section -->
            <SidebarMenuItem>
              <SidebarMenuButton asChild size="lg">
                <div class="flex items-center gap-2">
                  <div
                    class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10"
                  >
                    <User2 :size="20" class="text-primary" />
                  </div>
                  <div class="flex flex-col">
                    <span class="font-medium">John Doe</span>
                    <span class="text-xs text-muted-foreground"
                      >john@example.com</span
                    >
                  </div>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <!-- User Actions -->
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <router-link to="/settings">
                  <Settings :size="20" />
                  <span>Settings</span>
                </router-link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button
                  @click="props.handleLogout"
                  class="w-full flex items-center gap-2"
                >
                  <LogOut :size="20" />
                  <span>Logout</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
</template>
