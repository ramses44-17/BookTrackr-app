<script setup lang="ts">

import {SidebarGroup,SidebarGroupLabel,SidebarGroupContent,SidebarMenu,SidebarMenuItem,SidebarMenuButton} from "@/components/ui/sidebar"

interface NavMainMenuProps {
  mainNavigationItems:{
    title:string
    icon:unknown
    to:string
    isActive:boolean
  }[]
  handleMenuButtonClick:()=>void
}
const props = defineProps<NavMainMenuProps>()
</script>



<template>
  <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu v-for="item in props.mainNavigationItems" :key="item.to">
            <SidebarMenuItem>
              <router-link :to="item.to" @click="props.handleMenuButtonClick">
                <SidebarMenuButton :isActive="item.isActive">
                  <component :is="item.icon" :size="20" />
                  <span>{{ item.title }}</span>
                </SidebarMenuButton>
              </router-link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
</template>

