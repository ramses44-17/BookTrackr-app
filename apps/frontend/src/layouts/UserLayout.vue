<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar/AppSidebar.vue";
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="w-full">
      <SidebarTrigger class="lg:hidden" />
        <router-view />
    </main>
  </SidebarProvider>
</template>
