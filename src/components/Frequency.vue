<script setup lang="ts">
import { OnClickedParam } from "../utils/types/OnClickedParam.ts";
import FrequencyDaySet from "./FrequencyDaySet.vue";
import { onMounted } from "vue";
import { styles } from "../utils/styles.ts";
import { months } from "../utils/days.ts";

const props = defineProps<{
  dateParam: string;
  data: any;
  label?: (date: Date, qty: number) => string;
  size?: "sm" | "l" | "xl" | "xs" | "us";
}>();

const days = Array.from({ length: Math.ceil(366 / 7) }, (_, index) =>
  Array.from(
    { length: 7 },
    (_, i) => index * 7 + i + 1 - (index === 0 ? 1 : 0),
  ),
);

const emit = defineEmits<{
  onClicked: [OnClickedParam<(typeof props.data)[0]>];
}>();

const onDayClicked = (params: OnClickedParam<(typeof props.data)[0]>) => {
  emit("onClicked", params);
};
onMounted(() => {
  styles();
});
</script>

<template>
  <section
    style="max-width: fit-content; display: flex; flex-direction: column"
  >
    <header style="display: flex; justify-content: space-between">
      <div v-for="month in months" :key="month" class="frequency-month">
        {{ month }}
      </div>
    </header>
    <div class="frequency-container">
      <div v-for="_days in days" :key="_days[0]" class="day-set-container">
        <FrequencyDaySet
          :days="_days"
          :data="data"
          @onClicked="onDayClicked"
          :size="size"
          :dateParam="dateParam"
          :label="label"
        />
      </div>
    </div>
  </section>
</template>
