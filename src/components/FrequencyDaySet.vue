<script setup lang="ts">
import { computed } from "vue";
import { OnClickedParam } from "../utils/types/OnClickedParam.ts";
import { getDate, getDayOfYear } from "../utils/days.ts";

const props = defineProps<{
  size?: "sm" | "l" | "xl" | "xs" | "us";
  label?: (date: Date, qty: number) => string;
  data: any;
  days: Array<number>;
  dateParam: string;
}>();

const getDateFromDayOfYear = computed(() => {
  return (dayOfYear: number, noLocale?: boolean): Date | string =>
    getDate(dayOfYear, noLocale);
});
const emit = defineEmits<{
  onClicked: [OnClickedParam<(typeof props.data)[0]>];
}>();

const getContributions = computed(() => {
  return (day: number) => {
    return props.data.filter(
      (d: any) => getDayOfYear(new Date(d[props.dateParam])) === day,
    ).length;
  };
});

const getDayData = (day: number) => {
  return props.data.filter(
    (d: any) => getDayOfYear(new Date(d[props.dateParam])) === day,
  );
};

const onClicked = (event: MouseEvent, day: number) => {
  const data: OnClickedParam<(typeof props.data)[0]> = {
    localeDate: getDateFromDayOfYear.value(day),
    date: getDateFromDayOfYear.value(day, true),
    contributions: getContributions.value(day),
    event,
    data: getDayData(day),
  };
  emit("onClicked", data);
};
</script>

<template>
  <div
    v-for="day in days"
    :key="day"
    v-show="
      day < 358 ||
      (getDateFromDayOfYear(day, true) as Date).getFullYear() ===
        new Date().getFullYear()
    "
    class="ring"
    :class="{
      active: getContributions(day) > 0,
      moreActive: getContributions(day) > 5,
      highestActive: getContributions(day) > 10,
      small: !size || size === 'sm',
      large: size === 'l',
      xlarge: size === 'xl',
      xsmall: size === 'xs',
      usmall: size === 'us',
    }"
    @click="onClicked($event, day)"
  >
    <div class="tooltip">
      {{
        label
          ? label(
              getDateFromDayOfYear(day, true) as Date,
              getContributions(day),
            )
          : getContributions(day) +
            ` contributions in ` +
            getDateFromDayOfYear(day)
      }}
    </div>
  </div>
</template>
