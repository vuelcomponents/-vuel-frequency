<script setup lang="ts">
import { OnClickedParam } from "../utils/types/OnClickedParam.ts";
import { getDayOfYear } from "../utils/days.ts";

const props = defineProps<{
  size?: "sm" | "l" | "xl" | "xs" | "us";
  label?: (date: Date, qty: number) => string;
  data: any;
  days: Array<any>;
  dateParam: string;
}>();

const emit = defineEmits<{
  onClicked: [OnClickedParam<(typeof props.data)[0]>];
}>();

const getDayData = (day: number) => {
  return props.data.filter(
    (d: any) => getDayOfYear(new Date(d[props.dateParam])) === day,
  );
};

const onClicked = (event: MouseEvent, day: any) => {
  const data: OnClickedParam<(typeof props.data)[0]> = {
    localeDate: day.date.toLocaleDateString(),
    date: day.date,
    contributions: day.contributions,
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
    v-show="day < 358 || day.date.getFullYear() === new Date().getFullYear()"
    class="frequency-ring"
    :class="{
      active: day.contributions > 0,
      moreActive: day.contributions > 5,
      highestActive: day.contributions > 10,
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
          ? label(day.date, day.contributions)
          : day.contributions + ` contributions in ` + day.date
      }}
    </div>
  </div>
</template>
