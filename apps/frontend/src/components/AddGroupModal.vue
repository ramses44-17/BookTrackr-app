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
    name: string;
    description?: string;
  }) => void;
}>();

// Define emits
const emit = defineEmits(["update:open"]);

// Define validation schema with Zod
const formSchema = z.object({
  name: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Author is required").optional(),
});

// Setup form with vee-validate and zod
const { handleSubmit }  = useForm({
  validationSchema: toTypedSchema(formSchema),
});

// Handle form submission
const onSubmit = handleSubmit((values) => {
  props.onAdd({
    name: values.name,
    description: values.description
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
          Create new Group
        </DialogTitle>
      </DialogHeader>

      <form 
        class="space-y-4"
        @submit="onSubmit"
        >
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Group name</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" placeholder="Enter group name" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="description">
          <FormItem>
            <FormLabel>Description(optional)</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" placeholder="Enter group description" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <DialogFooter class="mt-6">
          <Button variant="outline" type="button" @click="handleClose"
          >
            Cancel
          </Button>
          <Button type="submit"> Add Group </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
