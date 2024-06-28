<script setup lang="ts">
import { OnClickedParam } from "../utils/types/OnClickedParam.ts";
import FrequencyDaySet from "./FrequencyDaySet.vue";
import { computed, onMounted } from "vue";
import { styles } from "../utils/styles.ts";
import { getDate, getDayOfYear, months } from "../utils/days.ts";

const props = defineProps<{
  dateParam: string;
  data: any;
  label?: (date: Date, qty: number) => string;
  size?: "sm" | "l" | "xl" | "xs" | "us";
}>();

const getContributions = computed(() => {
  return (day: number) => {
    return props.data.filter(
      (d: any) => getDayOfYear(new Date(d[props.dateParam])) === day,
    ).length;
  };
});
const getDateFromDayOfYear = computed(() => {
  return (dayOfYear: number, noLocale?: boolean): Date | string =>
    getDate(dayOfYear, noLocale);
});

const days = Array.from({ length: Math.ceil(366 / 7) }, (_, index) =>
  Array.from({ length: 7 }, (_, i) => {
    const day = index * 7 + i + 1 - (index === 0 ? 1 : 0);
    return {
      day: day,
      contributions: getContributions.value(day),
      date: getDateFromDayOfYear.value(day, true),
    };
  }),
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
      <div
        v-for="(_days, index) in days"
        :key="index"
        class="day-set-container"
      >
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
