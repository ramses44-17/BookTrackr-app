<script setup lang="ts">
import { z } from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define props
const props = defineProps<{
  open: boolean;
  onClose: () => void;
  onAdd: (data: {
    title: string;
    author: string;
    totalPages: number;
    coverUrl?: string;
  }) => void;
}>();

// Define emits
const emit = defineEmits(["update:open"]);

// Define validation schema with Zod
const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  totalPages: z.number().min(1, "Pages must be at least 1"),
  coverUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

// Setup form with vee-validate and zod
const { handleSubmit }  = useForm({
  validationSchema: toTypedSchema(formSchema),
});

// Handle form submission
const onSubmit = handleSubmit((values) => {
  props.onAdd({
    title: values.title,
    author: values.author,
    totalPages: values.totalPages,
    coverUrl: values.coverUrl || undefined,
  });
  props.onClose();
});

// Handle dialog close
const handleClose = () => {
  props.onClose();
  emit("update:open", false);
};
</script>

<template>
  <Dialog :open="open" @update:open="(value) => emit('update:open', value)">
    <DialogContent class="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle class="flex items-center justify-between">
          Add New Book
        </DialogTitle>
      </DialogHeader>

      <form 
        class="space-y-4"
        @submit="onSubmit"
        >
        <FormField v-slot="{ componentField }" name="title">
          <FormItem>
            <FormLabel>Book Title</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" placeholder="Enter book title" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="author">
          <FormItem>
            <FormLabel>Author</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" placeholder="Enter author name" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="totalPages">
          <FormItem>
            <FormLabel>Total Pages</FormLabel>
            <FormControl>
              <Input
                type="number"
                v-bind="componentField"
                placeholder="Enter total pages"
                min="1"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="coverUrl">
          <FormItem>
            <FormLabel>Cover Image URL (optional)</FormLabel>
            <FormControl>
              <Input
                v-bind="componentField"
                placeholder="Enter cover image URL"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <DialogFooter class="mt-6">
          <Button variant="outline" type="button" @click="handleClose"
          >
            Cancel
          </Button>
          <Button type="submit"> Add Book </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
